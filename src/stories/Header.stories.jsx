import React from 'react';
import Header from '../components/Common/Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Header {...args} />;

export const Transparent = Template.bind({});
Transparent.args = {
  transparent: true
};