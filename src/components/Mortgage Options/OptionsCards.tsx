import { Card, Grid, Image, Text, Group, Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

function OptionsCards() {
  const CardNames = [
    {
      label: "Mortgage Options",
      link: "/docs",
      desc: "Hello everyone"
    },
    {
      label: "Mortgage Options",
      link: "/docs",
      desc: "Hello everyone"
    },
    {
      label: "Mortgage Options",
      link: "/docs",
      desc: "Hello everyone"
    },
    {
      label: "Mortgage Options",
      link: "/docs",
      desc: "Hello everyone"
    },
    {
        label: "Mortgage Options",
        link: "/docs",
        desc: "Hello everyone"
      },
      {
        label: "Mortgage Options",
        link: "/docs",
        desc: "Hello everyone"
      },
  ];

  return (
    <div>
      <Grid mb="xl">
        {CardNames.map((card) => (
          <Grid.Col span={{ sm: 6, lg: 4 }}>
            <Card
              shadow="sm"
              padding="lg"
              radius="sm"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              component="a"
            >
              <Card.Section withBorder> 
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={130}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="left" mt="md">
                <Text fw={500}>{card.label}</Text>
                <Text size="sm" ta="left" c="dimmed">
                  With Fjord Tours you can explore more of the magical fjord
                  landscapes with
                </Text>
              </Group>
            </Card>
          </Grid.Col>
          
        ))}
      </Grid>
      <Button
        variant="transparent" color="rgba(255, 255, 255, 1)"
        rightSection={<IconArrowRight size={18} />}
      >
        Explore More Options
      </Button>
    </div>
  );
}

export default OptionsCards;
