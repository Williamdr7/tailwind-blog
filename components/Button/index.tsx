import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  variant?: string;
  children: any;
  className?: any;
}
export default function Button({ variant, children, className }: ButtonProps) {
  return (
    <button className={`${styles.container} ${className}`}>{children}</button>
  );
}
