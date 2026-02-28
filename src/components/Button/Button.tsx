import styles from './Button.module.css';
import { clsx } from 'clsx'; // Utility to combine classes

interface ButtonProps {
  label: string;
  primary?: boolean;
  glass?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const Button = ({ 
  label, 
  primary = false, 
  glass = false, 
  size = 'medium', 
  ...props 
}: ButtonProps) => {

  const classes = clsx(
    styles.base,
    styles[size],
    {
      [styles.primary]: primary && !glass,   
      [styles.secondary]: !primary && !glass, 
      [styles.glass]: glass,        
    }
  );

  return (
    <button className={classes} {...props}>
      {label}
    </button>
  );
};