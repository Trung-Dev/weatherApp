import { React, useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./O107DailyForecastSummaryDetail.module.scss";
import getFormattedMonthDay from "../../../data/getFormattedMonthDay";
import { M106VerticalForecastSum } from "../../molecules/m106-vertical-forecast-sum/M106VerticalForecastSum";
import { A5Text } from "../../atoms/a5-text/A5Text";
import { itemList } from "../../../data/DailyForecastItemList";

const O107DailyForecastSummaryDetail = () => {
  const date = useMemo(() => getFormattedMonthDay(new Date()), []);

  return (
    <div className={styles.centreWrapper}>
      <div className={styles.dailyForecastDetailContainer}>
        <div className={styles.textWrapper}>
              <A5Text className={styles.containerTitle}>Summary</A5Text>
              <A5Text className={styles.date}>{date.today}</A5Text>
        </div>
        <div className={styles.dailyForecastDetailWrapper}>
          {itemList.map((item, index) => (
            <div className={styles.itemList} key={index}>
              <M106VerticalForecastSum {...item}/>
            </div>
          ))}
        </div>
      </div>
  </div>
  )
};

O107DailyForecastSummaryDetail.propTypes = {
};

export { O107DailyForecastSummaryDetail };
