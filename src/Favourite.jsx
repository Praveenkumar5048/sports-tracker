import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import './Favourites.css';
import ScheduleTable from './ScheduleTable';

function Favourite() {
  const [favoriteTeams, setFavoriteTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(""); // State to store the selected team
  const [showSchedule, setShowSchedule] = useState(false);
  const [teamIdMap, setTeamIdMap] = useState({
    // Define the mapping of team names to their corresponding IDs
    'India': { idForPlayers: 35105, idForSchedule: 2 },
    'NewZealand': { idForPlayers: 35303, idForSchedule: 13 },
    'Australia': { idForPlayers: 35177, idForSchedule: 4 },
    'England': { idForPlayers: 35513, idForSchedule: 9 },
    'Srilanka': { idForPlayers: 36146, idForSchedule: 5 },
    'Afghanistan': { idForPlayers: 35322, idForSchedule: 96 },
    'Bangladesh': { idForPlayers: 36227, idForSchedule: 6 },
    'Pakistan': { idForPlayers: 35882, idForSchedule: 3 },
    'Netherlands': { idForPlayers: 35277, idForSchedule: 24 },
    'South Africa': { idForPlayers: 35112, idForSchedule: 11 },
 // Add mappings for all 10 teams
});

const handlePlayerButtonClick = async (teamName) => {
  // Clear previous schedule data
  setPlayers([]);
  
  // Fetch player data for the selected team
  await fetchPlayerData(teamName);
};

const handleScheduleButtonClick = async (teamName) => {
  
  // Show the schedule for the selected team
  setShowSchedule(true);
  setSelectedTeam(teamName);
};

useEffect(() => {
    // Fetch the favorite teams from cookies
    const favoriteTeamsCookie = Cookies.get('favoriteTeams');

    if (favoriteTeamsCookie) {
      // Split the cookie string into an array of team names
      const favoriteTeamsArray = favoriteTeamsCookie.split(',');
      setFavoriteTeams(favoriteTeamsArray);
    }
  }, []);

  // Function to fetch Players data based on the selected team
  const fetchPlayerData = async (teamName) => {
    // Look up the team ID based on the selected team name
    const teamData = teamIdMap[teamName];
    const teamId = teamData ? teamData.idForPlayers :null;
    
    if (teamId === null){
      console.error('Team ID not found for ${teamName}');
      return;
    }

    const options = {
      method: 'GET',
      url: `https://cricbuzz-cricket.p.rapidapi.com/series/v1/6732/squads/${teamId}`,
      headers: {
        'X-RapidAPI-Key': '012c4f3798msh50f977528dee07ap1d4ca2jsnbcbf4c26d0ac',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com',
      },
    };
    
    try {
      const response = await axios.request(options);

      // Extract player names and roles from the API response
      const apiData = response.data;
      const filteredData = apiData.player.filter((player) => player.name && player.role);
      const playerNamesAndRoles = filteredData.map((player) => ({
        name: player.name,
        role: player.role,
      }));

      setPlayers(playerNamesAndRoles);
      setSelectedTeam(teamName);
      setShowSchedule(false); // Hide the schedule when fetching player data
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="favourites-page">
      <div className="heading2">
        <h2>Your Favorite Teams</h2>
      </div>
      <ul className="teamslist">
        {favoriteTeams.map((team, index) => (
          <li className="teams" key={index}>
            {team}
            <div className="buttons">
              <button onClick={() => handlePlayerButtonClick(team)}>Players</button>
              <button onClick={() => handleScheduleButtonClick(team)}>Schedules</button>
            </div>
          </li>
        ))}
      </ul>
      {selectedTeam && (
        <div>
          <h3>{showSchedule ? `Matches Schedule for ${selectedTeam}` : `Player List for ${selectedTeam}`}</h3>
          {showSchedule ? (
            <ScheduleTable selectedTeam={selectedTeam} teamIdMap={teamIdMap} />
          ) : (
            <table className="player-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player, index) => (
                  <tr key={index}>
                    <td>{player.name}</td>
                    <td>{player.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
  
}

export default Favourite;



