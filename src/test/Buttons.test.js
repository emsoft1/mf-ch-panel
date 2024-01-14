// Buttons.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Buttons } from '../components/atoms/Button'; // Import the Buttons element

test('renders Buttons component with label', () => {
  render(
    <Buttons
      primary
      backgroundColor="blue"
      size="md"
      label="Primary Button"
    />
  );

  // Assert that the component renders with the label
  const buttonElement = screen.getByText('Primary Button');
  expect(buttonElement).toBeInTheDocument();

  // Add more assertions as needed for other properties and behaviors
});
