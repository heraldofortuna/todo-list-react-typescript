import React from "react";

import styles from "./Button.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  colorSchema?: "primary" | "secondary";
}

const Button: React.FC<Props> = ({
  children,
  colorSchema = "secondary",
  ...props
}) => {
  return (
    <button className={`${styles.container} ${styles[colorSchema]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
