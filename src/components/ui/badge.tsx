import type * as React from "react"
import styles from "./Badge.module.css"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const badgeClass = `${styles.badge} ${styles[variant]} ${className || ""}`
  return <div className={badgeClass} {...props} />
}

export { Badge }
