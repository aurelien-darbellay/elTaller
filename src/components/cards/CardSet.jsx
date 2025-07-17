const CardSet = ({ xOffSetCell, xOffSetDesk, children }) => {
  return (
    <div
      className={`relative flex flex-col items-center sm:flex-row  mt-${xOffSetCell} md:mt-${xOffSetDesk} font-inter justify-center gap-3 md:gap-10 mx-5`}
    >
      {children}
    </div>
  );
};

export default CardSet;
