import React from "react";
import styles from "./Hero.module.scss";

export default function HeroContainer({ children }: any) {
  return <div className={styles.container}>{children}</div>;
}
