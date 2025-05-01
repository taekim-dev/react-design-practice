import React from 'react';
import { colors } from '../../theme';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'neutral';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  disabled = false,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: colors.primary.main,
          color: 'white',
          '&:hover': {
            backgroundColor: colors.primary.dark,
          },
        };
      case 'secondary':
        return {
          backgroundColor: colors.secondary.main,
          color: 'white',
          '&:hover': {
            backgroundColor: colors.secondary.dark,
          },
        };
      case 'neutral':
        return {
          backgroundColor: colors.neutral.main,
          color: 'white',
          '&:hover': {
            backgroundColor: colors.neutral.dark,
          },
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          padding: '0.5rem 1rem',
          fontSize: '0.875rem',
        };
      case 'medium':
        return {
          padding: '0.75rem 1.5rem',
          fontSize: '1.2rem',
        };
      case 'large':
        return {
          padding: '1rem 2rem',
          fontSize: '1.5rem',
        };
    }
  };

  const buttonStyles = {
    ...getVariantStyles(),
    ...getSizeStyles(),
    border: 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'background-color 0.3s ease',
  };

  return (
    <button
      style={buttonStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}; 