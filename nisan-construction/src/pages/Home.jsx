import { useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaRobot, FaBuilding  } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [openContact, setOpenContact] = useState(null);

      const projectsData = [
  {
    id: 1,
    title: "Luxury Residential Development",
    location: "East Legon Hills",
    category: "residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    description:
      "A modern 5-bedroom luxury residential project featuring smart-home integration, swimming pool and premium interior finishing.",
    url: "https://example.com/project1",
  },
  {
    id: 2,
    title: "Modern Townhouse Construction",
    location: "North Legon",
    category: "residential",
    image: "./images/home.jpg",
    description:
      "Contemporary townhouse development built with high-quality materials and modern architectural design.",
    url: "https://example.com/project2",
  },
  {
    id: 3,
    title: "Commercial Office Complex",
    location: "Airport Area",
    category: "commercial",
    image: "./images/office.jpg",
    description:
      "A multi-floor commercial office complex designed for corporate organizations and business operations.",
    url: "https://example.com/project3",
  },
  {
    id: 4,
    title: "Shopping Mall Construction",
    location: "Spintex",
    category: "commercial",
    image: "./images/mall.jpeg",
    description:
      "Large scale retail development with multiple shops, parking space and modern infrastructure.",
    url: "https://example.com/project4",
  },
  {
    id: 5,
    title: "Highway Road Construction",
    location: "Accra - Kasoa Highway",
    category: "infrastructure",
    image: "./images/road.jpg",
    description:
      "Major road construction project improving transportation and connectivity across key areas.",
    url: "https://example.com/project5",
  },
  {
    id: 6,
    title: "Bridge Engineering Project",
    location: "Tema",
    category: "infrastructure",
    image: "./images/bridge.jpg",
    description:
      "Structural bridge engineering project designed to improve traffic flow and regional connectivity.",
    url: "https://example.com/project6",
  },
  {
    id: 7,
    title: "Urban Skyscraper Project",
    location: "Accra Central Business District",
    category: "commercial",
    image: "./images/sky.jpg",
    description:
      "High-rise commercial skyscraper with modern facilities for offices and retail spaces.",
    url: "https://example.com/project7",
  },
  {
    id: 8,
    title: "Luxury Waterfront Villas",
    location: "Labadi Beach",
    category: "residential",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80",
    description:
      "Exclusive luxury villas offering stunning ocean views and premium amenities.",
    url: "https://example.com/project8",
  },
  {
    id: 9,
    title: "Industrial Warehouse Development",
    location: "Tema Industrial Area",
    category: "infrastructure",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
    description:
      "Large-scale industrial warehouse designed for storage, logistics, and manufacturing operations.",
    url: "https://example.com/project9",
  },
];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const renderSection = (title, category) => {
    const filtered = projectsData.filter((p) => p.category === category);

    return (
      <section className="max-w-8xl bg-black shadow-yellow-800 w mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-yellow-900 mb-12 border-l-4 border-yellow-700 pl-4"
        >
          {title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {filtered.map((project) => (
  <motion.div
  key={project.id}
  variants={cardVariants}
  initial="hidden"
  whileInView="visible"
  className="relative group"
>

  {/* Edge Glow */}
  <div className="absolute inset-0 rounded-xl bg-yellow-700 blur-xl opacity-15 scale-102 group-hover:opacity-30 transition duration-500"></div>

  {/* Card */}
  <div className="relative bg-black rounded-xl overflow-hidden shadow-md">
    
    <img
      src={project.image}
      alt={project.title}
      className="h-60 w-full object-cover"
    />

    <div className="p-6">
      <h3 className="text-lg font-semibold text-yellow-900">
        {project.title}
      </h3>

      <p className="text-yellow-800 mt-2 text-sm">
        {project.location}
      </p>

      <button
        onClick={() => setSelectedProject(project)}
        className="mt-6 w-full bg-white text-black py-2.5 rounded-lg font-medium hover:bg-yellow-800 transition"
      >
        View Project Details
      </button>
    </div>

  </div>

</motion.div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="bg-slate-50 text-yellow-900">

      {/* HERO VIDEO */}
      <section className="relative w-full h-[100vh] overflow-hidden">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/videos/Construction.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60"></div>
        {/* NS & NC Buttons on bottom-left */}
<div className="absolute left-6 bottom-11 flex flex-col gap-3 md:gap-4 z-20">

  {/* NR */}
  <div className="relative group w-fit">
    <motion.a
      whileHover={{ scale: 1.1 }}
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 3 }}
      href="https://nisan-r.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 md:gap-2 
      text-sm md:text-base 
      text-white hover:text-yellow-700 transition font-medium"
    >
      <FaBuilding className="text-lg md:text-xl" /> Nisan Realty
    </motion.a>

    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-56 bg-black shadow-lg rounded-lg p-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 z-50">
      <p className="font-semibold text-yellow-800 flex items-center gap-2">
        <FaBuilding /> Nisan Realty
      </p>

      <p className="text-gray-500 text-sm mt-1">
Your trusted real estate partner delivering quality homes
            and investment opportunities across Ghana.
      </p>
    </div>
  </div>

  {/* NS */}
  <div className="relative group w-fit">
    <motion.a
      whileHover={{ scale: 1.1 }}
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
      href="https://nisa-ns.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 md:gap-2 
      text-sm md:text-base 
      text-white hover:text-yellow-700 transition font-medium"
    >
      <FaRobot className="text-lg md:text-xl" /> Nisan Solutions
    </motion.a>

    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-56 bg-black shadow-lg rounded-lg p-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 z-50">
      <p className="font-semibold text-yellow-800 flex items-center gap-2">
        <FaRobot /> Nisan Solutions
      </p>

      <p className="text-gray-500 text-sm mt-1">
        Business solutions and consultancy services tailored for your success.
      </p>
    </div>
  </div>

</div>

        {/* Hero Text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-yellow-700">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Nisan Constructions
          </motion.h1>

          <p className="mt-6 max-w-2xl text-lg text-white">
            Building world-class infrastructure through innovation, precision
            engineering and uncompromising quality craftsmanship.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-8 bg-black px-8 py-3 text-yellow-700 rounded-lg font-medium hover:bg-white transition"
          >
            View Our Projects
          </button>
        </div>

        {/* Floating Contacts */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
          {[
            { type: "phone", icon: <FaPhoneAlt />, color: "bg-black", text: "+233 123 456 789" },
            { type: "whatsapp", icon: <FaWhatsapp />, color: "bg-black", text: "+233 123 456 789" },
            { type: "email", icon: <FaEnvelope />, color: "bg-black", text: "info@nisanconstructions.com" },
          ].map((item) => (
            <div key={item.type} className="relative flex items-center">

              {openContact === item.type && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="absolute right-14 bg-yellow-700 text-slate-900 px-4 py-2 rounded-lg shadow-lg text-sm"
                >
                  {item.text}
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                onClick={() =>
                  setOpenContact(openContact === item.type ? null : item.type)
                }
                className={`${item.color} text-yellow-700 p-4 rounded-full shadow-lg`}
              >
                {item.icon}
              </motion.button>

            </div>
          ))}
        </div>

      </section>

      {/* SERVICES INTRO */}
      <section className="bg-white text-center py-20 px-6">
        <h2 className="text-4xl font-semibold text-black">
          Engineering Excellence | Structural Innovation | Quality Construction
        </h2>

        <p className="mt-6 text-yellow-800 max-w-3xl mx-auto leading-relaxed text-lg">
          Nisan Constructions delivers premium residential, commercial and
          infrastructure projects across Ghana. Our team combines engineering
          expertise, modern technology and industry experience to build durable
          and innovative structures.
        </p>
      </section>

      {/* PROJECT SECTIONS */}

      <div id="projects">
        {renderSection("Residential Projects", "residential")}
        {renderSection("Commercial Projects", "commercial")}
        {renderSection("Infrastructure Projects", "infrastructure")}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex shadow-yellow-700 items-center justify-center px-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white max-w-lg w-full rounded-xl overflow-hidden"
            >

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-semibold">
                  {selectedProject.title}
                </h2>

                <p className="mt-4 text-black">
                  {selectedProject.description}
                </p>

                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full text-center bg-yellow-700 text-white py-2.5 rounded-lg"
                >
                  View Full Project
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="mt-4 w-full bg-black text-white py-2.5 rounded-lg"
                >
                  Close
                </button>

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}