import "./todo.css";
import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

//React.ComponentPropsWithoutRef means that our button will be able to get onClick and all standard native button props - automatically
type ButtonProps<T extends ElementType> = {
    renderAs?: T; // as=renderAs provides us not only with standard button props also if the any other element is specified like 'a' tag we will also get its props like link and href
    className?: string;
    children: ReactNode;
} & ComponentPropsWithoutRef<T>;
const Button = <T extends ElementType = "button">({
    renderAs,
    className,
    children,
    ...rest
}: ButtonProps<T>): JSX.Element => {
    return (
        <div as={renderAs} className={className} {...rest}>
            <span className="buttonText"> {children}</span>
        </div>
    );
};

export default Button;
