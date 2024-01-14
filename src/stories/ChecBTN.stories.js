// import React from 'react';
import  {Buttons} from  '../components/atoms/Button';


// export default {

//   title: 'Example/Button',
//   component: Buttons,

// }

// export const Template = (args) => <Buttons />;


// Button.stories.js
import React from 'react';
// import { Buttons } from './Button'; // Import the Buttons element
// import { Button } from '@storybook/react/demo'; // Import the Button component from Storybook

export default {
  title: 'Button',
  component: Buttons,
};

export const Primary = () => (
  <Buttons
    primary
    backgroundColor="blue" // You can customize the background color here
    size="md" // Set your desired size
    label="Primary Button"
  />
);

export const Secondary = () => (
  <Buttons
    backgroundColor="red" // You can customize the background color here
    size="lg" // Set your desired size
    label="Secondary Button"
  />
);
