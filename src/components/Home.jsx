import Header from "./header/Header"; // adjust the path if needed
import Section from "./Section";
export function Home() {
  const pictures = [
    "pictures/indoor/Desbande1.jpg",
    "pictures/indoor/CanTravi1.jpg",
    "pictures/indoor/EstelaIñaki_Olivo.jpg",
  ];

  return (
    <div className="relative">
      <Header
        title="Celebrant el Jazz a Barcelona"
        images={pictures}
        color="#356269ff"
      />
      <Section></Section>
    </div>
  );
}
