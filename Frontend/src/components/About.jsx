import React, { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Select from 'react-select';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

const About = () => {
  const navigate = useNavigate();
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchResultsEmpty, setSearchResultsEmpty] = useState(false); // New state variable

  const data = [
    {
      value: 1,
      label: "AC 1 Tier",
    },
    {
      value: 2,
      label: "AC 2 Tier",
    },
    {
      value: 3,
      label: "AC 3 Tier",
    },
    {
      value: 4,
      label: "Sleeper",
    },
    {
      value: 5,
      label: "General",
    },
  ];

  const handleChange = (e) => {
    setSelectedOption(e);
  };

  const searchTrain = () => {
    if (origin.trim() === '' || destination.trim() === '' || date.trim() === '') {
      
      toast.error("Please enter origin,destination and date");
    } 
      
       else {
        setSearchResultsEmpty(false);
        toast.success("Search successful");
        navigate("/train-search", { state: { origin, destination, date } });
      }
    
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Train Search</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <MDBContainer fluid>
            <MDBRow className="d-flex justify-content-center align-items-center">
              <MDBCol lg="8">
                <MDBCard
                  className="my-8 rounded-3"
                  style={{ maxHeight: "900px" }}
                >
                  <MDBCardImage
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f9/CN_8015%2C_5690_and_5517_Hinton_-_Jasper.jpg"
                    className="w-100 rounded-top"
                    alt="Sample photo"
                    style={{ maxHeight: "200px" }}
                  />

                  <MDBCardBody className="px-8">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                      Train Info
                    </h3>
                    <MDBInput
                      wrapperClass="mb-4"
                      label="From"
                      id="form1"
                      type="text"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="To"
                      id="form1"
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />

                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="datepicker mb-4"
                          label="Select a date"
                          id="form2"
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </MDBCol>

                      
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={searchTrain}
            className="font-medium text-teal-700 hover:text-orange-400"
            variant="primary"
          >
            Search Train
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
      {searchResultsEmpty && <div> </div>}
    </div>
  );
};

export default About;
