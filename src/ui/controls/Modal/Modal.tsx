import React from "react";

import styles from "./Modal.module.scss";

interface Props {
  children: React.ReactNode;
  onClose: VoidFunction;
}

const Modal: React.FC<Props> = ({ children, onClose }) => {
  return (
    <section className={styles.container}>
      <b onClick={onClose}></b>
      <article>{children}</article>
    </section>
  );
};

export default Modal;
