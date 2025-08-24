import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { SiReact, SiJavascript, SiTailwindcss, SiNodedotjs, SiMysql, SiGit , SiHtml5 , SiCss3 ,SiLaravel } from "react-icons/si";
const skills = [
  { name: "HTML", icon: <SiHtml5/>  },
  { name: "CSS", icon: <SiCss3/> },
  { name: "JavaScript", icon: <SiJavascript/> },
  { name: "React", icon:<SiReact/> },
  { name: "Node.js", icon: <SiNodedotjs/> },
  { name: "Tailwind", icon: <SiTailwindcss/> },
  { name: "Git", icon: <SiGit/> },
  { name: "MySQL", icon: <SiMysql/> },
{ name: "Laravel", icon: <SiLaravel/> },
];

export default function Skills() {
  return (
    <section id="skills" className="relative container mx-auto py-20 px-6">
      {/* background pattern */}
      <div className=" inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10 dark:opacity-20" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Skills
      </motion.h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-12  pt-8"
      >
        {skills.map((skill, i) => (
          <SwiperSlide key={i}>
            <motion.div
              whileHover={{ scale: 1.10 }}
              className="p-10 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-md text-center border border-zinc-200 dark:border-zinc-800"
            >
              <div className="flex items-center justify-center text-4xl  mb-3">{skill.icon}</div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
