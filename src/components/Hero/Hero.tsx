import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from "./Hero.module.css"
import { motion } from 'motion/react';

function Hero() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#212121" opacity={0.65} zIndex={1} />
      <motion.div 
      style={{
        zIndex: 99,
        position: "relative",
      }}
        initial={{opacity: 0, y: 150}}
        animate={{opacity: 1, y: 0 }}
        >
          
      <Container size={640} className={classes.inner}>
        <Container p={0} size={530}>
        <Title mb="md" className={classes.title}>
          Home financing made{' '}
          <Text component="span" inherit className={classes.highlight}>
          easy and accessible
          </Text>

        </Title>
        </Container>
        <Container size={640}>
          <Text size="lg" className={classes.description}>
          We offer reliable, straightforward mortgage services to help
           individuals navigate the lending process with confidence. We provide the tools and resources you need.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button component='a' target='_blank' href='https://jrboston.zipforhome.com/LoanApplication/Contact?Language=E' className={classes.animBlue} size="lg">
            Get Started
          </Button>
          
        </div>
        
      </Container>
      </motion.div>
    </div>
  );
}

export default Hero;