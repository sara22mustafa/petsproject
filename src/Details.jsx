import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import fetchPetDetails from './fetchPetDetails';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import { adopt } from './adoptedPetSlice'; // Import the adopt action
import Modal from './Modal.jsx';

const Details = () => {
  const {id} = useParams();
  const result = useQuery(['details', id], fetchPetDetails);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  if (result.isLoading) {
    return (
      <div className="loading-panel">
        <h2 className="loader">♻️</h2>
      </div>
    );
  }

  const pet = result.data.pets[0];

  return (
    <div className="details">
      <div>
        <Carousel images={pet.images} />
        <h1>{pet.name}</h1>
        <h2>
          {pet.name} - {pet.breed} - {pet.city} - {pet.state}
        </h2>
        <button
          onClick={() => {
            // dispatch(adopt(pet)); // Dispatch the adopt action
            // navigate('/');
            setShowModal(true); 
          }}
        >
          Adopt {pet.name}
        </button>
        <p>{pet.description}</p>
        {showModal?<Modal>
          <div><h1>Would you like to adopt {pet.name} </h1>
          <div className='buttons'>
          <button onClick={()=>{ dispatch(adopt(pet)); 
            navigate('/');}
                       
          }>Yes</button>
          <button onClick={()=>{setShowModal(false);}}>No</button>  
           </div></div>
        </Modal>:null} 
      </div>
    </div>
  );
};

const DetailsErrorBoundary = () => (
  <ErrorBoundary>
    <Details />
  </ErrorBoundary>
);

export default DetailsErrorBoundary;
