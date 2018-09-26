// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Image,
  Text
} from "spectacle";
import Viewer from "./viewer";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import bg1 from "../assets/styleshot1.jpg";
import chesterfield from "../assets/Chesterfield.jpg";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#49c7ba",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgImage={bg1} bgDarken={0.8}>
          <Heading size={4} fit caps lineHeight={1} textColor="secondary">
            Type Driven Development
          </Heading>
          <Text margin="10px 0 0" textColor="white" size={3} bold>
            Andreas Møller
          </Text>
          <Text margin="10px 0 0" textColor="white" size={4} bold>
            @cullophid
          </Text>
        </Slide>
        <Slide transition={["fade"]}>
          <Viewer />
        </Slide>
      </Deck>
    );
  }
}
