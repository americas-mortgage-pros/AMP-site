import { Stack, Title, Text, Flex, Container} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./Options.module.css";
import wave from "../../images/Group.svg";
import OptionsCards from "./OptionsCards";

function MortgageOptions() {
  const isSmall = useMediaQuery('(max-width: 768px)');
  const isMedium = useMediaQuery('(max-width: 1200px)');
  
  const paddingBottom = isSmall ? '450px' : isMedium ? '250px' : '200px';

  return (
    <div>
      <Stack
        style={{
          backgroundImage: `url(${wave})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container
          mb="xl"
          pb={paddingBottom} 
        >
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

      <Stack style={{ height: "100vh" }}></Stack>
    </div>
  );
}

export default MortgageOptions;
