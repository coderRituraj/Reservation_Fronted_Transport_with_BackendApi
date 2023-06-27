import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from "react-router-dom";
import './ticketreservationpage.css'; 
import { bookTicket } from './services/user.service';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const TicketReservationPage = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [ticketQuantity, setTicketQuantity] = useState('');
  const [className, setClassName] = useState('');
  const [date, setDate] = useState('');
  const [destination, setDestination] = useState('');
  const [origin, setOrigin] = useState('');
  const [address, setAddress] = useState('');
  const [pnr, setPnr] = useState([]);
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [seatPreferences, setSeatPreferences] = useState('');
  const [modeOfPayment, setModeOfPayment] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(location.state.fare);

  const handleFormSubmit = async (formData) => {
    // Perform form validation
    if (Object.keys(errors).length > 0) {
      setError('Please fill in all the required fields');
      setSuccess(false);
      setFormSubmitted(true);
      return;
    }

    try {
      // Process the form data
      console.log(formData);
      await axios 
    .post('http://localhost:8091/orders/bookTicket', formData)
    .then((response) => {
      // Assuming the API returns a success message or relevant data
      console.log(response);
      setPnr(response.data);
      console.log(pnr);
      console.log(response.data);
      
      // Redirect to the new page
      //window.location.href = '/ticket';
    })
    .catch((error) => {
      console.error(error);
      alert('An error occurred. Please try again.');
    });
      console.log(formData);
      setSuccess(true);
      setFormSubmitted(true);
      setError('');
    } catch (error) {
      // Handle any errors or exceptions
      console.error(error);
      setError('An error occurred. Please try again.');
      setSuccess(false);
      setFormSubmitted(true);
    }
  };

  if (formSubmitted) {
    if (success) {;
        console.log(location.state.pnr);
        console.log(pnr);
        navigate("/payment", { state: {pnr: pnr, fare: location.state.fare}});
      return <div>Thank you for submitting the form!</div>;
    } else {
      return <div>Form submission failed. Please try again.</div>;
    }
  }
  

return (
  <div id="ticsection">
  <div className="form-container"  >
    <h2 class ="mainheading">Ticket Reservation</h2>
    <form onSubmit={handleSubmit(handleFormSubmit)}>
    
      <div className="form-group" >
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" {...register('name', { required: true })} />
        {errors.name && <span className="error-message">Please enter your name</span>}
      </div>
      
      <div className="form-group">
        <label htmlFor="ticketQuantity">Ticket Quantity:</label>
        <input type="text" id="ticketQuantity" 
        {...register('ticketQuantity', { required: true })} />
        {errors.quantity && <span className="error-message">Please enter the quantity</span>}
      </div>
      
      
      <div className="form-group">
      <label>
          Date:
          <input
            type="date"
            id='date'
            value={location.state.date}
            {...register('date', { required: true })} />
        {errors.origin && <span className="error-message">Date</span>}
        </label>
        
        {errors.date && <span className="error-message">Please enter the date</span>}
      </div>
      <div className="form-group">
          <label htmlFor="mobileNo">Mobile Number:</label>
          <input type="number" id="mobileNo" {...register('mobileNo', { required: true })} />
          {errors.mobileNo && <span className="error-message">Please enter your mobile number</span>}
        </div>
        <div className="form-group">
          <label htmlFor="seatPreferences">Seat Preference:</label>
          <select id="seatPreferences" {...register('seatPreferences', { required: true })}>
            <option value="">Select</option>
            <option value="lower">Lower Birth</option>
            <option value="middle">Middle Birth</option>
            <option value="upper">Upper Birth</option>
            <option value="side-lower">Side Lower Birth</option>
            <option value="side-upper">Side Upper Birth</option>
          </select>
          {errors.seatPreference && <span className="error-message">Please select your seat preference</span>}
        </div>
        <div className="form-group">
          <label htmlFor="modeOfPayment">Mode of Payment:</label>
          <select id="modeOfPayment" {...register('modeOfPayment', { required: true })}>
          <option value="">Select</option>
            <option value="debit card">Debit Card</option>
            <option disabled value="upi">UPI</option>
            <option disabled value="net-banking">Net Banking</option>
          </select>
          {errors.modeOfPayment && <span className="error-message">Please select your mode of payment</span>}
        </div>
        

      <div className="form-group">
        <label htmlFor="destination">Destination:</label>
        <input type="text" id="destination" value={location.state.destination} {...register('destination', { required: true })} />
        {errors.destination && <span className="error-message">Please enter the destination</span>}
      </div>

      <div className="form-group">
        <label htmlFor="className">Class Name:</label>
        <input type="text" id="className" value={location.state.className} {...register('className', { required: true })} />
        {errors.className && <span className="error-message">Please select the class</span>}
      </div>
      
      <div className="form-group">
        <label htmlFor="origin">Origin:</label>
        <input type="text" id="origin" value={location.state.origin} {...register('origin', { required: true })} />
        {errors.origin && <span className="error-message">Please enter the origin</span>}
      </div>
      
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" {...register('address', { required: true })} />
        {errors.address && <span className="error-message">Please enter the address</span>}
      </div>
      
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" {...register('age', { required: true })} />
        {errors.age && <span className="error-message">Please enter your age</span>}
      </div>
      <div className="form-group">
      <label>
          Sex:
          <select id="sex" {...register('sex', { required: true })}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
   
        {errors.sex && <span className="error-message">Please enter your sex</span>}
      </div>
      <button type="submit">Submit</button>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">Form submitted successfully!</div>}
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
    </div>
    
    
  
);
};
export default TicketReservationPage;