import { useSelector } from "react-redux";
import { Heading } from "react-bulma-components";
import { selectTranslations } from "../../services/i18n/i18nSlice";
import styles from "./Header.module.scss";

export default function Header() {
  const t = useSelector(selectTranslations);

  return (
    <header className={styles.container}>
      <Heading className={styles.heading}>Offene</Heading>

      <Heading
        heading
        renderAs="h2"
        className={styles.tagline}
      >
        {t.tagline}
      </Heading>
    </header>
  );
}
