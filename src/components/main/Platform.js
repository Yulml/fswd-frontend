import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PlatformPage = () => {
  const [platformGames, setPlatformGames] = useState([]);
  const { id } = useParams();
  console.log(platformGames);

  const fetchPlatformGames = async () => {
    const response = await fetch(
      `http://localhost/fswd-backend/public/index.php/api/platform/${id}/game` 
    );
    const data = await response.json();

    setPlatformGames(data);
  };

  useEffect(() => {
    fetchPlatformGames();
  }, [id]);

  return (
    <div>
      <div>
        <h2>This is the {platformGames.name} page</h2>
      </div>
      
      
      {" "}
      {platformGames.length > 0 && (
        <ul>
          {platformGames.map((platformGames) => (
            <li key={platformGames.name}>
              {platformGames.name}
              {platformGames.picture}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlatformPage;
















