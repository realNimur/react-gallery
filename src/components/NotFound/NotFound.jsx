import React from 'react';
import { useSelector } from 'react-redux';

const NotFound = function NotFound() {
  const colorTheme = useSelector((store) => store.themeColor);
  return (
    <div style={{ color: colorTheme === 'white' ? 'black' : 'white', textAlign: 'center' }}>
      <h2>Not Found</h2>
    </div>
  );
};

export default NotFound;
