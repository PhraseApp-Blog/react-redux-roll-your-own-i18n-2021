import { Heading } from "react-bulma-components";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <Heading className={styles.heading}>Offene</Heading>

      <Heading
        heading
        renderAs="h2"
        className={styles.tagline}
      >
        Continuous improvement
      </Heading>
    </header>
  );
}
