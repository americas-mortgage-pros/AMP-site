import { Card, Grid, Image, Text, Group, Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

function OptionsCards() {
  const CardNames = [
    {
      label: "Fixed Rate Mortgages",
      link: "/docs",
      desc: "Low, stable rates, with consistent payments, ideal for long-term homeownership."
    },
    {
      label: "Adjustable Rate Mortgage",
      link: "/docs",
      desc: "Lower initial rates that adjust over time, great for short-term homeownership with rising incomes."
    },
    {
      label: "FHA Loans",
      link: "/docs",
      desc: "Low down payments and easier qualification, perfect for first-time buyers."
    },
    {
      label: "VA Loans",
      link: "/docs",
      desc: "Exclusive low rates and no down payments for veterans and their families."
    },
    {
      label: "Jumbo Loans",
      link: "/docs",
      desc: "Loans for high-value properties that exceed standard limits. Perfect for purchasing luxury homes."
    },
    {
      label: "USDA Loans",
      link: "/docs",
      desc: "Low rates and no down payment for rural homebuyers, ideal for low to moderate-income families."
    }
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
              href="#"
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
                  {card.desc}
                </Text>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
      <Button
        mb="xl"
        variant="transparent"
        color="rgba(255, 255, 255, 1)"
        rightSection={<IconArrowRight size={18} />}
      >
        Explore More Options
      </Button>
    </div>
  );
}

export default OptionsCards;
