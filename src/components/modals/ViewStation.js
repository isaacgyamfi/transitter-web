import React from "react";
import Modal from "react-modal";
import { customStyles } from "../../assets/styles/globalStyles";

Modal.setAppElement("#root");

export default function ViewStationDetails({
  modalIsOpen,
  closeModal,
  station,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div style={{ width: 600 }}>
        <div className={"flex flex-row justify-between items-center"}>
          <h3 className={"text-xl font-semibold"}>Taxi Station Details</h3>
          <button></button>
        </div>
        <hr className={"my-2"} />
        <div className={"mb-2"}>
          <h3 className={"text-blue-800"}>Name</h3>
          <p className={"font-semibold text-lg"}>{station.address.name}</p>
        </div>
        <div className={"flex flex-row justify-between"}>
          <div className={"mb-2"}>
            <h3 className={"text-blue-800"}>No. of Taxis</h3>
            <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
              {station.taxis.length}
            </p>
          </div>
          <div className={"mb-2"}>
            <h3 className={"text-blue-800"}>No. of Destinations</h3>
            <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
              {station.destinations.length}
            </p>
          </div>
        </div>
        <div>
          <div className={"flex flex-row justify-between"}>
            <div className={"mb-2"}>
              <h3 className={"text-blue-800"}>Vicinity</h3>
              <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
                {station.address.vicinity}
              </p>
            </div>
            <div className={"mb-2"}>
              <h3 className={"text-blue-800"}>Region</h3>
              <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
                {station.address.region}
              </p>
            </div>
            <div className={"mb-2"}>
              <h3 className={"text-blue-800"}>
                Geolocation (longitude, latitude)
              </h3>
              <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
                {station.address.geometry.location.lng},
                {station.address.geometry.location.lat}
              </p>
            </div>
          </div>

          <div className={"flex flex-row justify-between"}>
            <div className={"mb-2"}>
              <h3 className={"text-blue-800"}>Contact name</h3>
              <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
                {station.stationAdmin.name}
              </p>
            </div>
            <div className={"mb-2"}>
              <h3 className={"text-blue-800"}>Phone</h3>
              <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
                {station.stationAdmin.phone}
              </p>
            </div>
            <div className={"mb-2"}>
              <h3 className={"text-blue-800"}>Email</h3>
              <p className={"text-lg px-3 py-2 rounded bg-gray-100"}>
                {station.stationAdmin.email}
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
