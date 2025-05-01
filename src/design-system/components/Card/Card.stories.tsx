import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Typography } from '../Typography/Typography';

const meta: Meta<typeof Card> = {
  title: 'Design System/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined'],
    },
    padding: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <Typography variant="h2">Card Title</Typography>
        <Typography>
          This is an elevated card with some sample content. It has a subtle shadow
          effect.
        </Typography>
      </>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <>
        <Typography variant="h2">Card Title</Typography>
        <Typography>
          This is an outlined card with some sample content. It has a border
          instead of a shadow.
        </Typography>
      </>
    ),
  },
}; 