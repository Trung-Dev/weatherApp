// .storybook/storybookHelper.js
import React from "react";

/**
 * Generates a story based on a React component and its props.
 *
 * @param {Object} Component - The React component to create a story for.
 * @param {Object} args - The component's props.
 * @returns {React.ReactNode} - The rendered story.
 */
export function createStory(Component, args) {
  return () => <Component {...args} />;
}
