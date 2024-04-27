import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Favourites.css';

function ScheduleTable({ selectedTeam, teamIdMap }) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (!selectedTeam) {
      console.error('Team name is missing.');
      return;
    }

    const selectedTeamData = teamIdMap[selectedTeam];
    if (!selectedTeamData || !selectedTeamData.idForSchedule) {
      console.error('Team ID for Schedule is missing.');
      return;
    }

    const teamIdForSchedule = selectedTeamData.idForSchedule;

    const fetchData = async () => {
      try {
        // Clear previous match data
        setMatches([]);
        
        // Fetch the schedule data for the selected team from the first API
        const response1 = await axios.get(`https://cricbuzz-cricket.p.rapidapi.com/teams/v1/${teamIdForSchedule}/results`, {
          headers: {
            'X-RapidAPI-Key': '012c4f3798msh50f977528dee07ap1d4ca2jsnbcbf4c26d0ac',
            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com',
          }
        });

        // Fetch the schedule data for the selected team from the second API
        const response2 = await axios.get(`https://cricbuzz-cricket.p.rapidapi.com/teams/v1/${teamIdForSchedule}/schedule`, {
          headers: {
            'X-RapidAPI-Key': '012c4f3798msh50f977528dee07ap1d4ca2jsnbcbf4c26d0ac',
            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com',
          }
        });
        const teamMatchesData1 = response1.data.teamMatchesData;
       
        const iccWorldCupMatches1 = []; 
         teamMatchesData1.forEach(matchesData =>{
            if(matchesData.matchDetailsMap && matchesData.matchDetailsMap.key=== 'ICC Cricket World Cup 2023')
            {
                // Iterate over matches array
                matchesData.matchDetailsMap.match.forEach(matchInfo =>{
                    const {team1, team2, status } = matchInfo.matchInfo;
                    iccWorldCupMatches1.push({team1: team1.teamName, team2: team2.teamName, status});
                });
            }
         });
        // Process the data from the second API
        const teamMatchesData2 = response2.data.teamMatchesData;
        const iccWorldCupMatches2 = []; 
         teamMatchesData2.forEach(matchesData =>{
            if(matchesData.matchDetailsMap && matchesData.matchDetailsMap.key=== 'ICC Cricket World Cup 2023')
            {
                // Iterate over matches array
                matchesData.matchDetailsMap.match.forEach(matchInfo =>{
                    const {team1, team2, status } = matchInfo.matchInfo;
                    iccWorldCupMatches1.push({team1: team1.teamName, team2: team2.teamName, status});
                });
            }
         });

        // Combine and set the matches from both API responses
        setMatches([...iccWorldCupMatches1, ...iccWorldCupMatches2]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedTeam, teamIdMap]);

  return (
    <div>
      <table className="player-table">
        <thead>
          <tr>
            <th>Team 1</th>
            <th>Team 2</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, index) => (
            <tr key={index}>
              <td>{match.team1}</td>
              <td>{match.team2}</td>
              <td>{match.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScheduleTable;


