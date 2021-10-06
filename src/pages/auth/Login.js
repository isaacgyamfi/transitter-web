import React from "react";

export default function Login() {
  return (
    <div className={"flex justify-center items-center h-screen bg-blue-400"}>
      <div className={"shadow-lg p-8 w-1/3 bg-gray-50"}>
        <div>
          <h3 className={"text-3xl font-bold"}>Log in</h3>
        </div>
        <div>
          <div className={"w-full py-2"}>
            <label className={"w-full"}>Email</label>
            <input
              className={
                "w-full bg-gray-200 focus:outline-none focus:ring-gray-200 p-3 mr-2"
              }
              type={"email"}
              name={"email"}
            />
          </div>
          <div className={"w-full py-2"}>
            <label className={"w-full"}>Password</label>
            <input
              className={
                "w-full bg-gray-200 focus:outline-none focus:ring-gray-200 p-3 mr-2"
              }
              type={"password"}
              name={"password"}
            />
          </div>
          <div className={"w-full mt-4"}>
            <button
              className={"bg-blue-900 text-white text-center w-full py-5"}
            >
              Login as an admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
