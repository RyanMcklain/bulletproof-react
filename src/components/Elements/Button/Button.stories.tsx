import { PencilIcon } from '@heroicons/react/outline';
import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from './Button';

const meta: Meta = {
  title: 'Components/Elements/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = (props) => <Button {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
};

export const Inverse = Template.bind({});
Inverse.args = {
  children: 'Inverse Button',
  variant: 'inverse',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger Button',
  variant: 'danger',
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  children: 'Icon Button',
  endIcon: <PencilIcon className="h-4 w-4" />,
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  children: 'Icon Button',
  startIcon: <PencilIcon className="h-4 w-4" />,
};
