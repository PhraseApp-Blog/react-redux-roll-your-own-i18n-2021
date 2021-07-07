import { Heading } from "react-bulma-components";
import styles from "./Artwork.module.scss";

export default function Artwork({ src, title }) {
  return (
    <section className={styles.section}>
      <Heading
        size="5"
        renderAs="h2"
        className={styles.heading}
      >
        {title}
      </Heading>

      <figure className={styles.figure}>
        <img src={src} alt={title} />
      </figure>
    </section>
  );
}
