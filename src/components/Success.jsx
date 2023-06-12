import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Success = () => 
{
  const navigate = useNavigate();

  return (
    
    <div
      className="flex flex-col items-center justify-center h-screen  bg-center bg-cover"
      style={{ backgroundImage: 'url("https://images.pexels.com/photos/17148156/pexels-photo-17148156/free-photo-of-sea-dawn-landscape-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")' }}
    >
      <h1 className="bg-yellow-400 hover:bg-yellow-600 text-white  py-3 px-7 rounded-md font-extrabold from-neutral-900">Your are successfuly logout!</h1>
      <p className="text-2xl  text-white">
        Thank you for Choosing us, Have a pleasant journey!
      </p>
      <p className="text-2xl mb-12 text-white">
         "If you want to relogin then click on below button"
      </p>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full"
        onClick={() => {navigate("/");
          // Handle login button click event
        }}
      >
        Go to Login
      </button>
    </div>
  );
};

export default Success;
