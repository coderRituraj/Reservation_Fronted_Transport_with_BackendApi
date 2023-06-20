import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";

const TrainSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [finalFare, setFinalFare] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [ticketTypes, setTicketTypes] = useState([]);
  const [selectedTrain, setSelectedTrain] = useState("");
  const [val, setVal] = useState("");
  const [fareArray, setFareArray] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.state.origin);
  console.log(location.state.destination);
  console.log(location.state.date);

  const handleBookingClick = (trainNumber) => {
    // Handle booking logic for the selected trainNumber
    console.log(ticketTypes[trainNumber]);
    console.log(fareArray[trainNumber])
    console.log()
    navigate("/book", {
      state: {
        origin: location.state.origin,
        destination: location.state.destination,
        date: location.state.date,
        fare: location.state.fare,
        className: ticketTypes[trainNumber],
        finalFare: finalFare,
        fare: fareArray[trainNumber]
      },
    });
    console.log("Booking clicked for trainNumber:", trainNumber);
    console.log(ticketTypes);
    console.log(finalFare);
  };

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `http://localhost:8090/search/${location.state.origin}/${location.state.destination}/${location.state.date}`
    )
      .then((response) => response.json())

      .then((data) => {
        setSearchResults(data);

        setIsLoading(false);
      })

      .catch((error) => {
        console.error("Error:", error);

        setIsLoading(false);
      });
  }, []);

  const handleTicketTypeChange = (event, trainNumber) => {
    const selectedTicketType = event.target.value;

    setTicketTypes((prevTicketTypes) => ({
      ...prevTicketTypes,

      [trainNumber]: selectedTicketType,
    }));
  };

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://th.bing.com/th/id/R.f8e9aeaeded1af037a889d857eb4a9de?rik=NQDSq58T4j2g6w&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fm8wqdGZ.jpg&ehk=YhxrZ8km4iP91moZQIzwhpPcXtnqs9GKJ1sbZtUMlws%3d&risl=&pid=ImgRaw&r=0")',
      }}
    >
      {isLoading && <p>Loading...</p>}

      <div>
        {searchResults.length > 0 && (
          <div>
            <h2 className="text-xl font-bold mb-2">Search Results:</h2>

            <table className="w-full border-bold ">
              <thead>
                <tr>
                  <th className=" px-4 py-2 border-solid border-4 border-black">
                    Train Number
                  </th>

                  <th className=" px-4 py-2 border-solid border-4 border-black">
                    Train Name
                  </th>

                  <th className=" px-4 py-2 border-solid border-4 border-black">
                    Date
                  </th>

                  <th className=" px-4 py-2 border-solid border-4 border-black">
                    Arrival
                  </th>

                  <th className=" px-4 py-2 border-solid border-4 border-black">
                    Departure
                  </th>

                  <th className=" px-4 py-2 border-solid border-4 border-black">
                    Origin
                  </th>

                  <th className=" px-4 py-2 border-solid border-4 border-black">
                    Destination
                  </th>

                  <th className=" px-4 py-2 border-solid border-4 border-black">
                    Select Class
                  </th>

                  {/*<th className=" px-4 py-2 border-solid border-4 border-black">
                    Fare
        </th>*/}
                </tr>
              </thead>

              <tbody>
                {searchResults.map((result) => {
                  const selectedTicketType =
                    ticketTypes[result.trainNumber] || "";

                  return (
                    <tr key={result.trainNumber}>
                      <td className=" px-4 py-2 border-solid border-4 border-black">
                        {result.trainNumber}
                      </td>

                      <td className=" px-4 py-2 border-solid border-4 border-black">
                        {result.trainName}
                      </td>

                      <td className=" px-4 py-2 border-solid border-4 border-black">
                        {result.date}
                      </td>

                      <td className=" px-4 py-2 border-solid border-4 border-black">
                        {result.arrTime}
                      </td>

                      <td className=" px-4 py-2 border-solid border-4 border-black">
                        {result.depTime}
                      </td>

                      <td className=" px-4 py-2 border-solid border-4 border-black">
                        {result.origin}
                      </td>

                      <td className=" px-4 py-2 border-solid border-4 border-black">
                        {result.destination}
                      </td>

                      <td className="px-4 py-2 border-solid border-4 border-black">
                        <label>
                          <select
                            value={selectedTicketType}
                            onChange={(e) =>
                              handleTicketTypeChange(e, result.trainNumber)
                            }
                          >
                            <option value="" disabled>
                              --Select Class--
                            </option>
                            <option value="ac1">AC1</option>
                            <option value="ac2">AC2</option>
                            <option value="ac3">AC3</option>
                            <option value="sleeper">Sleeper</option>
                          </select>
                        </label>
                        {(() => {
                          
                          if (selectedTicketType === "ac1") {
                            fareArray[result.trainNumber] = result.fare * 3.5;
                          } else if (selectedTicketType === "ac2") {
                            fareArray[result.trainNumber] = result.fare * 3;
                          } else if (selectedTicketType === "ac3") {
                            fareArray[result.trainNumber] = result.fare * 2;
                          } else if (selectedTicketType === "sleeper") {
                            fareArray[result.trainNumber] = result.fare * 1;
                          } else {
                            fareArray[result.trainNumber] = result.fare;
                          }
                          console.log(fareArray); // Print the fare array
                          return fareArray[result.trainNumber];
                        })()}
                      </td>

                      <td className="p-2">
                        <button
                          onClick={() => handleBookingClick(result.trainNumber)}
                          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        >
                          Book
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainSearch;
