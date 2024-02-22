import PropTypes from "prop-types";
import styles from "./M102IconTextList.module.scss";
import { A2Icon } from "../../atoms/a2-icon/A2Icon";
import { A5Text } from "../../atoms/a5-text/A5Text";
import { TextStyles } from "../../atoms/a5-text/A5Text.data";
import { iconNames } from "../../atoms/a2-icon/A2Icon.data";

const M102IconTextList = ({ rainfall, humidity, windSpeed }) => {
  const itemList = [
    {
      iconName: iconNames.rain_outline,
      children: `${rainfall}%`,
    },
    {
      iconName: iconNames.humidity_outline,
      children: `${humidity}%`,
    },
    {
      iconName: iconNames.wind_outline,
      children: `${windSpeed}km/h`,
    },
  ];

  return (
    <div className={styles.iconListWrapper}>
      {itemList.map((item, index) => (
        <div key={index} className={styles.itemList}>
          <A2Icon iconName={item.iconName} className={styles.icon} />
          <A5Text style={TextStyles.m}>{item.children}</A5Text>
        </div>
      ))}
    </div>
  );
};

M102IconTextList.propTypes = {
  rainfall: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
};

export { M102IconTextList };
