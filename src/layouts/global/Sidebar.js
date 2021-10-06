import { useContext } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const router = useLocation();
  //   const { state, logout } = useContext(AuthContext);
  return (
    <section
      className={
        "lg:block w-full lg:w-2/12 bg-white h-auto lg:min-h-screen shadow-xl fixed"
      }
    >
      <div className={"w-full p-0 lg:p-4"}>
        <div className={"p-2 flex flex-row items-start"}>
          <div>
            <h2 className={"font-bold text-2xl text-gray-500"}>Transitter</h2>
          </div>
        </div>
      </div>
      <div
        className={
          "w-full my-3 lg:my-5 overflow-auto flex flex-row lg:flex-col justify-between items-start"
        }
      >
        <ul className="w-full">
          <Link to={"/"}>
            <span>
              <li
                className={`w-full flex flex-row items-center px-3 lg:px-8 py-3 ${
                  router.pathname === "/" ? "bg-blue-100" : "hover:bg-blue-200"
                } text-gray-500`}
              >
                <span className={"mr-5"}>
                  <i className={"fas fa-columns text-xl"} />
                </span>
                <h2 className={"text-base"}>Dashboard</h2>
              </li>
            </span>
          </Link>
          <Link to={"/dashboard/stations"}>
            <span>
              <li
                className={`w-full flex flex-row items-center px-3 lg:px-8 py-3 ${
                  router.pathname === "/dashboard/stations"
                    ? "bg-blue-100"
                    : "hover:bg-blue-200"
                } text-gray-500`}
              >
                <span className={"mr-5"}>
                  <i className={"fas fa-building text-xl"} />
                </span>
                <h2 className={"text-base"}>Stations</h2>
              </li>
            </span>
          </Link>
          <Link to={"/dashboard/drivers"}>
            <span>
              <li
                className={`flex flex-row items-center px-3 lg:px-8 py-3 ${
                  router.pathname === "/dashboard/drivers"
                    ? "bg-blue-100"
                    : "hover:bg-blue-200"
                } text-gray-500`}
              >
                <span className={"mr-4"}>
                  <i className={"fas fa-users text-xl"} />
                </span>
                <h2 className={"text-base"}>Drivers</h2>
              </li>
            </span>
          </Link>
          <Link to={"/dashboard/taxis"}>
            <span>
              <li
                className={`flex flex-row items-center px-3 lg:px-8 py-3 ${
                  router.pathname === "/dashboard/taxis"
                    ? "bg-blue-100"
                    : "hover:bg-blue-200"
                } text-gray-500`}
              >
                <span className={"mr-5"}>
                  <i className={"fas fa-taxi text-2xl"} />
                </span>
                <h2 className={"text-base"}>Taxis</h2>
              </li>
            </span>
          </Link>
          <Link to={"/dashboard/complaints"}>
            <span>
              <li
                className={`flex flex-row items-center px-3 lg:px-8 py-3 ${
                  router.pathname === "/dashboard/complaints"
                    ? "bg-blue-100"
                    : "hover:bg-blue-200"
                } text-gray-500`}
              >
                <span className={"mr-5"}>
                  <i className={"fas fa-user-shield text-xl"} />
                </span>
                <h2 className={"text-base"}>Complaints</h2>
              </li>
            </span>
          </Link>
        </ul>
        <button
          onClick={async () => {
            // logout();
          }}
        >
          <li
            className={`flex flex-row items-center px-3 lg:px-8 py-3 text-gray-500`}
          >
            <span className={"mr-5"}>
              <i className={"fas fa-door-open text-2xl"} />
            </span>
            <h2 className={"text-base"}>Logout</h2>
          </li>
        </button>
      </div>
    </section>
  );
}
