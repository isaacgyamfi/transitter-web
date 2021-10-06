import React, { Fragment, useContext, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Sidebar from "../../layouts/global/Sidebar";
// import { AuthContext } from '../../../contexts/AuthContext';
import { Redirect } from "react-router";
import SummaryAnalytics from "../../components/dashboard/SummaryAnalytics";
import axios from "axios";

export default function Dashboard() {
  //   const { state } = useContext(AuthContext);
  const [stats, setStats] = useState(null);

  const loadStatistics = async () => {
    const response = await axios.get(
      `${
        process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_DEV_API_BASE_URL
          : null
      }/stats`
    );
    return setStats(response.data.data);
  };

  useEffect(() => {
    loadStatistics();
  }, []);

  return (
    <Fragment>
      {/* {state.isAuth ? <Redirect to="/dashboard" /> : <Redirect to="/login" />} */}
      <div>
        <main className={"flex flex-col lg:flex-row"}>
          <Sidebar />
          <section className={"lg:w-full bg-gray-200 h-screen"}>
            <div
              className={
                "w-full px-5 py-5 lg:pl-72 lg:pt-10 lg:pr-10 bg-gray-200"
              }
            >
              <div className={"mb-5"}>
                <h3 className={"font-medium text-xl text-gray-500"}>
                  Dashboard
                </h3>
              </div>
              <div>{stats && <SummaryAnalytics stats={stats} />}</div>
              <div className={"flex flex-row"}>
                <div className={"w-1/2 p-2"}>
                  <div className={"rounded-md shadow bg-white p-5 mt-2"}>
                    <div>
                      <h3>Complaints</h3>
                    </div>
                    <Bar
                      data={{
                        labels: [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                        ],
                        datasets: [
                          {
                            label: "Number of Complaints",
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: ["rgba(30, 64, 175, 0.10)"],
                            borderColor: ["rgb(30, 64, 175)"],
                            borderWidth: 1,
                          },
                        ],
                      }}
                      options={{
                        scales: {
                          yAxes: [
                            {
                              ticks: {
                                beginAtZero: true,
                              },
                            },
                          ],
                        },
                      }}
                    />
                  </div>
                </div>
                <div className={"w-1/2 p-2"}>
                  <div className={"rounded-md shadow bg-white p-5 mt-2"}>
                    <div>
                      <h3>Taxis and Drivers</h3>
                    </div>
                    <Bar
                      data={{
                        labels: [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                        ],
                        datasets: [
                          {
                            label: "Number of Taxis",
                            data: [12, 19, 3, 5, 2, 3],
                            // backgroundColor: ['#FEF3C7'],
                            backgroundColor: ["#D97706"],
                            borderWidth: 1,
                          },
                          {
                            label: "Number of Drivers",
                            data: [12, 19, 3, 5, 2, 3],
                            // backgroundColor: ['rgba(30, 64, 175, 0.10)'],
                            backgroundColor: ["rgb(30, 64, 175)"],
                            borderWidth: 1,
                          },
                        ],
                      }}
                      options={{
                        scales: {
                          yAxes: [
                            {
                              ticks: {
                                beginAtZero: true,
                              },
                            },
                          ],
                        },
                      }}
                    />
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
