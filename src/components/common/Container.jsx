import React from 'react';
import classNames from 'classnames';

const Container = ({ children, className, ...props }) => {
  return (
    <div
      className={classNames('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
