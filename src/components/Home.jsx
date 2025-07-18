import { ClassesSection } from "./ClassesSection";
import Header from "./header/Header"; // adjust the path if needed
import Section from "./Section";
export function Home() {
  return (
    <div className="relative">
      <Header title="Celebrant el Jazz a Barcelona" color="#356269ff" />
      <ClassesSection />
    </div>
  );
}
