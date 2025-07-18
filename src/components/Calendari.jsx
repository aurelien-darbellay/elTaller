import { useTheme } from "../contexts/ThemeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Calendari.css"; // For custom styles (see below)

const Calendari = ({ calendarData }) => {
  const { primaryDeep, primaryLight } = useTheme();

  return (
    <section id="calendari" className="p-4 md:p-6">
      <h2
        className="font-header text-4xl py-6 text-center"
        style={{ color: primaryDeep }}
      >
        Calendari
      </h2>

      <Swiper
        spaceBetween={24}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        className="w-full max-w-xl mx-auto"
      >
        {Object.entries(calendarData).map(([weekday, months]) => (
          <SwiperSlide key={weekday}>
            <div className="border rounded-md p-6 shadow-md bg-white text-center">
              <h3 className="text-2xl mb-6 uppercase font-header">{weekday}</h3>
              <div className="space-y-4 text-lg font-info">
                {Object.entries(months).map(([month, days], index) => (
                  <div
                    key={month}
                    className={`flex justify-between px-4 py-3 rounded ${
                      index % 2 === 0 ? "bg-opacity-30" : ""
                    }`}
                    style={
                      index % 2 === 0
                        ? { backgroundColor: primaryLight }
                        : undefined
                    }
                  >
                    <span>{month}</span>
                    <span>{days.join(" - ")}</span>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Calendari;
