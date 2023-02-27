import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

function Registration(props) {

  const navigate = useNavigate()


  function goToHome(){
    navigate('/')
  }

  return (
    <div className="App">
      <button onClick={goToHome}>
        Go To Home
      </button>
      <p>
        Registration
      </p>

    </div>
  );
}

export default Registration;