import React, { createElement } from "react";
import PropTypes from "prop-types";
import styles from "./A1Heading.module.scss";
import {
  HeadingStyles,
  HeadingTypes,
  HeadingWeightMap,
  HeadingWeights,
} from "./A1Heading.data";
import classNames from "classnames";

const A1Heading = ({ children, style, type, weight }) =>
  createElement(
    type ?? "h1",
    {
      className: classNames({
        [styles.heading]: true,
        [styles[style]]: style,
        [styles[weight]]: weight,
      }),
    },
    children
  );

A1Heading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  style: PropTypes.oneOf(Object.values(HeadingStyles)),
  type: PropTypes.oneOf(Object.values(HeadingTypes)),
  weight: PropTypes.oneOf(Object.values(HeadingWeights)),
};

export { A1Heading };
