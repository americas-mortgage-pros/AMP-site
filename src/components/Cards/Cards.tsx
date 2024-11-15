import { Card, Grid, Image, Text, Group } from "@mantine/core";
import { motion } from "motion/react";
import optionsImage from "../../images/mortgage options.png"
import calculatorImage from "../../images/calculator.jpg"
import partnershipImage from "../../images/partnership.jpg"
import careersImage from "../../images/careers.jpeg"


function Cards() {

  const CardNames = [
    {
      label: 'Mortgage Options',
      link: '/',
      img: `${optionsImage}`
    },
    {
      label: 'Mortgage Calculators',
      link: '/',
      img: `${calculatorImage}`
    },
    {
      label: 'Partnerships',
      link: '/',
      img: `${partnershipImage}`
    },
    {
      label: 'Loan Orignators',
      link: '/',
      img: `${careersImage}`
    },
  ]

  return (
    <div>
      <Grid my="xl" py="xl">
      { CardNames.map(card => (
        <Grid.Col span={{ sm: 6, lg: 3 }}>
          <motion.div whileHover={{ scale: 1.05 }}>
            { /* backgroundColor: "#f05e54"*/ }
            <Card style={{backgroundColor: "#f05e54"}}  shadow="sm" padding="lg" radius="sm" withBorder
                  href=""
                  target="_blank"
                  component="a">
            <Card.Section>
              { /* <Box pos="relative"> */ }
              <Image
                src={card.img}
                height={130}
                alt="Norway"
              /> 
              {/* <Overlay gradient="linear-gradient(140deg, rgba(240, 94, 84, 0.5) 0%, rgba(0, 133, 201, 0.5) 100%)" opacity={0.85} zIndex={1}></Overlay> */}
            </Card.Section>

            <Group style={{zIndex: 20}} justify="center" mt="md">
              <Text c="white" fw={500}>{card.label}</Text>
            </Group>
          </Card>
          </motion.div>
          </Grid.Col>
          ))}
      </Grid>
    </div>
  );
}

export default Cards;
