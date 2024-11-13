import { Card, Grid, Image, Text, Group, Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Fixed from "../../images/fixed-rate.webp"
import Adjustable from "../../images/adjustable-rate.jpg"
import FHA from "../../images/fha-loan.jpg"
import VA from "../../images/va-loans.png"
import Jumbo from "../../images/jumbo-loans.jpg"
import USDA from "../../images/usda-loans.webp"


function OptionsCards() {
  const CardNames = [
    {
      label: "Fixed Rate Mortgages",
      link: "/docs",
      desc: "Low, stable rates, with consistent payments, ideal for long-term homeownership.",
      img: `${Fixed}`
    },
    {
      label: "Adjustable Rate Mortgage",
      link: "/docs",
      desc: "Lower initial rates that adjust over time, great for short-term homeownership with rising incomes.",
      img: `${Adjustable}`
    },
    {
      label: "FHA Loans",
      link: "/docs",
      desc: "Low down payments and easier qualification, perfect for first-time buyers.",
      img: `${FHA}`
    },
    {
      label: "VA Loans",
      link: "/docs",
      desc: "Exclusive low rates and no down payments for veterans and their families.",
      img: `${VA}`
    },
    {
      label: "Jumbo Loans",
      link: "/docs",
      desc: "Loans for high-value properties that exceed standard limits. Perfect for purchasing luxury homes.",
      img: `${Jumbo}`
    },
    {
      label: "USDA Loans",
      link: "/docs",
      desc: "Low rates and no down payment for rural homebuyers, ideal for low to moderate-income families.",
      img: `${USDA}`
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
                  src={card.img}
                  height={150}
                  alt={card.label}
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
