import { motion } from "framer-motion";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* Page Header with Background Image */}
      <div className="relative h-[600px] flex items-center justify-center px-6">

        {/* Background Image */}
        <img
          src="./images/callc.jpg"
          alt="Construction Site"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        {/* Header Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="relative text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl mt-10 font-bold text-white mb-3">
            Contact Nisan Constructions
          </h1>

          {/* Yellow underline */}
          <div className="w-24 h-1 bg-yellow-800 mx-auto rounded mb-6"></div>

          <p className="text-white">
            Get in touch with our professional construction team for project inquiries, 
            consultations or partnership opportunities. We are ready to bring your vision to life.
          </p>
        </motion.div>
      </div>

      {/* Contact Content */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto py-16 px-6">

        {/* Contact Information */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.2}
          className="space-y-8"
        >
          {/* Office Address */}
          <motion.div
            variants={fadeUp}
            custom={0.3}
            className="bg-black-900 p-6 rounded-xl shadow-lg hover:shadow-yellow-800/10 transition"
          >
            <h2 className="text-xl text-yellow-800 font-semibold mb-2">
              Our Office
            </h2>
            <p>
              Nisan Constructions<br />
              Spintex, Accra<br />
              Ghana
            </p>
          </motion.div>

          {/* Google Map Embed */}
          <motion.div
            variants={fadeUp}
            custom={0.35}
            className="bg-black-900 rounded-xl shadow-lg overflow-hidden"
          >
            <iframe
              title="Nisan Constructions Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.564102914274!2d-0.15324568469617148!3d5.618998096015781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9f05c7f0e049%3A0x4d4c04b4b1c8c!2sSpintex%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1696464178362!5m2!1sen!2sus"
              width="100%"
              height="250"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            variants={fadeUp}
            custom={0.4}
            className="bg-black-900 p-6 rounded-xl shadow-lg hover:shadow-yellow-800/10 transition"
          >
            <h2 className="text-xl text-yellow-800 font-semibold mb-2">
              Contact Details
            </h2>
            <p>
              📞 +233 20 302 0239 <br />
              📞 +233 20 302 0240 <br />
              📧 info@nisanconstructions.com
            </p>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            variants={fadeUp}
            custom={0.5}
            className="bg-black p-6 rounded-xl shadow-lg hover:shadow-yellow-500/10 transition"
          >
            <h2 className="text-xl text-yellow-800 font-semibold mb-2">
              Business Hours
            </h2>
            <p>
              Monday – Friday: 8:00 AM – 6:00 PM <br />
              Saturday: 9:00 AM – 3:00 PM
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.6}
          className="bg-black rounded-xl shadow-2xl"
        >
          <h2 className="text-xl text-yellow-800 font-semibold mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black border border-yellow-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-800 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black border border-yellow-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-800 transition"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full bg-black border border-yellow-800  rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-800 transition"
            ></textarea>

            <button
              type="button"
              className="w-full bg-yellow-800 text-black py-3 rounded-lg font-semibold hover:bg-yellow-800 transition duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}