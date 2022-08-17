import React from "react";

import styles from "./Textfield.module.scss";

const Textfield: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return <input className={styles.container} type="text" {...props} />;
};

export default Textfield;
