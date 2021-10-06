import React, { Fragment, useContext, useEffect, useState } from "react";
import Sidebar from "../../layouts/global/Sidebar";
import { Redirect } from "react-router";
import AddStation from "../../components/modals/AddStation";
import axios from "axios";
import AddPlace from "../../components/modals/AddPlace";
import ViewStationDetails from "../../components/modals/ViewStation";

export default function Stations() {
  //   const { state } = useContext(AuthContext);
  const [stationModal, setStationModal] = useState(false);
  const [placeModal, setPlaceModal] = useState(false);
  const [stations, setStations] = useState([]);
  const [selected, setSelected] = useState(null);
  const openStationModal = () => setStationModal(true);
  const closeStationModal = () => setStationModal(false);
  const openPlaceModal = () => setPlaceModal(true);
  const closePlaceModal = () => setPlaceModal(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const loadStations = async () => {
    const response = await axios.get(
      `${
        process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_DEV_API_BASE_URL
          : null
      }/stations`
    );
    return setStations(response.data.data);
  };

  useEffect(() => {
    loadStations();
  }, []);

  return (
    <Fragment>
      {/* {state.isAuth ? <Redirect to="/dashboard" /> : <Redirect to="/login" />} */}
      <AddStation
        stationModal={stationModal}
        closeStationModal={closeStationModal}
      />
      <AddPlace placeModal={placeModal} closePlaceModal={closePlaceModal} />
      {selected && (
        <ViewStationDetails
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          station={selected}
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
                  Stations
                </h3>
                <div className={"flex flex-row justify-between items-center"}>
                  <button
                    onClick={() => openStationModal()}
                    className={
                      "mr-2 text-white bg-blue-800 shadow px-3 py-2 rounded"
                    }
                  >
                    Add a station
                  </button>
                  <button
                    onClick={() => openPlaceModal()}
                    className={
                      "text-blue-800 border border-blue-800 shadow px-3 py-2 rounded"
                    }
                  >
                    Add a place
                  </button>
                </div>
              </div>
              <div
                style={{ minHeight: 580 }}
                className={"shadow-md bg-white p-5"}
              >
                <div>
                  <h3>Registered Stations</h3>
                </div>
                <div className={"mt-2"}>
                  {stations.length > 0 ? (
                    <table className={"table-auto w-full"}>
                      <tr className={"text-left"}>
                        <th className={"font-semibold"}>ID</th>
                        <th className={"font-semibold"}>Name</th>
                        <th className={"font-semibold"}>Vicinity</th>
                        <th className={"font-semibold"}>Destinations</th>
                        <th className={"font-semibold"}>No. of Taxis</th>
                        <th className={"font-semibold"}>Head</th>
                        <th className={"font-semibold"}>Contact</th>
                      </tr>
                      <tbody>
                        {stations.map((item, index) => (
                          <tr key={index} className={"text-left"}>
                            <td className={"py-2"}>{index + 1}</td>
                            <td className={"py-2"}>{item.address.name}</td>
                            <td className={"py-2"}>{item.address.vicinity}</td>
                            <td className={"py-2"}>
                              {item.destinations.length}
                            </td>
                            <td className={"py-2"}>{item.taxis.length}</td>
                            <td className={"py-2"}>{item.stationAdmin.name}</td>
                            <td className={"py-2"}>
                              {item.stationAdmin.phone}
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
                      <h3>No station registered</h3>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Fragment>
  );
}
