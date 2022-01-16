

import React from "react";

/**
 * Represents a Button
 * @param onClick
 * @param className
 * @param children
 * @returns {*}
 * @constructor
 */

const Button = ({
                    onClick,
                    className = '',
                    children,
                }) =>
    <button
        onClick={onClick}
        className={className}
        type="button"
    >
        {children}
    </button>

export default Button;