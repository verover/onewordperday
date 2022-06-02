import React from 'react';
import QuotesCard from '../components/OneWordPerDay/QuotesCard';

export default {
  title: 'Component/Quotes Card',
  component: QuotesCard,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <QuotesCard {...args} />

export const Restricted = Template.bind({})
Restricted.args = {}