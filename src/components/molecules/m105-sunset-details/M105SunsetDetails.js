import React from "react";
import PropTypes from "prop-types";
import styles from "./M105SunsetDetails.module.scss";
import { A2Icon } from "../../atoms/a2-icon/A2Icon";
import { A5Text } from "../../atoms/a5-text/A5Text";
import { iconNames } from "../../atoms/a2-icon/A2Icon.data";
import ConvertTimestamp from "../../../data/ConvertTimestamp";
import WeatherDummyData from "../../../data/WeatherDummyData";

const M105SunsetDetails = () => {
  const itemList = [
    {
      iconName: iconNames.sunset_outline,
      hour: `${ConvertTimestamp(WeatherDummyData.sys.sunrise).hour}:${ConvertTimestamp(WeatherDummyData.sys.sunrise).minutes}${ConvertTimestamp(WeatherDummyData.sys.sunrise).period}`,
      sunPhaseText: 'Sun rise',
    },
    {
      iconName: iconNames.sunset_outline,
      hour: `${ConvertTimestamp(WeatherDummyData.sys.sunset).hour}:${ConvertTimestamp(WeatherDummyData.sys.sunset).minutes}${ConvertTimestamp(WeatherDummyData.sys.sunset).period}`,
      sunPhaseText: 'Sun set',
    },
  ];

  return (
    <div className={styles.sunsetDetails} >
      {itemList.map((item, index) => (
        <div key={index} className={styles.itemList}>
          <A2Icon iconName={item.iconName} className={styles.icon} />
          <A5Text >{item.hour}</A5Text>
          <A5Text >{item.sunPhaseText}</A5Text>
        </div>
      ))}
    </div>
  );
};

M105SunsetDetails.propTypes = {
};

export { M105SunsetDetails };
