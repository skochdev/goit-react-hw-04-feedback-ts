import React from 'react';
import css from './Section.module.css';

type Props = {
  title: string;
  children?: React.ReactNode;
};

export const Section: React.FC<Props> = ({ children, title }) => {
  return (
    <section className={css.Section}>
      <h2 className={css.SectionTitle}>{title}</h2>
      {children}
    </section>
  );
};
