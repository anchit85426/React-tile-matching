import React, { useState, useEffect } from 'react';
import App from '../App';
import {Routes, Route, useNavigate} from 'react-router-dom';


const Starting = ({toggle}) => {
    const navigate = useNavigate();

  const [showCards, setShowCards] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
      setShowCards(true); 
      toggle();

    }
  }, []);

  const handleNameInputChange = (event) => {
    setUserName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (userName.trim() !== '') {
      localStorage.setItem('userName', userName);
      setShowCards(true);
      

    }
  };

  return (
    <div
      style={{
        marginTop:'300px',
        backgroundColor: 'black',
        padding: '20px',
        borderRadius: '10px',
        width: 'fit-content',
        margin: '0 auto',
        border: '2px solid white', // Border color for the wrapping div
      }}
    > 
    
      <div style={{ textAlign: 'center' }}>
        {!showCards && (
          <form onSubmit={toggle}>
            <label style={{ fontSize: '24px', marginBottom: '20px', color: 'white' }}>
              Enter your name:
              <br />
              <input
                type="text"
                value={userName}
                onChange={handleNameInputChange}
                style={{
                    marginTop:'50px',
                  width: '300px',
                  height: '40px',
                  textAlign:'center',
                  fontSize:'40px',
                  border: '2px solid white',
                  borderRadius: '5px',
                  padding: '5px',
                  outline: 'none',
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                }}
              />
              
            </label>
            <br />
            <button
              type="submit"
              style={{
                marginTop:'50px',
                backgroundColor: 'blue',
                color: 'white',
                border: '2px solid blue',
                borderRadius: '5px',
                padding: '10px 20px',
                fontSize: '18px',
                cursor: 'pointer',
              }}
            >
              Start Playing
            </button>
          </form>
        )}
       
        
      </div>
     
    </div>
    
  );
};

export default Starting;
