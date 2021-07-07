import { Heading } from "react-bulma-components";
import Rating from "./Rating";
import useTranslations from "../../services/i18n/useTranslations";
import styles from "./Ratings.module.scss";

export default function Ratings() {
  const { t } = useTranslations();

  return (
    <>
      <Heading heading renderAs="h3">
        {t.ratings}
      </Heading>

      <div className={styles.ratings}>
        <Rating name={t.composition} rating={4} />
        <Rating name={t.technique} rating={3} />
        <Rating name={t.color_scheme} rating={2} />
        <Rating name={t.expressiveness} rating={4} />
        <Rating name={t.tilt} rating={4} />
      </div>
    </>
  );
}
