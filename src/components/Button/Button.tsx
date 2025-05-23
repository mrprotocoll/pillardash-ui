import { FC, ReactNode } from "react";

import classNames from "classnames";
import styles from './Button.module.css';

/**
 * Button component with multiple variants, sizes, and states
 *
 * @example
 * ```jsx
 * <Button variant="primary" size="medium" onClick={() => alert('Clicked!')}>
 *   Click Me
 * </Button>
 * ```
 */
export interface ButtonProps {
    /**
     * Button content
     */
    children: ReactNode;

    /**
     * Function called when button is clicked
     */
    onClick?: () => void;

    /**
     * HTML button type attribute
     * @default "button"
     */
    type?: "button" | "submit" | "reset";

    /**
     * Button size
     * @default "medium"
     */
    size?: "small" | "medium" | "large";

    /**
     * Button style variant
     * @default "primary"
     */
    variant?: "primary" | "secondary" | "dark" | "neutral";

    /**
     * Whether the button is disabled
     * @default false
     */
    disabled?: boolean;

    /**
     * Additional CSS class names
     */
    className?: string;

    /**
     * Optional icon to display before the button text
     */
    icon?: ReactNode;

    /**
     * Whether to show a loading spinner
     * @default false
     */
    loading?: boolean;
}

const Button: FC<ButtonProps> = ({
                                     children,
                                     onClick,
                                     type = "button",
                                     size = "medium",
                                     variant = "primary",
                                     disabled = false,
                                     className,
                                     icon,
                                     loading = false,
                                 }) => {
    const buttonClasses = classNames(
        styles.button,
        styles[size],
        styles[variant],
        {
            [styles.disabled]: disabled || loading,
        },
        className
    );

    const spinnerClasses = classNames(
        styles.spinner,
        styles[`spinner${size.charAt(0).toUpperCase() + size.slice(1)}`],
        styles[`spinner${variant.charAt(0).toUpperCase() + variant.slice(1)}`]
    );

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={buttonClasses}
        >
            {loading ? (
                <>
                    <svg
                        className={spinnerClasses}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className={styles.spinnerCircle}
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className={styles.spinnerPath}
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                    {children}
                </>
            ) : (
                <>
                    {icon && <span className={styles.iconSpacing}>{icon}</span>}
                    {children}
                </>
            )}
        </button>
    );
};

export default Button;
