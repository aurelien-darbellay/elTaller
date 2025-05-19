import CardSet from "./cards/CardSet";
import Header from "./header/Header"; // adjust the path if needed

export function Home() {
  const pictures = [
    "pictures/indoor/claseDesbande.jpg",
    "pictures/indoor/tadasPamela.jpg",
    "pictures/indoor/desbandeSoloMask.jpg",
  ];
  return (
    <>
      <Header
        title="Celebrant el Jazz a Barcelona"
        images={pictures}
        color="#30646c"
      />
      <CardSet xOffSetDesk="30" xOffSetCell="3" pictures={pictures} />
    </>
  );
}
