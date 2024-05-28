import {
  Badge,
  Button,
  ButtonGroup,
  Flex,
  Group,
  Overlay,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import classes from './Feed.page.module.css';
import { useState } from 'react';

export function FeedPage() {
  const theme = useMantineTheme();

  const [isCalibrationOverlayVisible, setIsCalibrationOverlayVisible] = useState(true);
  return (
    <>
      <div
        className={classes.feedContainer}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.dark[2],
          borderRadius: '.5rem',
        }}
      >
        <div style={{ position: 'relative' }}>
          <img
            src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
            alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
            height={500}
            style={{}}
          />
          <Badge color={theme.colors.red[7]} style={{ position: 'absolute', right: 20, top: 20 }}>
            Analyse en cours
          </Badge>
        </div>
      </div>
      <Flex direction={'row'} justify={'space-between'}>
        <Button color={theme.colors.green[6]}>Commencer l'activité</Button>
        <Stack>
          <Title order={3}>Calibration</Title>
          <img
            src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTLB6Z-19iaM5G7CUz8sDqOB75vLAOK8WI_H290TY8Htw5ddkfvegMO1QO4cjtd1eiPE-qLtQ2-uVh4NysLcNo"
            alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
            height={200}
            style={{}}
          />
          <Button>Calibrer</Button>
        </Stack>
      </Flex>

      {/* {isCalibrationOverlayVisible && (
        <Overlay
          color="#000"
          backgroundOpacity={0.65}
          blur={10}
          style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
        >
          <Text>Appuyez sur le bouton lorsque le participant est concentré sur l'activité</Text>

          <img
            src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
            alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
            height={500}
            style={{}}
          />
        </Overlay>
      )} */}
    </>
  );
}
