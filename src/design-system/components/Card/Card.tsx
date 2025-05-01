import React from 'react';
import { colors, spacing } from '../../theme';

interface CardProps {
  children: React.ReactNode;
  variant?: 'elevated' | 'outlined';
  padding?: 'small' | 'medium' | 'large';
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'elevated',
  padding = 'medium',
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'elevated':
        return {
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          border: 'none',
        };
      case 'outlined':
        return {
          border: `1px solid ${colors.neutral.light}`,
          boxShadow: 'none',
        };
    }
  };

  const getPaddingStyles = () => {
    switch (padding) {
      case 'small':
        return spacing.sm;
      case 'medium':
        return spacing.md;
      case 'large':
        return spacing.lg;
    }
  };

  const cardStyles = {
    ...getVariantStyles(),
    padding: getPaddingStyles(),
    borderRadius: '8px',
    backgroundColor: 'white',
  };

  return <div style={cardStyles}>{children}</div>;
}; 