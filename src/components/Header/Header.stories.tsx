import { Meta, Story } from '@storybook/react';

import { Header, HeaderProps } from './Header';

const meta: Meta = {
  title: 'Components / Header',
  component: Header,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<HeaderProps> = (props) => <Header {...props} />;

export const Default = Template.bind({});
Default.args = {
  notification: {
    id: '1',
    type: 'info',
    title: 'Hello Info',
    message: 'This is info notification',
  },
};
