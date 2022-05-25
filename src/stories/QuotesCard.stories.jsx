import React from 'react';
import QuotesCard from '../components/OneWordPerDay/QuotesCard';
import Dashboard from '../views/Dashboard';

export default {
  title: 'Component/Quotes Card',
  component: QuotesCard,
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