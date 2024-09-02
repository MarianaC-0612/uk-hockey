import React from 'react';

export default function WallOfFamePage() {
  const achievements = [
    {
      name: "World's Biggest Hockey Stick",
      description:
        "Located in Duncan, British Columbia, Canada, this is the largest hockey stick in the world, measuring 62.48 meters.",
      imageUrl: "/hockey-stick.jpg",
      link: "/achievements/biggest-hockey-stick",
    },
    {
      name: "Oldest England Player",
      description:
        "John Doe became the oldest player to represent England in international hockey, playing his last game at the age of 45.",
      imageUrl: "/john-doe.jpg",
      link: "/achievements/oldest-england-player",
    },
    {
      name: "Youngest England Player",
      description:
        "Jane Smith made history by becoming the youngest player to represent England in hockey at the age of 16.",
      imageUrl: "/jane-smith.jpg",
      link: "/achievements/youngest-england-player",
    },
    {
      name: "Most Medals Won",
      description:
        "Mike Johnson holds the record for the most medals won in international hockey competitions.",
      imageUrl: "/mike-johnson.jpg",
      link: "/achievements/most-medals-won",
    },
    {
      name: "Longest Goal Scored",
      description:
        "The longest goal ever scored in hockey was a 45-meter strike by Sarah Brown.",
      imageUrl: "/sarah-brown.jpg",
      link: "/achievements/longest-goal",
    },
    {
      name: "Most Goals in a Season",
      description:
        "Alex White set the record for the most goals in a single season with an astonishing 50 goals.",
      imageUrl: "/alex-white.jpg",
      link: "/achievements/most-goals-season",
    },
    {
      name: "First Olympic Gold",
      description:
        "The England men's hockey team won their first Olympic gold medal in 1988.",
      imageUrl: "/olympic-gold.jpg",
      link: "/achievements/first-olympic-gold",
    },
    {
      name: "Most Caps for England",
      description:
        "Lucy Green has the most caps for England, with over 300 appearances.",
      imageUrl: "/lucy-green.jpg",
      link: "/achievements/most-caps-england",
    },
    {
      name: "Oldest Hockey Club",
      description:
        "The world's oldest hockey club, Blackheath Hockey Club, was founded in 1861.",
      imageUrl: "/oldest-club.jpg",
      link: "/achievements/oldest-hockey-club",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-400">
        Hockey Wall of Fame
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="relative group border border-gray-300 p-4 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-500"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-4 transition duration-500 group-hover:opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 transition duration-500 opacity-0 group-hover:opacity-100 p-6">
              <div className="text-center text-white">
                <h2 className="text-xl font-bold mb-4">{item.name}</h2>
                <p className="text-sm mb-6">{item.description}</p>
                <a
                  href={item.link}
                  className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
