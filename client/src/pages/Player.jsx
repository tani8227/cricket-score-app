import React, { useState, useEffect } from 'react';
import axios from 'axios';
const BACKEND_URL=import.meta.env.VITE_BACKEND_URL

console.log(BACKEND_URL);
const Player = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const player= await axios.post(`${BACKEND_URL}/api/players/create`, formData);
      if(player)
        {
            console.log(player);
            setFormData({ name: '', role: '' });
        }
      
    } catch (error) {
      console.error('Error adding player:', error);
    }
  };

  return (
    <div className="player-panel">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Player Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="role"
          placeholder="Role (Batsman, Bowler...)"
          value={formData.role}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Player</button>
      </form>

    </div>
  );
};

export default Player;
