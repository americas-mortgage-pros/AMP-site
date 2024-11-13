import { Stack, Title, Text, Flex, Container } from "@mantine/core";
import classes from "./Options.module.css";
import OptionsCards from "./OptionsCards";

function MortgageOptions() {
  return (
    <div>
      <Stack
        style={{
           backgroundColor: "hsla(201, 100%, 34%, 1)",
           backgroundImage: "radial-gradient(at 48% 62%, hsla(201, 100%, 34%, 0.7) 0px, transparent 50%), " +
           "radial-gradient(at 38% 9%, hsla(200, 100%, 39%, 0.5) 0px, transparent 50%), " +
           "radial-gradient(at 0% 100%, hsla(201, 100%, 34%, 0.5) 0px, transparent 50%), " +
           "radial-gradient(at 42% 58%, hsla(2, 49%, 54%, 0.8) 0px, transparent 50%), " +
           "radial-gradient(at 80% 0%, hsla(201, 100%, 34%, 0.5) 0px, transparent 50%), " +
           "radial-gradient(at 98% 96%, hsla(202, 100%, 44%, 0.5) 0px, transparent 50%), " +
           "radial-gradient(at 74% 28%, hsla(1, 40%, 65%, 0.5) 0px, transparent 50%), " +
           "radial-gradient(at 0% 0%, hsla(201, 100%, 34%, 0.5) 0px, transparent 50%)"
          }}
        pb="xl"
      >
        <Container>
          <Flex mt="xl" py="xl" gap={3} direction="column">
            <Title c="white" order={3}>
              Find the mortgage that's right for you
            </Title>
            <Text className={classes.description}>
              Explore our many mortgage options
            </Text>
          </Flex>
          <OptionsCards></OptionsCards>
        </Container>
      </Stack>
    </div>
  );
}

export default MortgageOptions;
