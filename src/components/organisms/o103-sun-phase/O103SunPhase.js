import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import SunPhaseSvg from "./SunPhaseSvg";
import { getSunMoonValue } from "../../../data/FetchSunset";
import { M105SunsetDetails } from "../../molecules/m105-sunset-details/M105SunsetDetails"
import styles from "./O103SunPhase.module.scss";
import GetSunStandProgressPercentage from "../../../data/GetSunStandProgressPercentage";

gsap.registerPlugin(MotionPathPlugin);
const O103SunPhase = () => {
  const sunContainerRef = useRef(null);

  useEffect(() => {
    const targetContainer = sunContainerRef.current;
    const sunContainer = targetContainer.querySelector('.sunContainer');
    const moonContainer = targetContainer.querySelector('.moonContainer');
    const svgPath = targetContainer.querySelector('.ellipse > path');

    getSunMoonValue()
    .then(sunRiseSunset => {
      if (sunRiseSunset === "sun") {
        gsap.set(moonContainer, {
          opacity: 0,
        });
      }
      else {
        gsap.set(sunContainer, {
          opacity: 0,
        });
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });

    gsap.to([ sunContainer, moonContainer], {
      duration: 3,
      repeat: -1,
      yoyo: true,
      motionPath: {
        path: svgPath,
        align: svgPath,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        start: 0,
        end: GetSunStandProgressPercentage(),
      },
    });
  }, []);

  return (
    <div className={styles.centreWrapper}>
      <div className={styles.sunPhaseContainer}>
        <SunPhaseSvg ref={sunContainerRef} />
        <M105SunsetDetails />
      </div>
    </div>
  );
};

O103SunPhase.propTypes = {};

export { O103SunPhase };
