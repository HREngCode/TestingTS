export const SectionLayout = ({ backgroundColor, children }) => {
  return (
    <section
      className="app-section"
      style={{ backgroundColor: backgroundColor }}
    >
      <ol>{children}</ol>
    </section>
  );
};
