import { Heading, Columns } from "react-bulma-components";
import { LangSwitcher } from "../../features/lang-switcher/LangSwitcher";
import useTranslations from "../../services/i18n/useTranslations";
import styles from "./Header.module.scss";

export default function Header() {
  const { t } = useTranslations();

  return (
    <header className={styles.container}>
      <Columns className={styles.columns}>
        <Columns.Column>
          <Heading className={styles.heading}>
            Offen
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
