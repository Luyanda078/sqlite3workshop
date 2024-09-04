import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Card = () => {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setUserData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchUserData();
  }, []);
  return (
    <div className="card">
      {error ? (
        <p>Error: {error}</p>
      ) : (
        userData.map((user, index) => (
          <div key={index}>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
          </div>
        ))
      )}
    </div>
  );
};
export default Card;