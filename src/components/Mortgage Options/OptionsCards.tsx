import { Card, Grid, Image, Text, Group, Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Fixed from "../../images/fixed-rate.webp";
import Adjustable from "../../images/adjustable-rate.jpg";
import FHA from "../../images/fha-loan.jpg";
import VA from "../../images/va-loans.png";
import Jumbo from "../../images/jumbo-loans.jpg";
import USDA from "../../images/usda-loans.webp";
import { motion } from "framer-motion"; 

function OptionsCards() {
  const CardNames = [
    {
      label: "Fixed Rate Mortgages",
      link: "/",
      desc: "Low, stable rates, with consistent payments, ideal for long-term homeownership.",
      img: `${Fixed}`,
      pos: "left",
      num: 3
    },
    {
      label: "Adjustable Rate Mortgage",
      link: "/",
      desc: "Lower initial rates that adjust over time, great for short-term homeownership with rising incomes.",
      img: `${Adjustable}`,
      pos: "left",
      num: 2
    },
    {
      label: "FHA Loans",
      link: "/",
      desc: "Low down payments and easier qualification, perfect for first-time buyers.",
      img: `${FHA}`,
      pos: "left",
      num: 1
    },
    {
      label: "VA Loans",
      link: "/",
      desc: "Exclusive low rates and no down payments for veterans and their families.",
      img: `${VA}`,
      pos: "right",
      num: 1
    },
    {
      label: "Jumbo Loans",
      link: "/",
      desc: "Loans for high-value properties that exceed standard limits. Perfect for purchasing luxury homes.",
      img: `${Jumbo}`,
      pos: "right",
      num: 2,
    },
    {
      label: "USDA Loans",
      link: "/",
      desc: "Low rates and no down payment for rural homebuyers, ideal for low to moderate-income families.",
      img: `${USDA}`,
      pos: "right",
      num: 3
    }
  ];

  const getAnimationValues = (pos: string) => {
    if (pos === "top") {
      return { yValInitial: { y: 50, opacity: 0 }, yValAnimate: { y: 0, opacity: 1 } };
    } else if ( pos === "bottom" ) {
      return { yValInitial: { y: -50, opacity: 0 }, yValAnimate: { y: 0, opacity: 1 } };
    } else if (pos === "left") {
      return { yValInitial: { x: -80, opacity: 0 }, yValAnimate: { x: 0, opacity: 1 } };
    } else if (pos === "right") {
      return { yValInitial: { x: 80, opacity: 0 }, yValAnimate: { x: 0, opacity: 1 } } ;
    }
    }

  return (
    <div>
      <Grid mb="xl">
        {CardNames.map((card, index) => {
          const { yValInitial, yValAnimate } = getAnimationValues(card.pos);

          return (
            <Grid.Col span={{ sm: 6, lg: 4 }} key={index}> 
              <motion.div
                initial={yValInitial}
                whileInView={yValAnimate} 
                transition={{ duration: 2,
                delay: card.num * 0.2, }} 
                layout
              >
                <Card
                  shadow="sm"
                  padding="lg"
                  radius="sm"
                  href={card.link} 
                  target="_blank"
                  component="a"
                  h="100%"
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
              </motion.div>
            </Grid.Col>
          );
        })}
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
