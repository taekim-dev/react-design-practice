import React from 'react';
import { typography } from '../../theme';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body';
  children: React.ReactNode;
  color?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  children,
  color = 'inherit',
}) => {
  const getTypographyStyles = () => {
    return {
      ...typography[variant],
      color,
      margin: 0,
    };
  };

  const Component = variant === 'body' ? 'p' : variant;

  return <Component style={getTypographyStyles()}>{children}</Component>;
}; 