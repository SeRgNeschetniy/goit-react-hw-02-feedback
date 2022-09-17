import { SectionWrapp } from './Section.styled';

export const Section = ({ title, children }) => (
  <SectionWrapp>
    <h2>{title}</h2>
    {children}
  </SectionWrapp>
);
