import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import logo from '../../Resources/cricketlogo.jpg';
import './Cricket.css';
import TeamsList from '../../data/TeamsList.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Cricket() {
  const [favouriteTeams, setFavouriteTeams] = useState([]);
  const [showTeams, setShowTeams] = useState(true);
  const [activeButton, setActiveButton] = useState('Teams');
  const [fetchPointsTableData, setFetchPointsTableData] = useState(false);
  const [pointsTableData, setPointsTableData] = useState(null);

  // Check if the team name is already in the favorites list
  function handleChange(teamName) {
    if (favouriteTeams.includes(teamName)) {
      // Team is already a favorite, remove it
      const updatedTeams = favouriteTeams.filter((name) => name !== teamName);
      setFavouriteTeams(updatedTeams);
      Cookies.set('favoriteTeams', updatedTeams.join(','));
      // Show a confirmation message  
      showConfirmationMessage(`Removed ${teamName} from favorites`);
    } else {   
      // Team is not a favorite, add it
      const updatedTeams = [...favouriteTeams, teamName];
      setFavouriteTeams(updatedTeams);
      Cookies.set('favoriteTeams', updatedTeams.join(','));
      // Show a confirmation message
      showConfirmationMessage(`Added ${teamName} to favorites`);
    }
  }

  // State for displaying confirmation messages
  const [confirmationMessage, setConfirmationMessage] = useState('');

  // Function to show a confirmation message
  function showConfirmationMessage(message) {
    setConfirmationMessage(message);

    // Clear the confirmation message after a few seconds
    setTimeout(() => {
      setConfirmationMessage('');
    }, 2000);
  }

  // Fetch Points Table data function
  async function fetchPointsTable() {
    if (fetchPointsTableData) {
      const options = {
        method: 'GET',
        url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/series/6732/points-table',
        headers: {
          'X-RapidAPI-Key': '012c4f3798msh50f977528dee07ap1d4ca2jsnbcbf4c26d0ac',
          'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com',
        }
      };
        try {
          const response = await axios.request(options);
          setPointsTableData(response.data);
        } catch (error) {
          console.error(error);
          
        }
      }
    }
  
    
  useEffect(() => {
    const cookieValue = Cookies.get('favoriteTeams');
    if (cookieValue) {
      const parsedTeams = cookieValue.split(',');
      setFavouriteTeams(parsedTeams);
    }
  }, []);

  useEffect(() => {
    // Fetch Points Table data on component mount
    setFetchPointsTableData(true);
  }, []);

  function handleButtonClick(buttonName) {
    if (buttonName === 'Teams') {
      setShowTeams(true);
    } else {
      setShowTeams(false);
      setFetchPointsTableData(true); // Set the flag to true when the "Points Table" button is clicked
      fetchPointsTable(); // Make the API request         
    }
    setActiveButton(buttonName); // Set the active button
  }

  return (
    <div className="cricket">
      <img src={logo} alt="" />
      <div className="cricket-menu">
        <button
          onClick={() => handleButtonClick('Teams')}
          className={activeButton === 'Teams' ? 'active-button' : ''}
        >
          Teams
        </button>
        <button
          onClick={() => handleButtonClick('Points Table')}
          className={activeButton === 'Points Table' ? 'active-button' : ''}
        >
          Points Table
        </button>
      </div>
      {/* Confirmation message */}
      {confirmationMessage && (
        <div className="confirmation-message">{confirmationMessage}</div>
      )}
      {showTeams ? (
        <div className="TeamsList">
          {TeamsList.map((team) => (
            <div className="list-item">
              <span>{team.id}</span>
              <img src={team.img} alt={team.name} />
              <span>{team.name}</span>
              <button onClick={() => handleChange(team.name)}>
                <FontAwesomeIcon
                  icon={faHeart}
                  size="lg"
                  style={{
                    color: favouriteTeams.includes(team.name) ? '#FF5733' : '#f0f2f4',
                  }}
                />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2>ICC Cricket World Cup 2023 </h2>
          <table className="points-table2">
              <thead>
              <tr>
               <th>Team</th>
               <th>Matches Played</th>
               <th>Matches Won</th>
               <th>Points</th>
              <th>NRR</th>
              </tr>
             </thead>
           <tbody>
          {pointsTableData && 

              pointsTableData.pointsTable[0].pointsTableInfo.map((teamInfo, index) => (
                <tr key={index}>
                <td>{teamInfo.teamFullName}</td>
                <td>{teamInfo.matchesPlayed}</td>
                <td>{teamInfo.matchesWon}</td>
                <td>{teamInfo.points}</td>
                <td>{teamInfo.nrr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Cricket;
  
  
  
  
  
  
  



