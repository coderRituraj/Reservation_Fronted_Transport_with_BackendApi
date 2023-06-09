import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "tailwindcss/tailwind.css";

const TrainSearch = () => {
  const [searchText, setSearchText] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  const location = useLocation();
  console.log(location.state.origin);
  console.log(location.state.destination);
  console.log(location.state.date);
  console.log(location.state.selectedOption.value);

  useEffect(() => {

    fetch(`http://localhost:8090/search/${location.state.origin}/${location.state.destination}/${location.state.date}`)
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

  /*
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (searchText.trim() !== "") {
      setIsLoading(true);

      fetch(`http://localhost:8090/search/${location.state.origin}/${location.state.destination}/${location.state.date}`)
        .then((response) => response.json())

        .then((data) => {
          setSearchResults(data);

          setIsLoading(false);
        })

        .catch((error) => {
          console.error("Error:", error);

          setIsLoading(false);
        });
    }
  };*/

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
        {searchResults && (
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
                    Fare
                  </th>

                  <th className=" px-4 py-2 border-solid border-4 border-black">
                    Available Seats
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className=" px-4 py-2 border-solid border-4 border-black">
                    {searchResults.trainNumber}
                  </td>

                  <td className=" px-4 py-2 border-solid border-4 border-black">
                    {searchResults.trainName}
                  </td>

                  <td className=" px-4 py-2 border-solid border-4 border-black">
                    {searchResults.date}
                  </td>

                  <td className=" px-4 py-2 border-solid border-4 border-black">
                    {searchResults.arrTime}
                  </td>

                  <td className=" px-4 py-2 border-solid border-4 border-black">
                    {searchResults.depTime}
                  </td>

                  <td className=" px-4 py-2 border-solid border-4 border-black">
                    {searchResults.origin}
                  </td>

                  <td className=" px-4 py-2 border-solid border-4 border-black">
                    {searchResults.destination}
                  </td>

                  {/*<td className=" px-4 py-2 border-solid border-4 border-black">{searchResults.fare*4.5}</td>*/}

                  {location.state.selectedOption.value === 1 ? (
                    <td className=" px-4 py-2 border-solid border-4 border-black">
                      {searchResults.fare * 5}
                    </td>
                  ) : location.state.selectedOption.value === 2 ? (
                    <td className=" px-4 py-2 border-solid border-4 border-black">
                      {searchResults.fare * 4}
                    </td>
                  ) : location.state.selectedOption.value === 3 ? (
                    <td className=" px-4 py-2 border-solid border-4 border-black">
                      {searchResults.fare * 3}
                    </td>
                  ) : location.state.selectedOption.value === 4 ? (
                    <td className=" px-4 py-2 border-solid border-4 border-black">
                      {searchResults.fare * 2}
                    </td>
                  ) : (
                    <td className=" px-4 py-2 border-solid border-4 border-black">
                      {searchResults.fare}
                    </td>
                  )}

                  <td className=" px-4 py-2 border-solid border-4 border-black">
                    {searchResults.seats}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainSearch;
