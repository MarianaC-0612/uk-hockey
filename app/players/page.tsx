"use client";
import React, { FormEvent } from 'react';
export default function HockeyPlayers() {
  const players = [
    {
      number: 1,
      firstName: "John",
      lastName: "Doe",
      club: "Ice Warriors",
      achievement: "MVP 2023",
      imageUrl: "/placeholder.svg",
    },
    {
      number: 2,
      firstName: "Jane",
      lastName: "Smith",
      club: "Frost Giants",
      achievement: "Top Scorer 2023",
      imageUrl: "/placeholder.svg",
    },
    {
      number: 3,
      firstName: "Mike",
      lastName: "Johnson",
      club: "Blizzard Beasts",
      achievement: "Best Rookie 2023",
      imageUrl: "/placeholder.svg",
    },
    // New Players
    {
      number: 4,
      firstName: "Emily",
      lastName: "Davis",
      club: "Storm Hawks",
      achievement: "Best Defense 2023",
      imageUrl: "/placeholder.svg",
    },
    {
      number: 5,
      firstName: "Chris",
      lastName: "Brown",
      club: "Thunder Dragons",
      achievement: "Most Assists 2023",
      imageUrl: "/placeholder.svg",
    },
    {
      number: 6,
      firstName: "Pat",
      lastName: "Taylor",
      club: "Snow Leopards",
      achievement: "Most Improved 2023",
      imageUrl: "/placeholder.svg",
    },
  ];


  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your search/filter logic here
  };  

  return (
    <div className="container mx-auto p-6">
      {/* Instruction Text */}
      <p className="mb-10">
        Please enter <i>at least</i> one of the following fields, and press search when you are ready.
      </p>

      {/* Search Filters */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Club"
            className="border border-gray-300 p-3 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Players Collage */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {players.map((player) => (
          <div key={player.number} className="border border-gray-300 p-4 rounded-lg">
            <div className="relative">
              <span className="absolute top-0 left-0 bg-gray-800 text-white text-sm px-2 py-1 rounded-tr-lg rounded-bl-lg">
                #{player.number}
              </span>
              <img
                src={player.imageUrl}
                alt={`${player.firstName} ${player.lastName}`}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {player.firstName} {player.lastName}
            </h3>
            <p className="text-gray-600 mb-2">{player.club}</p>
            <p className="text-gray-500 mb-4">{player.achievement}</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}