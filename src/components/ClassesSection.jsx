import SectionSchedule from "./SectionSchedule";

export function ClassesSection() {
  const salas = {
    desbande: {
      name: "Desbande",
      url: "https://maps.app.goo.gl/zaS3XAT9nfSi4GJw8",
    },
    studio: {
      name: "El Taller Studio",
      url: "https://maps.app.goo.gl/tUgHMDrGUQyjiLJk9",
    },
  };

  const scheduleData = [
    {
      day: "Dilluns",
      order: 1,
      classes: [
        {
          starttime: "19:00",
          endtime: "20:00",
          dance: "Solo Jazz",
          level: "Intermedi",
          sala: salas.studio,
        },
        {
          starttime: "20:00",
          endtime: "21:00",
          dance: "Lindy Hop",
          level: "Intermedi/Avançat",
          sala: salas.studio,
        },
        {
          starttime: "20:00",
          endtime: "21:00",
          dance: "Lindy Hop",
          level: "Avançat",
          sala: salas.desbande,
        },
        {
          starttime: "21:00",
          endtime: "22:00",
          dance: "Lindy Hop",
          level: "Team",
          sala: salas.desbande,
        },
      ],
    },
    {
      day: "Dimarts",
      order: 2,
      classes: [
        {
          starttime: "19:00",
          endtime: "20:00",
          dance: "Tap Sense Taps",
          level: "Intermedi",
          sala: salas.studio,
        },
        {
          starttime: "20:00",
          endtime: "21:00",
          dance: "Lindy Hop",
          level: "Principiant/Intermedi",
          sala: salas.studio,
        },
      ],
    },
    {
      day: "Dimecres",
      order: 3,
      classes: [
        {
          starttime: "20:00",
          endtime: "21:00",
          dance: "Lindy Hop",
          level: "Intermedi",
          sala: salas.studio,
        },
        {
          starttime: "21:00",
          endtime: "22:00",
          dance: "Lindy Hop",
          level: "Iniciació",
          sala: salas.studio,
        },
      ],
    },
    {
      day: "Dijous",
      order: 4,
      classes: [
        {
          starttime: "19:00",
          endtime: "20:00",
          dance: "Solo Jazz",
          level: "Principiant",
          sala: salas.desbande,
        },
        {
          starttime: "19:00",
          endtime: "20:00",
          dance: "Lindy Hop",
          level: "Principiant+",
          sala: salas.desbande,
        },
        {
          starttime: "20:00",
          endtime: "21:00",
          dance: "Rutines Clàssiques",
          level: "Intermedi",
          sala: salas.desbande,
        },
        {
          starttime: "20:00",
          endtime: "21:00",
          dance: "Lindy Hop",
          level: "Intermedi",
          sala: salas.studio,
        },
        {
          starttime: "21:00",
          endtime: "22:00",
          dance: "Solo Jazz",
          level: "Avançat",
          sala: salas.desbande,
        },
      ],
    },
    {
      day: "Divendres",
      order: 5,
      classes: [
        {
          starttime: "20:30",
          endtime: "21:30",
          dance: "Lindy Hop",
          level: "Principiant+",
          sala: salas.studio,
        },
      ],
    },
  ];

  return (
    <section className="">
      <div className="h-30"></div>
      <SectionSchedule scheduleData={scheduleData} />
    </section>
  );
}
