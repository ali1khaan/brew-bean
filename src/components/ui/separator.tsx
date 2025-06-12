import * as React from "react"
import styles from "./Separator.module.css"

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = "horizontal", ...props }, ref) => {
    const separatorClass = `${styles.separator} ${styles[orientation]} ${className || ""}`
    return <div ref={ref} className={separatorClass} {...props} />
  },
)
Separator.displayName = "Separator"

export { Separator }
