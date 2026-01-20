import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'A cutting-edge web application built with React and Node.js. It features real-time data synchronization and a beautiful UI.',
    image: 'https://via.placeholder.com/400x250?text=Project+Alpha',
    link: '#',
    tags: ['React', 'Node.js', 'MongoDB', 'Realtime'],
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'An interactive data visualization tool developed using D3.js and Astro. Demonstrates complex data handling and rendering.',
    image: 'https://via.placeholder.com/400x250?text=Project+Beta',
    link: '#',
    tags: ['Astro', 'D3.js', 'DataViz', 'Performance'],
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'A mobile-first e-commerce platform with a focus on user experience and seamless checkout process. Implemented with Next.js and Tailwind CSS.',
    image: 'https://via.placeholder.com/400x250?text=Project+Gamma',
    link: '#',
    tags: ['Next.js', 'Tailwind CSS', 'E-commerce', 'Mobile-first'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg shadow-pink-100 overflow-hidden transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-200 transition-all duration-500"
            >
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-pink-600">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-yellow-300 text-gray-800 text-sm font-bold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block bg-pink-500 text-white font-bold py-2 px-6 rounded-full hover:bg-pink-600 hover:scale-105 transition-all duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
