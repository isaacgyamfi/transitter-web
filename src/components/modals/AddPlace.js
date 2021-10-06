import React from "react";
import Modal from "react-modal";
import { Formik } from "formik";
import towns from "../../assets/towns.json";
import axios from "axios";
import { customStyles } from "../../assets/styles/globalStyles";

Modal.setAppElement("#root");

export default function AddPlace({ placeModal, closePlaceModal }) {
  const createPlace = async (values, actions) => {
    console.log(values);
    const response = await axios.post(
      `${
        process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_DEV_API_BASE_URL
          : null
      }/places/add`,
      {
        name: values.name,
        region: values.region,
        vicinity: values.vicinity,
        type: values.type,
        geometry: {
          location: {
            lng: values.longitude,
            lat: values.latitude,
          },
        },
      }
    );
    closePlaceModal();
    console.log(response);
  };
  return (
    <Modal
      isOpen={placeModal}
      onRequestClose={closePlaceModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Formik
        initialValues={{
          name: "",
          type: "",
          vicinity: "",
          region: "",
          longitude: "",
          latitude: "",
        }}
        onSubmit={(values, actions) => createPlace(values, actions)}
      >
        {(props) => {
          return (
            <div>
              <div>
                <h3 className={"text-xl font-semibold"}>Save a new place</h3>
              </div>
              <hr className={"my-2"} />
              <div>
                <h3 className={"text-sm"}>Place details</h3>
              </div>
              <div className={"flex flex-row"}>
                <div className={"p-2 w-full"}>
                  <label className={"w-full"}>Name</label>
                  <input
                    name={"name"}
                    type={"text"}
                    className={"w-full mt-1 bg-gray-200 p-3"}
                    value={props.values.name}
                    onChange={props.handleChange("name")}
                  />
                </div>
                <div className={"p-2 w-1/2"}>
                  <label className={"w-full"}>Place type</label>
                  <select
                    name={"type"}
                    className={"w-full mt-1 bg-gray-200 p-3"}
                    value={props.values.type}
                    onChange={props.handleChange("type")}
                  >
                    <option>Select one</option>
                    {[
                      "taxi station",
                      "bus stop",
                      "establishment",
                      "bus station",
                    ].map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={"flex flex-row"}>
                <div className={"p-2 w-1/2"}>
                  <label className={"w-full"}>Vicinity</label>
                  <select
                    name={"vicinity"}
                    className={"w-full mt-1 bg-gray-200 p-3"}
                    value={props.values.vicinity}
                    onChange={props.handleChange("vicinity")}
                  >
                    {Object.values(towns)
                      .flat(1)
                      .sort()
                      .map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                  </select>
                </div>
                <div className={"p-2 w-1/2"}>
                  <label className={"w-full"}>Region</label>
                  <select
                    name={"region"}
                    className={"w-full mt-1 bg-gray-200 p-3"}
                    value={props.values.region}
                    onChange={props.handleChange("region")}
                  >
                    <option>Select one</option>
                    {Object.keys(towns).map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={"flex flex-row"}>
                <div className={"p-2 w-1/2"}>
                  <label className={"w-full"}>longitude</label>
                  <input
                    name={"longitude"}
                    type={"number"}
                    className={"w-full mt-1 bg-gray-200 p-3"}
                    value={props.values.longitude}
                    onChange={props.handleChange("longitude")}
                  />
                </div>
                <div className={"p-2 w-1/2"}>
                  <label className={"w-full"}>latitude</label>
                  <input
                    name={"latitude"}
                    type={"number"}
                    className={"w-full mt-1 bg-gray-200 p-3"}
                    value={props.values.latitude}
                    onChange={props.handleChange("latitude")}
                  />
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
                  Save as place
                </button>
                <button
                  onClick={closePlaceModal}
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
