"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";

const Home = () => {
  const route = useRouter();
  const [roomCode, setRoomCode] = useState("");

  const handalFormSubmit = (e) => {
    e.preventDefault();

    route.push(`/Room/${roomCode}`);
    // <Link href={{ pathname: '/search', query: { keyword: 'source freeze' } }}></Link>
  };
  return (
    <div className="Home-page">
      <form onSubmit={handalFormSubmit}>
        <div className="InputFild">
          <label htmlFor="room" className="room">
            Create a meet-yourself
          </label>
          <input
            type="text"
            id="room"
            name="room"
            required
            placeholder="Enter Code"
            onChange={(e) => setRoomCode(e.target.value)}
          />
        </div>
        <button type="submit" className="enterBtn">
          Create
        </button>
      </form>
    </div>
  );
};

export default Home;
