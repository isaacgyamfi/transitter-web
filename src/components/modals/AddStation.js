import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Formik } from "formik";
import axios from "axios";
import { customStyles } from "../../assets/styles/globalStyles";

Modal.setAppElement("#root");

export default function AddStation({ stationModal, closeStationModal }) {
  const [places, setPlaces] = useState([]);

  const loadRegisteredPlaces = async () => {
    const response = await axios.get(
      `${
        process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_DEV_API_BASE_URL
          : null
      }/places`
    );
    console.log(response.data.data);
    return setPlaces(response.data.data);
  };
  const createStation = async (values, actions) => {
    console.log(values);
    const response = await axios.post(
      `${
        process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_DEV_API_BASE_URL
          : null
      }/stations/add`,
      {
        stationAdmin: {
          name: values.adminName,
          phone: values.adminPhone,
          email: values.adminEmail,
        },
        contact: values.phone,
        address: values.name,
      }
    );
    // closeModal();
    console.log(response);
  };
  useEffect(() => {
    loadRegisteredPlaces();
  }, []);
  return (
    <Modal
      isOpen={stationModal}
      onRequestClose={closeStationModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Formik
        initialValues={{
          name: "",
          adminName: "",
          adminPhone: "",
          adminEmail: "",
          phone: "",
          email: "",
        }}
        onSubmit={(values, actions) => createStation(values, actions)}
      >
        {(props) => {
          return (
            <div>
              <div>
                <h3 className={"text-xl font-semibold"}>
                  Add new taxi station
                </h3>
              </div>
              <hr className={"my-2"} />
              <div>
                <h3 className={"text-sm"}>Place details</h3>
              </div>
              <div className={"p-2 w-full"}>
                <label className={"w-full"}>Place Name</label>
                <select
                  name={"name"}
                  className={"w-full mt-1 bg-gray-200 p-3"}
                  value={props.values.name}
                  onChange={props.handleChange("name")}
                >
                  <option disabled>Select one</option>
                  {places
                    ? places.map((item, index) => (
                        <option key={index} value={item.name}>
                          {item.name}
                          {", "}
                          {item.vicinity}
                        </option>
                      ))
                    : null}
                </select>
              </div>
              <div className={"flex flex-row"}>
                <div className={"p-2 w-1/2"}>
                  <label className={"w-full"}>Primary Contact</label>
                  <input
                    name={"phone"}
                    type={"tel"}
                    className={"w-full mt-1 bg-gray-200 p-3"}
                    value={props.values.phone}
                    onChange={props.handleChange("phone")}
                  />
                </div>
              </div>
              <div>
                <h3 className={"text-sm"}>Administration details</h3>
              </div>
              <div className={"flex flex-row"}>
                <div className={"p-2 w-1/3"}>
                  <label className={"w-full"}>Name</label>
                  <input
                    name={"adminName"}
                    type={"text"}
                    className={"w-full mt-1 bg-gray-200 p-3"}
                    value={props.values.adminName}
                    onChange={props.handleChange("adminName")}
                  />
                </div>
                <div className={"p-2 w-1/3"}>
                  <label className={"w-full"}>Phone</label>
                  <input
                    name={"adminPhone"}
                    type={"tel"}
                    className={"w-full mt-1 bg-gray-200 p-3"}
                    value={props.values.adminPhone}
                    onChange={props.handleChange("adminPhone")}
                  />
                </div>
                <div className={"p-2 w-1/3"}>
                  <label className={"w-full"}>Email</label>
                  <input
                    name={"email"}
                    type={"adminEmail"}
                    className={"w-full mt-1 bg-gray-200 p-3"}
                    value={props.values.adminEmail}
                    onChange={props.handleChange("adminEmail")}
                  />
                </div>
              </div>
              <div>
                <h3 className={"text-sm"}>Add Destinations</h3>
              </div>
              <div className={"flex flex-row items-end"}>
                <div className={"p-2 w-1/2"}>
                  <label className={"w-full"}>Destination</label>
                  <input
                    name={"destination"}
                    type={"text"}
                    className={"w-full mt-1 bg-gray-200 p-3"}
                  />
                </div>
                <div className={"p-2 w-1/2"}>
                  <label className={"w-full"}>Fare</label>
                  <input
                    name={"fare"}
                    type={"number"}
                    className={"w-full mt-1 bg-gray-200 p-3"}
                  />
                </div>
                <div className={"p-2 w-auto"}>
                  <button
                    className={
                      "text-white bg-blue-800 shadow px-3 py-2 text-sm rounded"
                    }
                  >
                    Add
                  </button>
                </div>
              </div>
              <div className={"p-2 w-auto"}>
                <button
                  type={"button"}
                  onClick={() => props.handleSubmit()}
                  className={
                    " mr-2 text-white bg-blue-800 shadow px-3 py-2 text-sm rounded"
                  }
                >
                  Save as station
                </button>
                <button
                  onClick={closeStationModal}
                  className={
                    "text-blue-800 border border-blue-800 shadow px-3 py-2 text-sm rounded"
                  }
                >
                  Cancel
                </button>
              </div>
            </div>
          );
        }}
      </Formik>
    </Modal>
  );
}
