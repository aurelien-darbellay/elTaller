import { useTheme } from "../../contexts/ThemeContext";
import Card from "./Card";

const CardSet = ({ xOffSetCell, xOffSetDesk, pictures }) => {
  const { primaryBright, primaryMedium, primaryLight } = useTheme();
  return (
    <div
      className={`relative flex flex-col items-center sm:flex-row  mt-${xOffSetCell} md:-mt-${xOffSetDesk} font-inter justify-center gap-5 mx-5`}
    >
      <Card title="classes" color={primaryBright} image={pictures[0]} />
      <Card title="soc principiant" color={primaryMedium} image={pictures[1]} />
      <Card title="trobades" color={primaryLight} image={pictures[2]} />
    </div>
  );
};

export default CardSet;
