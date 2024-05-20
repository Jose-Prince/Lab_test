import React from 'react';
import StandardButton from '../Components/StandardButton'

export default {
  title: 'Example/Button',
  component: StandardButton,
};

const Template = (args) => <StandardButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '4',
};
