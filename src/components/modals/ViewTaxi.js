import React from "react";
import Modal from "react-modal";
import { customStyles } from "../../assets/styles/globalStyles";

Modal.setAppElement("#root");

export default function ViewTaxiDetails({ modalIsOpen, closeModal, taxi }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div style={{ width: 500 }}>
        <div className={"flex flex-row justify-between items-center"}>
          <h3 className={"text-xl font-semibold"}>Taxi Details</h3>
          <button></button>
        </div>
        <hr className={"my-2"} />
        <div className={"flex flex-row justify-between"}>
          <div className={"mb-2"}>
            <h3 className={"text-blue-800"}>Vehicle Registration</h3>
            <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
              {taxi.registrationNumber}
            </p>
          </div>
          <div className={"mb-2"}>
            <h3 className={"text-blue-800"}>VIN</h3>
            <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
              {taxi.vin}
            </p>
          </div>
        </div>
        <div className={"flex flex-row"}>
          <div className={"mb-2 mr-4"}>
            <h3 className={"text-blue-800"}>Brand</h3>
            <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
              {taxi.brand}
            </p>
          </div>
          <div className={"mb-2"}>
            <h3 className={"text-blue-800"}>Model</h3>
            <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
              {taxi.model}
            </p>
          </div>
        </div>
        <div>
          <div className={"flex flex-row justify-between"}>
            <div className={"mb-2"}>
              <h3 className={"text-blue-800"}>Station</h3>
              <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
                {taxi.station.address.name}
              </p>
            </div>
            <div className={"mb-2"}>
              <h3 className={"text-blue-800"}>Vicinity</h3>
              <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
                {taxi.station.address.vicinity}
              </p>
            </div>
            <div className={"mb-2"}>
              <h3 className={"text-blue-800"}>Region</h3>
              <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
                {taxi.station.address.region}
              </p>
            </div>
          </div>

          <div className={"flex flex-row justify-between"}>
            <div className={"mb-2"}>
              <h3 className={"text-blue-800"}>Owner Name</h3>
              <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
                {taxi.owner.name}
              </p>
            </div>
            <div className={"mb-2"}>
              <h3 className={"text-blue-800"}>Owner Phone</h3>
              <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
                {taxi.owner.contact}
              </p>
            </div>
            <div className={"mb-2"}>
              <h3 className={"text-blue-800"}>Owner Address</h3>
              <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
                {taxi.owner.address}
              </p>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => closeModal()}
            className={
              "text-blue-800 border border-blue-800 shadow px-3 py-2 text-sm rounded"
            }
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}
