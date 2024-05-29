from flask import Flask, render_template, Response, redirect, url_for
import cv2
from gaze_tracking import GazeTracking

app = Flask(__name__)

# Initialize the GazeTracking object
gaze = GazeTracking()
camera = cv2.VideoCapture(0)

def gen_frames():
    while True:
        success, frame = camera.read()  # read the camera frame
        if not success:
            break
        else:
            # Process the frame with gaze tracking
            gaze.refresh(frame)
            frame = gaze.annotated_frame()

            # Add gaze direction text
            if gaze.is_blinking():
                text = "Blinking"
            elif gaze.is_right():
                text = "Looking right"
            elif gaze.is_left():
                text = "Looking left"
            elif gaze.is_up():
                text = "Looking up"
            elif gaze.is_down():
                text = "Looking down"
            else:
                text = "Looking center"

            cv2.putText(frame, text, (20, 60), cv2.FONT_HERSHEY_DUPLEX, 1.6, (147, 58, 31), 2)

            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n') 

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/video_feed')
def video_feed():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/roi')
def roi():
    left_pupil = gaze.pupil_left_coords()
    right_pupil = gaze.pupil_right_coords()
    horizontal_ratio = gaze.horizontal_ratio()
    vertical_ratio = gaze.vertical_ratio()
    print(left_pupil, right_pupil, horizontal_ratio, vertical_ratio)
    
    #return Response(left_pupil, right_pupil, horizontal_ratio, vertical_ratio)
    return redirect(url_for('index'))

@app.route('/stopTracking')
def stopTracking():
    # Stop the camera and release resources
    camera.release()
    cv2.destroyAllWindows()
    return redirect(url_for('index'))


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True, port=5555)
