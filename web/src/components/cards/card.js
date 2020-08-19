import React from "react";
import "./card.css";

const Card = ({ variant, size, children }) => (
  <div
    className={
      "card" +
      (size === "small" ? " card-small" : "") +
      (size === "large" ? " card-large" : "") +
      (variant === "active" ? " card-active" : "") +
      (variant === "expired" ? " card-expired" : "") +
      (variant === "utilized" ? " card-utilized" : "")
    }
  >
    {children}
  </div>
);

export default Card;
