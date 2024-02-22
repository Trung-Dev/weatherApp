import { createElement } from "react";
import PropTypes from "prop-types";
import styles from "./A5Text.module.scss";
import { TextStyles, TextWeights } from "./A5Text.data";
import classNames from "classnames";

const A5Text = ({ children, className, style, weight }) => (
  <p
    className={classNames(
      styles.text,
      className,
      styles[style],
      styles[weight || TextWeights.normal]
    )}
  >
    {children}
  </p>
);

A5Text.propTypes = {
  type: PropTypes.string,
  style: PropTypes.oneOf(Object.values(TextStyles)),
  weight: PropTypes.oneOf(Object.values(TextWeights)),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export { A5Text };
