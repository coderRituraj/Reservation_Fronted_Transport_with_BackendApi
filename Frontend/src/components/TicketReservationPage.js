import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './ticketreservationpage.css'; 
const TicketReservationPage = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [className, setClassName] = useState('');
  const [date, setDate] = useState('');
  const [bank, setBank] = useState('');
  const [destination, setDestination] = useState('');
  const [origin, setOrigin] = useState('');
  const [creditNumber, setCreditNumber] = useState('');
  const [address, setAddress] = useState('');
  const [pnr, setPnr] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [seatPreference, setSeatPreference] = useState('');
  const [modeOfPayment, setModeOfPayment] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


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
    if (success) {
      return <div>Thank you for submitting the form!</div>;
    } else {
      return <div>Form submission failed. Please try again.</div>;
    }
  }
  

return (
  <div className="form-container">

    <h2>Ticket Reservation</h2>
    <form onSubmit={handleSubmit(handleFormSubmit)}>
    
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" {...register('name', { required: true })} />
        {errors.name && <span className="error-message">Please enter your name</span>}
      </div>
      
      <div className="form-group">
        <label htmlFor="quantity">Ticket Quantity:</label>
        <input type="text" id="quantity" {...register('quantity', { required: true })} />
        {errors.quantity && <span className="error-message">Please enter the quantity</span>}
      </div>
      
      
      <div className="form-group">
      <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        
        {errors.date && <span className="error-message">Please enter the date</span>}
      </div>
      <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input type="text" id="mobileNumber" {...register('mobileNumber', { required: true })} />
          {errors.mobileNumber && <span className="error-message">Please enter your mobile number</span>}
        </div>
        <div className="form-group">
          <label htmlFor="seatPreference">Seat Preference:</label>
          <select id="seatPreference" {...register('seatPreference', { required: true })}>
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
            <option value="">Debit Card</option>
            <option value="upi">UPI</option>
            <option value="net-banking">Net Banking</option>
          </select>
          {errors.modeOfPayment && <span className="error-message">Please select your mode of payment</span>}
        </div>
        

      <div className="form-group">
        <label htmlFor="destination">Destination:</label>
        <input type="text" id="destination" {...register('destination', { required: true })} />
        {errors.destination && <span className="error-message">Please enter the destination</span>}
      </div>
      
      <div className="form-group">
        <label htmlFor="origin">Origin:</label>
        <input type="text" id="origin" {...register('origin', { required: true })} />
        {errors.origin && <span className="error-message">Please enter the origin</span>}
      </div>
      
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" {...register('address', { required: true })} />
        {errors.address && <span className="error-message">Please enter the address</span>}
      </div>
      
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input type="text" id="age" {...register('age', { required: true })} />
        {errors.age && <span className="error-message">Please enter your age</span>}
      </div>
      <div className="form-group">
      <label>
          Sex:
          <select value={sex} onChange={(e) => setSex(e.target.value)}>
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
    
    
  
);
};
export default TicketReservationPage;