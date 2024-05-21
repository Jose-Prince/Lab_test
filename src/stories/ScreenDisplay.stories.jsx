import React from 'react';
import ScreenDisplay from '../Components/ScreenDisplay'

export default {
  title: 'Example/ScreenDisplay',
  component: ScreenDisplay,
};

const Template = (args) => <ScreenDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  operation: '=',
  input: '45',
  result: '45'
};