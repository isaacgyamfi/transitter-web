import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import SummaryAnalyticsCard from "../../components/dashboard/SummaryAnalyticsCard";
import ViewComplaintDetails from "../../components/modals/ViewComplainDetails";
import Sidebar from "../../layouts/global/Sidebar";

export default function Complaints() {
  const [complaints, setComplaints] = useState([]);
  const [selected, setSelected] = useState(null);
  const [stats, setStats] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const loadStatistics = async () => {
    const response = await axios.get(
      `${
        process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_DEV_API_BASE_URL
          : null
      }/stats/complaints`
    );
    return setStats(response.data.data);
  };

  const loadComplaints = async () => {
    const response = await axios.get(
      `${
        process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_DEV_API_BASE_URL
          : null
      }/complaints`
    );
    console.log(response.data.data);
    return setComplaints(response.data.data);
  };

  useEffect(() => {
    loadStatistics();
    loadComplaints();
  }, []);

  return (
    <Fragment>
      {selected && (
        <ViewComplaintDetails
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          complaint={selected}
        />
      )}
      <div>
        <main className={"flex flex-col lg:flex-row"}>
          <Sidebar />
          <section className={"lg:w-full bg-gray-200 h-screen"}>
            <div
              className={
                "w-full px-5 py-5 lg:pl-72 lg:pt-10 lg:pr-10 bg-gray-200"
              }
            >
              <div
                className={"mb-5 flex flex-row justify-between items-center"}
              >
                <h3 className={"font-medium text-xl text-gray-500"}>
                  Complaints
                </h3>
              </div>

              <div className={"flex flex-row justify-between items-center"}>
                <div className={"w-full"}>
                  {stats && (
                    <div
                      className={"flex flex-row justify-between items-center"}
                    >
                      <SummaryAnalyticsCard
                        title={"Fare"}
                        count={stats.fares}
                        color={"bg-green-100"}
                        icon={"fas fa-wallet text-4xl text-green-600"}
                      />
                      <SummaryAnalyticsCard
                        title={"Theft"}
                        count={stats.thefts}
                        color={"bg-red-100"}
                        icon={"fas fa-theater-masks text-4xl text-red-600"}
                      />
                      <SummaryAnalyticsCard
                        title={"Abuse"}
                        count={stats.abuse}
                        color={"bg-blue-100"}
                        icon={"fas fa-hand-point-right text-4xl text-blue-600"}
                      />
                      <SummaryAnalyticsCard
                        title={"Forgotten Item"}
                        count={stats.forgottenItems}
                        color={"bg-yellow-100"}
                        icon={"fas fa-box-open text-4xl text-yellow-600"}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div className={"flex flex-row"}>
                  <div
                    style={{ minHeight: 490 }}
                    className={"rounded-md shadow bg-white p-5 w-full"}
                  >
                    <div
                      className={"flex flex-row justify-between items-center"}
                    >
                      <h3>Reported cases</h3>
                      <div
                        className={
                          "flex flex-row justify-between items-center rounded-md bg-white text-blue-800"
                        }
                      >
                        <button
                          className={
                            "bg-white focus:bg-blue-800 focus:text-white hover:bg-blue-100 hover:text-blue-800 px-4 py-2 rounded-md"
                          }
                        >
                          All
                        </button>
                        <button
                          className={
                            "bg-white focus:bg-blue-800 focus:text-white hover:bg-blue-100 hover:text-blue-800 px-4 py-2 rounded-md"
                          }
                        >
                          Pending
                        </button>
                        <button
                          className={
                            "bg-white focus:bg-blue-800 focus:text-white hover:bg-blue-100 hover:text-blue-800 px-4 py-2 rounded-md"
                          }
                        >
                          Resolved
                        </button>
                      </div>
                    </div>
                    <div className={"mt-2"}>
                      {complaints.length > 0 ? (
                        <table className="table-auto w-full">
                          <tr className={"border-b border-gray-400 text-left"}>
                            <th className={"font-semibold"}>Case No.</th>
                            <th className={"font-semibold"}>Reporter</th>
                            <th className={"font-semibold"}>Contact</th>
                            <th className={"font-semibold"}>Status</th>
                            <th className={"font-semibold"}>Type</th>
                            <th className={"font-semibold"}>Subject</th>
                            <th className={"font-semibold"}>Vehicle</th>
                          </tr>
                          <tbody>
                            {complaints &&
                              complaints.map((item, index) => (
                                <tr key={index}>
                                  <td className={"py-2"}>{index + 1}</td>
                                  <td className={"py-2"}>{item.user.name}</td>
                                  <td className={"py-2"}>{item.user.phone}</td>
                                  <td className={"py-2"}>
                                    {item.status === "NOT RESOLVED" ? (
                                      <span
                                        className={
                                          "text-sm font-semibold text-red-600 bg-red-100 px-2 py-1 rounded"
                                        }
                                      >
                                        NOT RESOLVED
                                      </span>
                                    ) : item.status === "RESOLVED" ? (
                                      <span
                                        className={
                                          "text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded"
                                        }
                                      >
                                        RESOLVED
                                      </span>
                                    ) : item.status === "PENDING" ? (
                                      <span
                                        className={
                                          "text-sm font-semibold text-yellow-600 bg-yellow-100 px-2 py-1 rounded"
                                        }
                                      >
                                        PENDING
                                      </span>
                                    ) : null}
                                  </td>
                                  <td className={"py-2"}>
                                    {item.complaint.complaintType}
                                  </td>
                                  <td className={"py-2"}>
                                    {item.complaint.subject}
                                  </td>
                                  <td className={"py-2"}>
                                    {item.registrationNumber}
                                  </td>
                                  <td className={"py-2"}>
                                    <button
                                      onClick={() => {
                                        setSelected(item);
                                        openModal();
                                      }}
                                      className={
                                        "text-blue-800 border border-blue-800 shadow px-2 py-1 text-sm rounded"
                                      }
                                    >
                                      View
                                    </button>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      ) : (
                        <div className={"flex justify-center items-center"}>
                          <h3>No reported cases recorded</h3>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Fragment>
  );
}
