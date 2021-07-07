import { Dropdown } from "react-bulma-components";
import { useSelector, useDispatch } from "react-redux";
import { setLangAsync } from "../../services/i18n/i18nSlice";
import styles from "./LangSwitcher.module.scss";

export function LangSwitcher() {
  const lang = useSelector((state) => state.i18n.lang);
  const supportedLangs = useSelector(
    (state) => state.i18n.supportedLangs,
  );

  const dispatch = useDispatch();

  return (
    <Dropdown
      right
      color="dark"
      className={styles.dropdown}
      value={lang}
      onChange={(newLang) =>
        dispatch(setLangAsync(newLang))
      }
    >
      {Object.entries(supportedLangs).map(
        ([code, name]) => (
          <Dropdown.Item
            value={code}
            key={code}
            renderAs="a"
          >
            {name}
          </Dropdown.Item>
        ),
      )}
    </Dropdown>
  );
}
