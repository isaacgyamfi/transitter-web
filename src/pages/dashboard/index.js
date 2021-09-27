import React, { Fragment, useContext } from 'react';
import Sidebar from '../../layouts/global/Sidebar';
// import { AuthContext } from '../../../contexts/AuthContext';
import { Redirect } from 'react-router';
import SummaryAnalytics from '../../components/dashboard/SummaryAnalytics';

export default function Dashboard() {
  //   const { state } = useContext(AuthContext);

  return (
    <Fragment>
      {/* {state.isAuth ? <Redirect to="/dashboard" /> : <Redirect to="/login" />} */}
      <div>
        <main className={'flex flex-col lg:flex-row'}>
          <Sidebar />
          <section className={'lg:w-full bg-gray-100 h-screen'}>
            <div
              className={
                'w-full px-5 py-5 lg:pl-72 lg:pt-10 lg:pr-10 bg-gray-100'
              }
            >
              <div className={'mb-5'}>
                <h3 className={'font-medium text-xl text-gray-500'}>
                  Dashboard
                </h3>
              </div>
              <div>
                <SummaryAnalytics />
              </div>
            </div>
          </section>
        </main>
      </div>
    </Fragment>
  );
}
