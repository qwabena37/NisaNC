export default function ProjectsLocations() {
  const projects = [
    {
      name: "East Legon Residential Project",
      description:
        "A premium residential development featuring modern architecture, smart-home infrastructure and high-end construction finishing.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    },
    {
      name: "Shiashie Commercial Complex",
      description:
        "A multi-storey commercial building project designed for corporate offices, retail outlets and modern business operations.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
    },
    {
      name: "Franko Estate Housing Development",
      description:
        "Large-scale estate development project delivering modern family homes with strong structural engineering and durable materials.",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    },
    {
      name: "Spintex Retail & Office Hub",
      description:
        "Mixed-use development combining office spaces, retail outlets and parking infrastructure in a strategic commercial area.",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    },
    {
      name: "Tema Industrial Infrastructure",
      description:
        "Industrial construction project designed for manufacturing operations with heavy-duty structural engineering.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
    },
    {
      name: "Airport Business District Project",
      description:
        "High-rise commercial development near the international airport designed for premium corporate tenants.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white overflow-hidden">

      {/* Hero Header */}
      <div className="relative h-[500px] flex items-center justify-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
          alt="Construction Site"
          className="absolute inset-0 w-full h-full object-cover opacity-70 brightness-50"
        />

        <div className="relative text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Our Construction Projects
          </h2>

          <div className="w-24 h-1 bg-black mx-auto rounded mb-6"></div>

          <p className="max-w-xl mx-auto text-gray-200">
            Discover some of our ongoing and completed construction projects
            across residential, commercial and infrastructure sectors.
          </p>
        </div>

      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto py-20 px-6">

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-950 rounded-xl overflow-hidden shadow-xl hover:shadow-yellow-500/10 transition duration-500 group"
            >

              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">

                <h3 className="text-xl font-semibold text-white">
                  {project.name}
                </h3>

                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  {project.description}
                </p>

                <button className="mt-5 px-5 py-2 bg-white text-black rounded-lg font-semibold hover:bg-yellow-400 transition transform hover:scale-105">
                  View Project Details
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}