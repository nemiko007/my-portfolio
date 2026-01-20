import React from 'react';

const Hero = ({ profile }) => {
  return (
    <section id="hero" className="bg-white py-24 text-center">
      <div className="container mx-auto px-4">
        <img
          src={profile.profileImage}
          alt={profile.name + "'s Profile Picture"}
          className="rounded-full w-40 h-40 mx-auto mb-6 border-8 border-pink-300 shadow-2xl shadow-pink-200"
        />
        <h2 className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          Hi, I'm {profile.name}
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-gray-500">
          {profile.tagline}
        </p>
        <a
          href="#projects"
          className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold py-4 px-10 rounded-full text-xl hover:scale-110 hover:shadow-lg hover:shadow-pink-300 transition-all duration-300 transform"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
