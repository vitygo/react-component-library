import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: 'primary' | 'secondary' | 'glass' | 'danger' | 'ghost' | 'outline';
  size?: 'small' | 'medium' | 'large';
  shape?: 'square' | 'sharp' | 'rounded' | 'pill'; 
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  leftIcon?: React.ReactNode;  
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    label, 
    variant = 'primary', 
    size = 'medium', 
    shape = 'rounded', 
    className, 
    isLoading, 
    leftIcon, 
    rightIcon,
    disabled, 
    children,
    type = 'button', 
    textColor,
    bgColor,
    borderColor,
    ...props 
  }, ref) => {
    
    const isIconOnly = !label && !children && (leftIcon || rightIcon);

    const classes = clsx(
      styles.base,
      styles[variant],
      styles[size],
      styles[shape], 
      {
        [styles.loading]: isLoading,
        [styles.iconOnly]: isIconOnly,
      },
      className
    );

    const customStyles = {
        backgroundColor: bgColor,
        color: textColor,
        borderColor: borderColor,
        ...props.style 
      };

    return (
      <button 
        ref={ref} 
        type={type}
        className={classes} 
        disabled={disabled || isLoading} 
        style={customStyles}
        {...props}
      >
       
        {isLoading && <span className={styles.spinner} />}
        

        {!isLoading && leftIcon && (
          <span className={styles.icon}>{leftIcon}</span>
        )}
        
      
        {(label || children) && (
          <span className={styles.label}>
            {label || children}
          </span>
        )}
        
       
        {!isLoading && rightIcon && (
          <span className={styles.icon}>{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';