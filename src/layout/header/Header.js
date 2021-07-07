import { useSelector } from "react-redux";
import { Heading, Columns } from "react-bulma-components";
import { selectTranslations } from "../../services/i18n/i18nSlice";
import { LangSwitcher } from "../../features/lang-switcher/LangSwitcher";
import styles from "./Header.module.scss";

export default function Header() {
  const t = useSelector(selectTranslations);

  return (
    <header className={styles.container}>
      <Columns className={styles.columns}>
        <Columns.Column>
          <Heading className={styles.heading}>
            Offene
          </Heading>

          <Heading
            heading
            renderAs="h2"
            className={styles.tagline}
          >
            {t.tagline}
          </Heading>
        </Columns.Column>

        <Columns.Column narrow>
          <LangSwitcher />
        </Columns.Column>
      </Columns>
    </header>
  );
}
