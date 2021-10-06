import React from "react";
import Modal from "react-modal";
import { customStyles } from "../../assets/styles/globalStyles";

Modal.setAppElement("#root");

export default function ViewDriverDetails({ modalIsOpen, closeModal, driver }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div style={{ width: 600 }}>
        <div className={"flex flex-row justify-between items-center"}>
          <h3 className={"text-xl font-semibold"}>Taxi driver Details</h3>
        </div>
        <hr className={"my-2"} />
        <div className={"mb-2"}>
          <h3 className={"text-blue-800"}>Name</h3>
          <p className={"font-semibold text-lg"}>{driver.name}</p>
        </div>
        <div className={"flex flex-row justify-between"}>
          <div className={"mb-2"}>
            <h3 className={"text-blue-800"}>Phone</h3>
            <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
              {driver.phone}
            </p>
          </div>
          <div className={"mb-2"}>
            <h3 className={"text-blue-800"}>Email</h3>
            <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
              {driver.email}
            </p>
          </div>
          <div className={"mb-2"}>
            <h3 className={"text-blue-800"}>Address</h3>
            <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
              {driver.address}
            </p>
          </div>
        </div>
        <div className={"flex flex-row justify-between"}>
          <div className={"mb-2"}>
            <h3 className={"text-blue-800"}>Taxi station</h3>
            <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
              {driver.taxiLocal.address.name}
            </p>
          </div>
          <div className={"mb-2"}>
            <h3 className={"text-blue-800"}>Station Region</h3>
            <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
              {driver.taxiLocal.address.region}
            </p>
          </div>
          <div className={"mb-2"}>
            <h3 className={"text-blue-800"}>Station Contact</h3>
            <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
              {driver.taxiLocal.stationAdmin.phone}
            </p>
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
