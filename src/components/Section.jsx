const Section = ({ color, children }) => {
  return (
    <div
      className="transition-shadow duration-300 min-h-100 hover:shadow-md rounded-2xl p-4"
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
};

export default Section;
