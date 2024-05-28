"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";

const RoomPage = () => {
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
            Enter Room Code
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
          Enter Room
        </button>
      </form>
    </div>
  );
};

export default RoomPage;
