import React from "react";

import styles from "./Textfield.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}

const Textfield: React.FC<Props> = ({ ...props }) => {
  return <input className={styles.container} type="text" {...props} />;
};

export default Textfield;
