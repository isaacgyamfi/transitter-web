import React, { Fragment, useContext, useEffect, useState } from 'react';
import Sidebar from '../../layouts/global/Sidebar';
import { Redirect } from 'react-router';
import AddStation from '../../components/modals/AddStation';
import axios from 'axios';

export default function Stations() {
  //   const { state } = useContext(AuthContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [stations, setStations] = useState([]);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const loadStations = async () => {
    const response = await axios.get('http://localhost:5000/stations');
    console.log(response.data.data);
    return setStations(response.data.data);
  };

  useEffect(() => {
    loadStations();
  }, []);

  return (
    <Fragment>
      {/* {state.isAuth ? <Redirect to="/dashboard" /> : <Redirect to="/login" />} */}
      <AddStation modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <div>
        <main className={'flex flex-col lg:flex-row'}>
          <Sidebar />
          <section className={'lg:w-full bg-gray-100 h-screen'}>
            <div
              className={
                'w-full px-5 py-5 lg:pl-72 lg:pt-10 lg:pr-10 bg-gray-100'
              }
            >
              <div
                className={'mb-5 flex flex-row justify-between items-center'}
              >
                <h3 className={'font-medium text-xl text-gray-500'}>
                  Stations
                </h3>
                <div className={'flex flex-row justify-between items-center'}>
                  <button
                    onClick={() => openModal()}
                    className={
                      'mr-2 text-white bg-blue-800 shadow px-3 py-2 rounded'
                    }
                  >
                    Add a station
                  </button>
                  <button
                    className={
                      'text-blue-800 border border-blue-800 shadow px-3 py-2 rounded'
                    }
                  >
                    Add a taxi
                  </button>
                </div>
              </div>
              <div
                style={{ minHeight: 580 }}
                className={'shadow-md bg-white p-5'}
              >
                <div>
                  <h3>Registered Stations</h3>
                </div>
                <div className={'mt-2'}>
                  {stations.length > 0 ? (
                    <table className={'table w-full'}>
                      <tr className={'text-left'}>
                        <th className={'font-semibold'}>ID</th>
                        <th className={'font-semibold'}>Name</th>
                        <th className={'font-semibold'}>Vicinity</th>
                        <th className={'font-semibold'}>Destinations</th>
                        <th className={'font-semibold'}>No. of Taxis</th>
                        <th className={'font-semibold'}>Head</th>
                        <th className={'font-semibold'}>Contact</th>
                      </tr>
                      <tbody>
                        {stations.map((item, index) => (
                          <tr className={'text-left'}>
                            <td>{index + 1}</td>
                            <td>{item.address.name}</td>
                            <td>{item.address.vicinity}</td>
                            <td>{item.destinations.length}</td>
                            <td>{item.taxis.length}</td>
                            <td>{item.stationAdmin.name}</td>
                            <td>{item.stationAdmin.phone}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className={'flex justify-center items-center'}>
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
