// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Layout,
  Fill,
  Text,
  Image,
  CodePane,
  Appear,
  Link
} from "spectacle";
import Viewer from "./viewer";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import bg1 from "../assets/styleshot1.jpg";
import bg2 from "../assets/styleshot2.jpg";
import bg3 from "../assets/styleshot3.jpg";
import bg4 from "../assets/styleshot4.jpg";

import chesterfield from "../assets/chesterfield.png";
import bed_double from "../assets/BED_DOUBLE.png";
import branco_armchair from "../assets/BRANCO_ARMCHAIR.png";
import chest from "../assets/CHEST.png";
import chantel_chair from "../assets/CHANTEL_CHAIR.png";
import ARCHIBALD_CHAIR from "../assets/ARCHIBALD_CHAIR.png";
import BALFOUR_CHAIR from "../assets/BALFOUR_CHAIR.png";
import churchill_table from "../assets/CHURCHILL_TABLE.png";
import BORDEAUX_TABLE from "../assets/BORDEAUX_TABLE.png";
import BELLINGHAM_SOFA from "../assets/BELLINGHAM_SOFA.png";
import BARLOW_CHAIR from "../assets/BARLOW_CHAIR.png";
import EGG_CHAIR from "../assets/EGG_CHAIR.png";
import TOGO_SOFA from "../assets/TOGO_SOFA.png";

import ddd from "../assets/ddd.jpg";
import voyager_logo from "../assets/voyager_logo.png";
import logo_white from "../assets/cylindo_logo_white.png";
import logo_dark from "../assets/cylindo_logo_dark.png";
import logo_single from "../assets/cylindo_logo_single.png";

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

