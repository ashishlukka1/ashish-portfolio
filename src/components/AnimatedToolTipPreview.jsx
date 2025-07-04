import { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

const AnimatedTooltip = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="flex flex-row items-center justify-center">
      {items.map((item, idx) => (
        <div
          className="relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{ marginLeft: idx > 0 ? "-12px" : "0" }}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                <div className="relative z-30 text-base font-bold text-white">
                  {item.name}
                </div>
                <div className="text-xs text-white">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={item.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
          >
            <img
              height={56}
              width={56}
              src={item.image}
              alt={item.name}
              className="relative h-14 w-14 rounded-full object-cover object-center transition duration-300 group-hover:z-30 group-hover:scale-110"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.177)",
              }}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

const people = [
  {
    id: 1,
    name: "Srikar Janjirala",
    designation: "Full Stack Developer",
    image: "https://i.postimg.cc/Y2m3jcPV/unnamed-1.png",
    linkedin: "https://www.linkedin.com/in/srikar-janjirala/",
  },
  {
    id: 2,
    name: "Afzal Elahi",
    designation: "Backend Developer",
    image: "https://i.postimg.cc/PJ2rTV1M/unnamed.png",
    linkedin: "https://www.linkedin.com/in/shaik-afzal-elahi/",
  },
  {
    id: 3,
    name: "Rahul Aligeti",
    designation: "Full Stack Developer",
    image: "https://i.postimg.cc/QCbksD6n/r.png",
    linkedin: "https://www.linkedin.com/in/rahul-aligeti-1ab6ab308/",
  },
  {
    id: 4,
    name: "Swaroop Mallidi",
    designation: "Frontend Developer",
    image:
      "https://i.postimg.cc/7b8XPXDf/avatars-000526854771-hv7xym-t500x500.jpg",
    linkedin: "https://www.linkedin.com/in/swaroop-mallidi/",
  },
  {
    id: 5,
    name: "Abhinav Cherku",
    designation: "Frontend Developer",
    image: "https://i.postimg.cc/PJ2rTV1M/unnamed.png",
    linkedin: "https://www.linkedin.com/in/abhinav-cheruku-46a224304/",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
