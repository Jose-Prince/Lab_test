import React from 'react';
import LargeButton from '../Components/LargeButton'

export default {
  title: 'Example/LargeButton',
  component: LargeButton,
};

const Template = (args) => <LargeButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '=',
};
