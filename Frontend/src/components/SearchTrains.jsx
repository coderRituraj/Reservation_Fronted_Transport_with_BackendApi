import { data } from "autoprefixer";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { getTrain } from "./services/user.service";

const SearchTrains = (props) => {
  const [trains, setTrains] = useState([]);
  // console.log(props.station);

  const getTrains = async () => {
    try {
    const response=await getTrain(props.station.origin,props.station.destination, props.station.date)
      // const response = await axios.get("http://localhost:8080/train/from/pune/to/goa");
      // let data2=localStorage.getItem("data",JSON.stringify(data));
     console.log(response );
      setTrains(response)
    
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.tName,
    },
    {
      name: "Train Number",
      selector: (row) => row.tNumber,
    },
    {
      name: "Distance",
      selector: (row) => row.distance,
    },
    {
      name: "Departure Time",
      selector: (row) => row.sTime,
    },
    {
      name: "Arrival Time",
      selector: (row) => row.eTime,
    },
    {
      name: "Departure Station",
      selector: (row) => row.departureS,
    },
    {
      name: "Arrival Station",
      selector: (row) => row.arrivalS,
    },
    {
      name:"Action",
      cell: (row) => (<button className="btn btn-primary" onClick={() => alert(row.tNumber)}>BOOK</button>),
    }
  ];
  useEffect(() => {
    props.station.origin && props.station.destination && props.station.date && getTrains();
  }, [props.station]);

  return (
    <DataTable
      // title="List of Trains"
      columns={columns}
      data={trains}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="550px"
      highlightOnHover
    />
  );
};

export default SearchTrains;