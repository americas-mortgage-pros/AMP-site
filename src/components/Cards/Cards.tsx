import { Card, Grid, Image, Text, Group } from "@mantine/core";

function Cards() {

  const CardNames = [
    {
      label: 'Mortgage Options',
      link: '/docs'
    },
    {
      label: 'Mortgage Calculators',
      link: '/docs'
    },
    {
      label: 'Partnerships',
      link: '/docs'
    },
    {
      label: 'Loan Orignators',
      link: '/docs'
    },
  ]

  return (
    <div>
      <Grid my="xl" py="xl">
      { CardNames.map(card => (
        <Grid.Col span={{ sm: 6, lg: 3 }}>
            <Card shadow="sm" padding="lg" radius="sm" withBorder
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  component="a">
            <Card.Section>
              <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                height={130}
                alt="Norway"
              />
            </Card.Section>

            <Group justify="center" mt="md">
              <Text fw={500}>{card.label}</Text>
            </Group>
          </Card>
          </Grid.Col>
          ))}
      </Grid>
    </div>
  );
}

export default Cards;
