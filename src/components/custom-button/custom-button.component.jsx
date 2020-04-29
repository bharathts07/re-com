import React from "react";

import "./custom-button.styles.scss";

// use inverted is true then add inverted class to the component which is used to change the style
// of the displayed button
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
      inverted ? "inverted" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
