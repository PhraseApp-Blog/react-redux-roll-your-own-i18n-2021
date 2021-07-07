import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Section,
  Container,
  Columns,
} from "react-bulma-components";
import { setLangAsync } from "./services/i18n/i18nSlice";
import Header from "./layout/header/Header";
import Artwork from "./features/artwork/Artwork";
import Ratings from "./features/ratings/Ratings";

function App() {
  const i18nStatus = useSelector(
    (state) => state.i18n.status,
  );

  const dispatch = useDispatch();
  useEffect(() => dispatch(setLangAsync()), []);

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
