import React, { Fragment, useContext, useEffect, useState } from 'react';
import Sidebar from '../../layouts/global/Sidebar';
import { Redirect } from 'react-router';
import AddTaxi from '../../components/modals/AddTaxi';
import axios from 'axios';
import ViewTaxiDetails from '../../components/modals/ViewTaxi';

export default function Taxis() {
  //   const { state } = useContext(AuthContext);
  const [taxis, setTaxis] = useState([]);
  const [selected, setSelected] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [viewModalIsOpen, setViewIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const openViewModal = () => setViewIsOpen(true);
  const closeViewModal = () => setViewIsOpen(false);

  const loadTaxis = async () => {
    const response = await axios.get(
      `${
        process.env.NODE_ENV === 'development'
          ? process.env.REACT_APP_DEV_API_BASE_URL
          : null
      }/taxis`,
    );
    return setTaxis(response.data.data);
  };

  useEffect(() => {
    loadTaxis();
  }, []);

  return (
    <Fragment>
      {/* {state.isAuth ? <Redirect to="/dashboard" /> : <Redirect to="/login" />} */}
      <AddTaxi modalIsOpen={modalIsOpen} closeModal={closeModal} />
      {selected && (
        <ViewTaxiDetails
          modalIsOpen={viewModalIsOpen}
          closeModal={closeViewModal}
          taxi={selected}
        />
      )}
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
                <h3 className={'font-medium text-xl text-gray-500'}>Taxis</h3>
                <div className={'flex flex-row justify-between items-center'}>
                  <button
                    onClick={() => openModal()}
                    className={
                      'mr-2 text-white bg-blue-800 shadow px-3 py-2 rounded'
                    }
                  >
                    Register a taxi
                  </button>
                  <button
                    className={
                      'text-blue-800 border border-blue-800 shadow px-3 py-2 rounded'
                    }
                  >
                    Assign a driver
                  </button>
                </div>
              </div>
              <div
                style={{ minHeight: 580 }}
                className={'shadow-md bg-white p-5'}
              >
                <div>
                  <h3>Registered Taxis</h3>
                </div>
                <div className={'mt-2'}>
                  {taxis.length > 0 ? (
                    <table className={'table-auto w-full'}>
                      <tr className={'text-left'}>
                        <th className={'font-semibold'}>ID</th>
                        <th className={'font-semibold'}>Registration</th>
                        <th className={'font-semibold'}>Color</th>
                        <th className={'font-semibold'}>Brand</th>
                        <th className={'font-semibold'}>VIN</th>
                        <th className={'font-semibold'}>Driver</th>
                        <th className={'font-semibold'}>Taxi Local</th>
                      </tr>
                      <tbody>
                        {taxis.map((item, index) => (
                          <tr key={index} className={'text-left'}>
                            <td>1</td>
                            <td>{item.registrationNumber}</td>
                            <td className={'py-2 flex flex-row items-center'}>
                              <div
                                className={'w-5 h-5 border border-black'}
                                style={{
                                  backgroundColor: item.colorCode.fender,
                                }}
                              />
                              <div
                                className={'w-5 h-5 border border-black'}
                                style={{
                                  backgroundColor: item.colorCode.doors,
                                }}
                              />
                              <div
                                className={'w-5 h-5 border border-black'}
                                style={{
                                  backgroundColor: item.colorCode.fender,
                                }}
                              />
                            </td>
                            <td className={'py-2'}>
                              {item.brand} {item.model}
                            </td>
                            <td className={'py-2'}>{item.vin}</td>
                            <td className={'py-2'}>
                              {item.driver ? (
                                item.driver
                              ) : (
                                <button
                                  className={
                                    'text-blue-600 border border-blue-600 bg-blue-100 shadow px-2 py-1 text-sm rounded'
                                  }
                                >
                                  <i className={'fas fa-building mr-1'} />
                                  Assign driver
                                </button>
                              )}
                            </td>
                            <td className={'py-2'}>
                              {item.station.address.name}
                            </td>
                            <td className={'py-2'}>
                              <button
                                onClick={() => {
                                  setSelected(item);
                                  openViewModal();
                                }}
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
