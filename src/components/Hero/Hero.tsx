import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from "./Hero.module.css"
import { motion } from 'motion/react';

function Hero() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <motion.div 
        initial={{opacity: 0, scale: 0}}
        animate={{opacity: 1, scale: 1}}
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
          <Button className={classes.animBlue} size="lg">
            Get Started
          </Button>
          
        </div>
        
      </Container>
      </motion.div>
    </div>
  );
}

export default Hero;