import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const TicketDetailsPage = () => {
  const [ticketDetails, setTicketDetails] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const location = useLocation();

  console.log(location.state.pnr);
  console.log(location.state.payment['id']);

  useEffect(() => {
    const fetchTicketDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8091/orders/${location.state.pnr}`
        );
        console.log(location.state.pnr);
        setTicketDetails(response.data[0]);
        console.log(response.data);

        setLoading(false);
      } catch (error) {
        setError(error.message);

        setLoading(false);
      }
    };

    fetchTicketDetails();
  }, []);

  if (loading) {
    return <p>Loading ticket details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded">
      <h1 className="text-2xl text-center mb-1">Ticket Details</h1>

      <h2>Payment done with payment id: {location.state.payment['id']}</h2>

      {ticketDetails && (
        <div>
          <p>
            <strong>PNR:</strong> {ticketDetails.pnr}
          </p>

          <p>
            <strong>Seat/Birth:</strong> {ticketDetails.seatPreferences}
          </p>

          <p>
            <strong>Origin:</strong> {ticketDetails.origin}
          </p>

          <p>
            <strong>Destination:</strong> {ticketDetails.destination}
          </p>


          <p>
            <strong>Mode of Payment:</strong> {ticketDetails.modeOfPayment}
          </p>

          <p>
            <strong>Fare:</strong> {location.state.fare}
          </p>
        </div>
      )}
    </div>
  );
};

export default TicketDetailsPage;
