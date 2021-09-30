import React, { Fragment } from 'react';
import SummaryAnalyticsCard from '../../components/dashboard/SummaryAnalyticsCard';
import Sidebar from '../../layouts/global/Sidebar';

export default function Complaints() {
  return (
    <Fragment>
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
                  Complaints
                </h3>
              </div>

              <div className={'flex flex-row justify-between items-center'}>
                <div className={'w-full'}>
                  <div className={'flex flex-row justify-between items-center'}>
                    {[
                      {
                        key: 1,
                        type: 'Fare',
                        count: 21,
                        color: 'bg-green-50',
                        icon: 'fas fa-wallet text-4xl text-green-600',
                      },
                      {
                        key: 2,
                        type: 'Theft',
                        count: 19,
                        color: 'bg-red-50',
                        icon: 'fas fa-theater-masks text-4xl text-red-600',
                      },
                      {
                        key: 3,
                        type: 'Abuse',
                        count: 19,
                        color: 'bg-blue-50',
                        icon: 'fas fa-hand-point-right text-4xl text-blue-600',
                      },
                      {
                        key: 4,
                        type: 'Forgotten Item',
                        count: 28,
                        color: 'bg-yellow-50',
                        icon: 'fas fa-box-open text-4xl text-yellow-600',
                      },
                    ].map((item, index) => (
                      <SummaryAnalyticsCard
                        title={item.type}
                        count={item.count}
                        color={item.color}
                        icon={item.icon}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className={'flex flex-row'}>
                  <div className={'rounded-md shadow bg-white p-5 w-full'}>
                    <div>
                      <h3>Reported cases</h3>
                    </div>
                    <div>
                      <table className="w-full">
                        <thead>
                          <tr>
                            <th className={'text-left p'}>Case No.</th>
                            <th className={'text-left p'}>Reporter</th>
                            <th className={'text-left p'}>Status</th>
                            <th className={'text-left p'}>Type</th>
                            <th className={'text-left p'}>Subject</th>
                            <th className={'text-left p'}>Vehicle</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className={'py-2'}></td>
                            <td className={'py-2'}></td>
                            <td className={'py-2'}></td>
                            <td className={'py-2'}></td>
                            <td className={'py-2'}></td>
                            <td className={'py-2'}></td>
                            <td className={'py-2'}></td>
                          </tr>
                        </tbody>
                      </table>
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
