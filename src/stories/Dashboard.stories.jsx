import React from 'react';
import Dashboard from '../views/Dashboard';

export default {
  title: 'Pages/Dashboard',
  component: Dashboard,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Dashboard {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  glassmorphism: false,
  label: "Thank you!",
};