import { useTheme } from "../contexts/ThemeContext";

export function Footer() {
  const { primaryDeep } = useTheme();
  return (
    <footer
      className=" text-center p-4 mt-8 font-inter border-t h-40"
      style={{ backgroundColor: "white" }}
    >
      <p>
        &copy; {new Date().getFullYear()} El Taller Swing. Tots els drets
        reservats.
      </p>
    </footer>
  );
}
