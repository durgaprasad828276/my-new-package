import React, { ReactNode } from 'react';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary';
}

export const Button = ({ children, variant, ...props }: Props) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: variant === 'primary' ? 'blue' : 'green',
        outline: 'none',
        color: 'white',
        border: 'none',
        padding: '4px 8px',
      }}
    >
      {children}
    </button>
  );
};
