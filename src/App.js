import React, { useEffect } from "react";
import {
  Section,
  Container,
  Columns,
} from "react-bulma-components";
import useTranslations from "./services/i18n/useTranslations";
import Header from "./layout/header/Header";
import Artwork from "./features/artwork/Artwork";
import Ratings from "./features/ratings/Ratings";

function App() {
  const { init, status: i18nStatus } = useTranslations();

  useEffect(() => init(), []);

  return i18nStatus === "loading" ? (
    <p>Loading...</p>
  ) : (
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
