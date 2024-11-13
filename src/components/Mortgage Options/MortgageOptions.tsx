import { Stack, Title, Text, Flex, Container } from "@mantine/core";
import classes from "./Options.module.css";
import OptionsCards from "./OptionsCards";

function MortgageOptions() {
  return (
    <div>
      <Stack
        style={{
          backgroundColor: "#0073b2"
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
