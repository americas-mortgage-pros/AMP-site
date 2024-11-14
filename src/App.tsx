import "./App.css";
import { createTheme, MantineProvider, Anchor, Container } from "@mantine/core";
import "@mantine/core/styles.css";
import NavBar from "./components/Navigation/NavBar";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import MortgageOptions from "./components/Mortgage Options/MortgageOptions";
import ReviewAnimation from "./components/Reviews/Reviews";
import SeeMoreReviews from "./components/Reviews/SeeMoreReviews";

function App() {
  const myColor: [string, string, string, string, string, string, string, string, string, string] = [ 
    "#e5f9ff",
    "#d0efff",
    "#a0ddfd",
    "#6dcafb",
    "#48bafa",
    "#35b0fa",
    "#28abfb",
    "#1a95e0",
    "#0085c9",
    "#0073b2"
  ]

  const theme = createTheme({
    colors: {
      myColor,
    },
    primaryColor: "myColor",
    primaryShade: 8,
    focusRing: 'always',
    components: {
      Anchor: Anchor.extend({
        defaultProps: {
          underline: "never"
        }
      })
    }
  });

  return (
    <MantineProvider theme={theme}>
      <NavBar></NavBar>
      <Hero></Hero>
      <Container>
        <Cards></Cards>
      </Container>
      <MortgageOptions></MortgageOptions>
      <Container py="xl" my="xl">
      <ReviewAnimation></ReviewAnimation>
      </Container>
      <SeeMoreReviews></SeeMoreReviews>
    </MantineProvider>
  );
}

export default App;
