import React from 'react';

const MainWrapper = ({ children, className, style }) => {
  return (
    <main className={className} style={style}>
      {children}
    </main>
  );
};

export default MainWrapper;
