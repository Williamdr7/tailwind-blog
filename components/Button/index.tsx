import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  variant?: string;
  children: any;
}
export default function Button({ variant, children }: ButtonProps) {
  return <button className={`${styles.container}`}>{children}</button>;
}
