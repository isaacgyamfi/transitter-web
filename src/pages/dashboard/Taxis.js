import React, { Fragment, useContext, useState } from 'react';
import Sidebar from '../../layouts/global/Sidebar';
import { Redirect } from 'react-router';
import AddTaxi from '../../components/modals/AddTaxi';

export default function Taxis() {
  //   const { state } = useContext(AuthContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [taxis, setTaxis] = useState([]);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Fragment>
      {/* {state.isAuth ? <Redirect to="/dashboard" /> : <Redirect to="/login" />} */}
      <AddTaxi modalIsOpen={modalIsOpen} closeModal={closeModal} />
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
                    <table className={'table w-full'}>
                      <tr className={'text-left'}>
                        <th className={'font-semibold'}>ID</th>
                        <th className={'font-semibold'}>Registration</th>
                        <th className={'font-semibold'}>Brand</th>
                        <th className={'font-semibold'}>VIN</th>
                        <th className={'font-semibold'}>Driver</th>
                        <th className={'font-semibold'}>Taxi Local</th>
                      </tr>
                      <tbody>
                        <tr className={'text-left'}>
                          <td>1</td>
                          <td>GR-1234-20</td>
                          <td>Toyota Yaris</td>
                          <td>4Y1SL65848Z411439</td>
                          <td>James Martey</td>
                          <td>Legon Taxi Station</td>
                        </tr>
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
