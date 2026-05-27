import React from 'react';
import classNames from 'classnames';

const Section = ({ children, id, className, bg = 'default', ...props }) => {
  const bgClasses = {
    default: 'bg-white dark:bg-slate-950',
    muted: 'bg-gray-50 dark:bg-slate-900',
    primary: 'bg-primary text-white',
    dark: 'bg-slate-900 text-white',
  };

  return (
    <section
      id={id}
      className={classNames('py-20 md:py-28', bgClasses[bg], className)}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
