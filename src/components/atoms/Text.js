
import * as React from 'react';


export const Text = ({ label, backcolor}) => {

  return (
    <h1
    style={{backgroundColor:backcolor }}>
      {label}
    </h1>
  );
};
