import React, { Fragment, useContext, useState } from 'react';
import Sidebar from '../../layouts/global/Sidebar';
import { Redirect } from 'react-router';
import AddStation from '../../components/modals/AddStation';

export default function Stations() {
  //   const { state } = useContext(AuthContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

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
                <table className={'table w-full'}>
                  {/* <thead> */}
                  <tr className={'text-left'}>
                    <th className={'font-semibold'}>ID</th>
                    <th className={'font-semibold'}>Name</th>
                    <th className={'font-semibold'}>Address</th>
                    <th className={'font-semibold'}>Head</th>
                    <th className={'font-semibold'}>Contact</th>
                  </tr>
                  {/* </thead> */}
                  <tbody>
                    <tr className={'text-left'}>
                      <td>1</td>
                      <td>Legon Taxi Station</td>
                      <td>Okponglo, Legon</td>
                      <td>James Martey</td>
                      <td>0545123456</td>
                    </tr>
                    <tr className={'text-left'}>
                      <td>1</td>
                      <td>Legon Taxi Station</td>
                      <td>Okponglo, Legon</td>
                      <td>James Martey</td>
                      <td>0545123456</td>
                    </tr>
                    <tr className={'text-left'}>
                      <td>1</td>
                      <td>Legon Taxi Station</td>
                      <td>Okponglo, Legon</td>
                      <td>James Martey</td>
                      <td>0545123456</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Fragment>
  );
}
