import { Link } from "react-router-dom";

export default function ConstructionGallery() {
  const projects = [
    {
      image: "./images/sky.jpg",
      title: "High-Rise Office Tower",
      description: "A modern office tower with sustainable building materials and advanced engineering.",
      link: "/projects/1",
    },
    {
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      title: "Luxury Residential Development",
      description: "Premium residential complex featuring modern apartments and high-quality finishes.",
      link: "/projects/2",
    },
    {
      image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
      title: "Bridge Engineering Project",
      description: "Structural bridge construction designed for heavy traffic and long-term durability.",
      link: "/projects/3",
    },
    {
      image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
      title: "Commercial Shopping Mall",
      description: "Large-scale commercial retail project with advanced architectural design.",
      link: "/projects/4",
    },
    {
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      title: "Industrial Facility",
      description: "State-of-the-art industrial construction focused on efficiency and safety standards.",
      link: "/projects/5",
    },
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      title: "Urban Infrastructure Project",
      description: "Public infrastructure development including roads, utilities, and urban planning.",
      link: "/projects/6",
    },
    {
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      title: "Luxury Waterfront Development",
      description: "Exclusive waterfront properties designed with modern engineering and environmental sustainability.",
      link: "/projects/7",
    },
    {
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      title: "Modern Townhouse Project",
      description: "A collection of townhouses combining elegant design with durable construction.",
      link: "/projects/8",
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      title: "Airport Business Complex",
      description: "High-rise commercial development near the international airport with premium facilities.",
      link: "/projects/9",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white overflow-hidden">

      {/* Header Section */}
      <div className="relative h-[600px] flex items-center justify-center px-6 overflow-hidden">
        <img
          src="./images/project.jpg"
          alt="Construction Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70 filter brightness-50 animate-fade-in-slow"
        />

        <div className="relative text-center max-w-3xl mx-auto animate-slide-up">
          <h2 className="text-4xl font-bold text-white mb-3">
            Our Construction Projects
          </h2>
          <div className="w-24 h-1 bg-yellow-800 mx-auto rounded animate-pulse"></div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-950"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Caption */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-yellow-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mt-1">
                  {project.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <Link
                  to={project.link}
                  className="bg-yellow-700 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-800 transition"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}