import React from "react";
import {
  Section,
  Container,
  Columns,
} from "react-bulma-components";
import Header from "./layout/header/Header";
import Artwork from "./features/artwork/Artwork";
import Ratings from "./features/ratings/Ratings";

function App() {
  return (
    <>
      <Header />

      <Section>
        <Container>
          <Columns>
            <Columns.Column>
              <Artwork
                title="Zelda Skyward Sword Fan Art"
                src="/art/zelda-skyward-sword-walkthrough-hd.jpg"
              />
            </Columns.Column>

            <Columns.Column>
              <Ratings />
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
    </>
  );
}

export default App;
