import React from "react";
import Modal from "react-modal";
import { customStyles } from "../../assets/styles/globalStyles";

Modal.setAppElement("#root");

export default function ViewComplaintDetails({
  modalIsOpen,
  closeModal,
  complaint,
}) {
  const changeComplaintStatus = async (values, actions) => {
    console.log(values);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div style={{ width: 500 }}>
        <div className={"flex flex-row justify-between items-center"}>
          <h3 className={"text-xl font-semibold"}>Case Details</h3>
          <button>
            {complaint.status === "NOT RESOLVED" ? (
              <span
                className={
                  "text-sm font-semibold text-red-600 bg-red-100 px-2 py-1 rounded"
                }
              >
                NOT RESOLVED
              </span>
            ) : complaint.status === "RESOLVED" ? (
              <span
                className={
                  "text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded"
                }
              >
                RESOLVED
              </span>
            ) : complaint.status === "PENDING" ? (
              <span
                className={
                  "text-sm font-semibold text-yellow-600 bg-yellow-100 px-2 py-1 rounded"
                }
              >
                PENDING
              </span>
            ) : null}
          </button>
        </div>
        <hr className={"my-2"} />
        <div>
          <div className={"mb-2"}>
            <h3>Date: {complaint.createdAt}</h3>
          </div>
          <div className={"mb-2"}>
            <h3>Reported by: {complaint.user.name}</h3>
          </div>
          <div className={"mb-2"}>
            <h3>Contact: {complaint.user.phone}</h3>
          </div>
          <div className={"mb-2"}>
            <h3>Subject</h3>
            <p className={"font-semibold bg-gray-100 p-2"}>
              {complaint.complaint.subject}
            </p>
          </div>
          <div className={"mb-2"}>
            <h3>Description</h3>
            <p className={"text-lg bg-gray-100 p-2"}>
              {complaint.complaint.description}
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
