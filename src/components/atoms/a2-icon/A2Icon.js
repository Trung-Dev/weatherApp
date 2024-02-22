import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";
import { iconNames } from "./A2Icon.data";
import styles from "./A2Icon.module.scss";
import classNames from "classnames";

const A2Icon = ({ iconName, className }) => {
  const [iconPath, setIconPath] = useState(); // Create a local state for the path to the icon

  useEffect(() => {
    if (!iconName) return; // Do an early return if no name is provided

    import(`./svg/${iconName}.svg`) // Have webpack load the SVG file
      .then(({ default: iconSource }) => {
        setIconPath(iconSource); // Store the path to the file in the local icon state
      });
  }, [iconName]); // Re-trigger the effect when the name changes

  // Return an empty Fragment when there is no icon (still loading)
  if (!iconPath) return <Fragment />;

  // Make sure the SVG is inlined, this is done through the ReactSVG component
  return (
    <ReactSVG className={classNames(styles.icon, className)} src={iconPath} />
  );
};

A2Icon.propTypes = {
  className: PropTypes.string,
  iconName: PropTypes.oneOf(Object.keys(iconNames)).isRequired,
};

export { A2Icon };
