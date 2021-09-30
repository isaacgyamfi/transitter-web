import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import SummaryAnalyticsCard from '../../components/dashboard/SummaryAnalyticsCard';
import Sidebar from '../../layouts/global/Sidebar';

const caseTypes = [
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
];

export default function Complaints() {
  const [complaints, setComplaints] = useState([]);

  const loadComplaints = async () => {
    const response = await axios.get('http://localhost:5000/complaints');
    console.log(response.data.data);
    return setComplaints(response.data.data);
  };

  useEffect(() => {
    loadComplaints();
  }, []);

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
                    {caseTypes.map((item, index) => (
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
                  <div
                    style={{ minHeight: 490 }}
                    className={'rounded-md shadow bg-white p-5 w-full'}
                  >
                    <div
                      className={'flex flex-row justify-between items-center'}
                    >
                      <h3>Reported cases</h3>
                      <div
                        className={
                          'flex flex-row justify-between items-center rounded-md bg-white text-blue-800'
                        }
                      >
                        <button
                          className={
                            'bg-white focus:bg-blue-800 focus:text-white hover:bg-blue-100 hover:text-blue-800 px-4 py-2 rounded-md'
                          }
                        >
                          All
                        </button>
                        <button
                          className={
                            'bg-white focus:bg-blue-800 focus:text-white hover:bg-blue-100 hover:text-blue-800 px-4 py-2 rounded-md'
                          }
                        >
                          Pending
                        </button>
                        <button
                          className={
                            'bg-white focus:bg-blue-800 focus:text-white hover:bg-blue-100 hover:text-blue-800 px-4 py-2 rounded-md'
                          }
                        >
                          Resolved
                        </button>
                      </div>
                    </div>
                    <div className={'mt-2'}>
                      {complaints.length > 0 ? (
                        <table className="table-auto w-full">
                          <tr className={'border-b border-gray-400'}>
                            <th className={'text-left p'}>Case No.</th>
                            <th className={'text-left p'}>Reporter</th>
                            <th className={'text-left p'}>Contact</th>
                            <th className={'text-left p'}>Status</th>
                            <th className={'text-left p'}>Type</th>
                            <th className={'text-left p'}>Subject</th>
                            <th className={'text-left p'}>Vehicle</th>
                          </tr>
                          <tbody>
                            {complaints.map((item, index) => (
                              <tr>
                                <td className={'py-2'}>{index + 1}</td>
                                <td className={'py-2'}>{item.user.name}</td>
                                <td className={'py-2'}>{item.user.phone}</td>
                                <td className={'py-2'}>
                                  {item.status === 'NOT RESOLVED' ? (
                                    <i
                                      className={
                                        'text-yellow-500 text-lg fas fa-exclamation-circle'
                                      }
                                    />
                                  ) : item.status === 'RESOLVED' ? (
                                    <i
                                      className={
                                        'text-green-600 text-lg fas fa-check-circle'
                                      }
                                    />
                                  ) : null}
                                </td>
                                <td className={'py-2'}>{item.type}</td>
                                <td className={'py-2'}>{item.subject}</td>
                                <td className={'py-2'}>
                                  {item.registrationNumber}
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
