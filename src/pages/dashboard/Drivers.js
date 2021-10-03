import React, { Fragment, useContext, useEffect, useState } from 'react';
import Sidebar from '../../layouts/global/Sidebar';
import { Redirect } from 'react-router';
import AddDriver from '../../components/modals/AddDriver';
import axios from 'axios';

export default function Drivers() {
  //   const { state } = useContext(AuthContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [drivers, setDrivers] = useState([]);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const loadDrivers = async () => {
    const response = await axios.get(
      `${
        process.env.NODE_ENV === 'development'
          ? process.env.REACT_APP_DEV_API_BASE_URL
          : null
      }/drivers`,
    );
    console.log(response.data.data);
    return setDrivers(response.data.data);
  };

  useEffect(() => {
    loadDrivers();
  }, []);

  return (
    <Fragment>
      {/* {state.isAuth ? <Redirect to="/dashboard" /> : <Redirect to="/login" />} */}
      <AddDriver modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <div>
        <main className={'flex flex-col lg:flex-row'}>
          <Sidebar />
          <section className={'lg:w-full bg-gray-200 h-screen'}>
            <div
              className={
                'w-full px-5 py-5 lg:pl-72 lg:pt-10 lg:pr-10 bg-gray-200'
              }
            >
              <div
                className={'mb-5 flex flex-row justify-between items-center'}
              >
                <h3 className={'font-medium text-xl text-gray-500'}>Drivers</h3>
                <div className={'flex flex-row justify-between items-center'}>
                  <button
                    onClick={() => openModal()}
                    className={
                      'mr-2 text-white bg-blue-800 shadow px-3 py-2 rounded'
                    }
                  >
                    Register a driver
                  </button>
                  <button
                    className={
                      'text-blue-800 border border-blue-800 shadow px-3 py-2 rounded'
                    }
                  >
                    Assign a taxi
                  </button>
                </div>
              </div>
              <div
                style={{ minHeight: 580 }}
                className={'shadow-md bg-white p-5'}
              >
                <div>
                  <h3>Registered Drivers</h3>
                </div>
                <div className={'mt-2'}>
                  {drivers.length > 0 ? (
                    <table className={'table w-full'}>
                      <tr className={'text-left'}>
                        <th className={'font-semibold'}>ID</th>
                        <th className={'font-semibold'}>Name</th>
                        <th className={'font-semibold'}>Phone</th>
                        <th className={'font-semibold'}>Email</th>
                        <th className={'font-semibold'}>Address</th>
                        <th className={'font-semibold'}>Taxi</th>
                        <th className={'font-semibold'}>Taxi Local</th>
                      </tr>
                      <tbody>
                        {drivers.map((item, index) => (
                          <tr key={index} className={'text-left'}>
                            <td className={'py-2'}>{index + 1}</td>
                            <td className={'py-2'}>{item.name}</td>
                            <td className={'py-2'}>{item.phone}</td>
                            <td className={'py-2'}>{item.email}</td>
                            <td className={'py-2'}>{item.address}</td>
                            <td className={'py-2'}>
                              {item.taxi ? (
                                item.taxi.registrationNumber
                              ) : (
                                <button
                                  className={
                                    'text-yellow-600 border border-yellow-600 bg-yellow-100 shadow px-2 py-1 text-sm rounded'
                                  }
                                >
                                  <i className={'fas fa-taxi mr-1'} />
                                  Assign taxi
                                </button>
                              )}
                            </td>
                            <td className={'py-2'}>
                              {item.taxiLocal ? (
                                item.taxiLocal.address.name
                              ) : (
                                <button
                                  className={
                                    'text-red-600 border border-red-600 bg-red-100 shadow px-2 py-1 text-sm rounded'
                                  }
                                >
                                  <i className={'fas fa-building mr-1'} />
                                  Link to station
                                </button>
                              )}
                            </td>
                            <td className={'py-2'}>
                              <button
                                className={
                                  'text-blue-800 border border-blue-800 shadow px-2 py-1 text-sm rounded'
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
                    <div className={'flex justify-center items-center'}>
                      <h3>No driver registered</h3>
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
