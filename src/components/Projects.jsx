import React, { useState } from 'react';

const Projects = ({ projects }) => {
  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    console.log('Selected Tag:', tag); // デバッグ用
  };

  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

  return (
    <section id="projects" className="py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">My Projects</h2>
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          <button
            onClick={() => handleTagClick(null)}
            className={`font-bold py-2 px-4 rounded-full ${!selectedTag ? 'bg-pink-500 text-white' : 'bg-white text-gray-600'}`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`font-bold py-2 px-4 rounded-full ${selectedTag === tag ? 'bg-pink-500 text-white' : 'bg-white text-gray-600'}`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg shadow-pink-100 overflow-hidden transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-200 transition-all duration-500"
            >
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6 min-h-[150px]">
                <h3 className="text-2xl font-bold mb-3 text-pink-600">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      onClick={() => handleTagClick(tag)} // ここにonClickを追加
                      className="bg-yellow-300 text-gray-800 text-sm font-bold px-3 py-1 rounded-full cursor-pointer"
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
