import { Heading } from "react-bulma-components";
import Rating from "./Rating";
import styles from "./Ratings.module.scss";

export default function Ratings() {
  return (
    <>
      <Heading heading renderAs="h3">
        Ratings
      </Heading>

      <div className={styles.ratings}>
        <Rating name="Composition" rating={4} />
        <Rating name="Technique" rating={3} />
        <Rating name="Colour Scheme" rating={2} />
        <Rating name="Expressiveness" rating={4} />
        <Rating name="Tilt" rating={4} />
      </div>
    </>
  );
}