const Code = ({ source, lang = "graphql", textSize = 24 }) => (
  <Fill>
    <CodePane
      width="400px"
      theme="light"
      textSize={textSize}
      lang={lang}
      source={source}
    />
  </Fill>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide bgImage={bg2} notes="Hello" align="flex-start flex-end">
          <Image src={logo_dark} style={{ height: 130 }} />
          <Text
            margin="0 0 70px 0"
            textColor="white"
            textSize={36}
            style={{ textShadow: "1px 1px 5px black" }}
          >
            <strong>Andreas Møller</strong> @cullophid
          </Text>
        </Slide>
        <Slide transition={["fade"]}>
          <Viewer />
        </Slide>
        <Slide bgImage={bg3}>
          <Heading
            textSize={72}
            size={1}
            fit
            caps
            lineHeight={1}
            textColor="white"
            style={{ textShadow: "1px 1px 5px black" }}
          >
            Type Driven Development
          </Heading>
        </Slide>
        <Slide
          bgImage={chesterfield}
          presenterStyle={{
            backgroundPosition: "bottom right",
            backgroundSize: 400,
            backgroundRepeat: "no-repeat"
          }}
        >
          <Image src={ddd} width={400} />
        </Slide>
        <Slide
          bgImage={BELLINGHAM_SOFA}
          presenterStyle={{
            backgroundPosition: "bottom right",
            backgroundSize: 400,
            backgroundRepeat: "no-repeat"
          }}
        >
          <Code
            lang="graphql"
            source={`
            type Report {
              id:String!
              title:String!
              author:User!
              createdAt:User!
              pages:[Page]!
            }

            type Query {
              reports: [Report]
            }
          `}
          />
        </Slide>

        <Slide
          bgImage={bed_double}
          presenterStyle={{
            backgroundPosition: "bottom right",
            backgroundSize: 400,
            backgroundRepeat: "no-repeat"
          }}
        >
          <Code
            lang="javascript"
            source={`
                  {
                    reports {
                      id
                      title
                      pages {
                        id
                        title
                        subtitle
                      }

                    }
                  }
          `}
          />
        </Slide>

        <Slide
          bgImage={bed_double}
          presenterStyle={{
            backgroundPosition: "bottom right",
            backgroundSize: 400,
            backgroundRepeat: "no-repeat"
          }}
        >
          <Code
            lang="javascript"
            source={`
                  {
                    "data": {
                      "reports" [{
                        "id": 1,
                        "title": "Global Warming",
                        "pages": {
                          "id:: 1,
                          "title": "Global Warming",
                          "subtitle: "Its bad"
                        }
                      }
                    }
                  }
          `}
          />
        </Slide>

        <Slide
          bgImage={chest}
          presenterStyle={{
            backgroundPosition: "bottom right",
            backgroundSize: 400,
            backgroundRepeat: "no-repeat"
          }}
        >
          <Code
            source={`
            type Report {
              id:String!
              title:String!
              author:User!
              createdAt: DateTime!
              pages:[Page]!

            }
          `}
          />
        </Slide>

        <Slide
          bgImage={chest}
          presenterStyle={{
            backgroundPosition: "bottom right",
            backgroundSize: 400,
            backgroundRepeat: "no-repeat"
          }}
        >
          <Code
            source={`
                type Report {
                  id:String!
                  title:String!
                  author:User!
                  createdAt:User!
                  frontPage:Page!
                  pages:[Page]!
                  
                }
                `}
          />
        </Slide>

        <Slide
          bgImage={EGG_CHAIR}
          presenterStyle={{
            backgroundPosition: "bottom right",
            backgroundSize: 400,
            backgroundRepeat: "no-repeat"
          }}
        >
          <Code
            source={`
            scalar Email

            type User {
              id:ID!
              firstname:String!
              lastname:String!
              email:Email!
            }
          `}
          />
        </Slide>
        <Slide
          bgImage={chantel_chair}
          presenterStyle={{
            backgroundPosition: "bottom right",
            backgroundSize: 400,
            backgroundRepeat: "no-repeat"
          }}
        >
          <Code
            source={`
            enum ReportState {
              Inactive,
              Active,
              PendingReview
            }

            type Report {
              id:String!
              state:ReportState!
              title:String!
              author:User!
              createdAt: DateTime!
              pages:[Page]!
            }
          `}
          />
        </Slide>
        <Slide
          bgImage={BORDEAUX_TABLE}
          presenterStyle={{
            backgroundPosition: "bottom right",
            backgroundSize: 400,
            backgroundRepeat: "no-repeat"
          }}
        >
          <Code
            source={`
            
            type Weekly = {
              dayOfWeek: Weekday!
              startDay:Date!
              endDay:Date!
            }

            type Monthly {
              dayOfMonth: Int!
              startDay:Date!
              endDay:Date!
            }
            
            type Schedule = 
              Weekly | Monthly
            
            `}
          />
        </Slide>
        <Slide
          bgImage={BORDEAUX_TABLE}
          presenterStyle={{
            backgroundPosition: "bottom right",
            backgroundSize: 400,
            backgroundRepeat: "no-repeat"
          }}
        >
          <Code
            source={`
            
                  type Report {
                    id:String!
                    state:ReportState!
                    schedule:Schedule!
                    title:String!
                    author:User!
                    createdAt: DateTime!
                    pages:[Page]!
                  } 
            
            `}
          />
        </Slide>
        <Slide
          bgImage={ARCHIBALD_CHAIR}
          presenterStyle={{
            backgroundPosition: "bottom right",
            backgroundSize: 400,
            backgroundRepeat: "no-repeat"
          }}
        >
          <Link target="_blank" href="http://localhost:4000/voyager">
            <Image src={voyager_logo} />
          </Link>
        </Slide>

        <Slide
          bgColor="secondary"
          bgImage={BALFOUR_CHAIR}
          presenterStyle={{
            backgroundPosition: "bottom right",
            backgroundSize: 400,
            backgroundRepeat: "no-repeat"
          }}
        >
          <Heading size={1} textSize={72} caps lineHeight={2} textColor="white">
            We are hiring!
          </Heading>
          <Image src={logo_white} />
        </Slide>
      </Deck>
    );
  }
}
