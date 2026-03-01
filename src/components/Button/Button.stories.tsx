import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    label: 'Button',
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'glass', 'danger', 'ghost', 'outline'],
    },
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
    shape: {
      control: 'inline-radio',
      options: ['square', 'sharp', 'rounded', 'pill'],
    },
    isLoading: { control: 'boolean' },
    onClick: { action: 'clicked' },
    
  },
};

export default meta;
type Story = StoryObj<typeof Button>;


export const Default: Story = {
  args: {
    label: 'Adjust me in controls',
    variant: 'primary',
  },
};


export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary Action',
  },
};

export const Glass: Story = {
  args: {
    variant: 'glass',
    label: 'Glass Effect',
  },
  parameters: {
    backgrounds: { default: 'dark' }, 
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Outline Button',
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      <Button {...args} variant="primary" label="Primary" />
      <Button {...args} variant="secondary" label="Secondary" />
      <Button {...args} variant="outline" label="Outline" />
      <Button {...args} variant="danger" label="Danger" />
      <Button {...args} variant="ghost" label="Ghost" />
      <Button {...args} variant="glass" label="Glass" />
    </div>
  ),
};

export const Loading: Story = {
  args: {
    label: 'Loading state',
    isLoading: true,
  },
};