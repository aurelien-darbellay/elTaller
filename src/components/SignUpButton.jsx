import { useTheme } from "../contexts/ThemeContext";

const SignupButton = () => {
  const { initiation } = useTheme();
  return (
    <div className="z-[9999] ">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfzhuqyNITIBPof_PKsquB3rXCVcLyYj0WGYk1YAOTzq0U8rQ/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-3 rounded-md text-sm md:text-base font-semibold uppercase hover:shadow-custom active:shadow-none"
        style={{ backgroundColor: initiation }}
      >
        M'inscric
      </a>
    </div>
  );
};

export default SignupButton;
