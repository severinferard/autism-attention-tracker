import { Badge, Button, Card, Grid, Group, Image, Text } from '@mantine/core';

type FeedCardProps = {
  previewSource: string;
  name: string;
};

function FeedCard({ name, previewSource }: FeedCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={previewSource} height={160} alt="Feed preview" />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{name}</Text>
      </Group>

      <Button color="blue" fullWidth mt="md" radius="md">
        Visionner
      </Button>
    </Card>
  );
}

const feeds = [{ previewSource: '', name: 'Feed 1' }];

export function FeedsPage() {
  return (
    <Grid>
      {feeds.map((feed) => (
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
          <FeedCard name={feed.name} previewSource={feed.previewSource} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
