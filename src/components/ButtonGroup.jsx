const ButtonGroup = ({ children }) => {
  return (
    <div className="fixed bottom-11 right-5 md:right-10 z-[9998] flex items-center justify-center gap-3">
      {children}
    </div>
  );
};

export default ButtonGroup;
