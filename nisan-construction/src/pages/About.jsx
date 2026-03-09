import { motion } from "framer-motion";

export default function About() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } }
  };

  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <motion.img
          src="./images/construction.jpg"
          alt="Construction Site"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6 }}
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-yellow-500 text-center px-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Nisan Constructions
          </motion.h1>
        </div>
      </section>

      {/* History, Vision, Mission */}
      <section className="py-16 px-3 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:items-stretch">

        {/* Image */}
        <motion.div
          className="h-full md:-ml-6"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="h-full border-4 border-yellow-500 rounded-xl overflow-hidden shadow-lg">
            <img
              src="./images/construct.jpg"
              alt="Construction Project"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex flex-col justify-between h-full space-y-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-bold text-yellow-500">
              Our History
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Nisan Constructions has been delivering world-class construction 
              projects across residential, commercial, and infrastructure sectors. 
              Our commitment to engineering excellence, innovation, and client satisfaction 
              has positioned us as a trusted partner for complex building projects.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-bold text-yellow-500">
              Our Vision
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be recognized as Ghana’s leading construction company, renowned for 
              sustainable design, innovative engineering solutions, and high-quality 
              project delivery.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-bold text-yellow-500">
              Our Mission
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To build safe, durable, and aesthetically outstanding structures while 
              maintaining the highest standards of professionalism, safety, and client service.
            </p>
          </motion.div>

        </motion.div>

      </section>

      {/* Meet Our Team */}
      <section className="py-16 px-6 bg-black">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >

          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-yellow-500 mb-12"
          >
            Meet Our Team
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

            {[
              {
                name: "Soraya James",
                role: "Chief Executive Officer",
                img: "./team/T1.PNG"
              },
              {
                name: "Akosua Owusu",
                role: "Project Manager",
                img: ""
              },
              {
                name: "David Asare",
                role: "Construction Engineer",
                img: ""
              }
            ].map((member, index) => (

              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 rounded-xl p-6 shadow-lg"
              >

                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-yellow-500"
                />

                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-yellow-500 text-sm">{member.role}</p>

              </motion.div>

            ))}

          </div>

        </motion.div>
      </section>

    </div>
  );
}