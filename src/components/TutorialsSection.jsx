import React from 'react';

const tutorials = [
  {
    id: 1,
    title: 'JavaScript for Beginners',
    description: 'Complete free JavaScript series for beginners.',
    icon: '🟡', // Replace this with an icon or image
    link: '#',
  },
  {
    id: 2,
    title: 'DOM Playlist for Beginners',
    description: 'This free playlist will give you a good idea about DOM.',
    icon: '🟠', // Replace this with an icon or image
    link: '#',
  },
  {
    id: 3,
    title: 'Modern JavaScript for Beginners',
    description: 'The Complete Free Modern JavaScript Playlist for Beginners.',
    icon: '🟡', // Replace this with an icon or image
    link: '#',
  },
  {
    id: 4,
    title: 'Think in a React Way',
    description: 'Beginner Friendly Complete Free Bangla React.js Playlist.',
    icon: '🔵', // Replace this with an icon or image
    link: '#',
  },
  {
    id: 5,
    title: 'Node.js Bangla Series',
    description: 'Express Node and MongoDB Tutorial Series.',
    icon: '🟢', // Replace this with an icon or image
    link: '#',
  },
  {
    id: 6,
    title: 'Tailwind CSS Series',
    description: 'Complete Free Bangla Tailwind CSS Series.',
    icon: '🌊', // Replace this with an icon or image
    link: '#',
  },
];

function TutorialsSection() {
  return (
    <section className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-1/3 text-center md:text-left">
          <img
            src="/path/to/illustration.png" // Replace with your actual image path
            alt="Illustration"
            className="mx-auto md:mx-0 mb-6 md:mb-0"
          />
          <h2 className="text-3xl font-bold text-blue-400 mb-4">Awesome Tutorials</h2>
          <p className="text-gray-300">
            Learn with Sumit on his YouTube channel till now has more than 350 amazing tutorials
            which if followed well will make a learner's web development journey much easier.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-0">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition"
            >
              <div className="text-4xl mb-4">{tutorial.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
              <p className="text-gray-400 mb-4">{tutorial.description}</p>
              <a
                href={tutorial.link}
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                Watch the video
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TutorialsSection;
