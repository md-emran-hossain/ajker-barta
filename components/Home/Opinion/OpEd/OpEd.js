import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const OpEd = () => {
  return (
    <div className="container xl mx-auto">
      <div className="flex items-center justify-start mt-5 mb-3">
        <h1 className='py-2 text-xl cursor-pointer font-medium text-blue-900'>Opinion </h1><IoIosArrowForward className='text-red-600 mt-1' />
      </div>
      <div className="px-5 grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 grid-rows-1 gap-0">
        <div>
          <div
            className="max-w-sm mx-auto rounded border-solid border-2 border-inherit py-6"
            style={{ height: "420px" }}
          >
            <span
              className="font-bold px-2 text-xl mb-2 mr-10 bg-blue-900 text-white	"
              style={{ marginLeft: "-25px", marginTop: "20px" }}
            >
              Diplomacy or justice to{" "}
            </span>{" "}
            <br></br>
            <span
              className="font-bold px-2 text-xl mb-2 mr-10 bg-blue-900 mt-7 text-white"
              style={{ marginLeft: "-25px" }}
            >
              tackle the sanctions?{" "}
            </span>
            <div className="px-6 py-4 my-10">
              <p className="text-gray-700 text-base">
                That means the government is taking the allegations of human
                rights violations as mere propaganda in the international arena
                and feels no need to address the issue, or to improve the state
                of human ...
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Kamal Ahmed
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div>
            <div className="sm:flex sm:items-center  py-4">
              <img
                className="block h-14 sm:h-14 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
                src="https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4"
                alt=""
              />
              <div className="text-center sm:text-left sm:flex-grow">
                <div className="mb-4">
                  <p className="text-2xl pb-3 leading-tight font-medium tracking-wider uppercase">
                    No lobbyist to speak for the people
                  </p>
                  <span className="text-sm leading-tight  text-grey-dark border-t-4 border-inherit">
                    Sohrab Hassan.
                  </span>
                </div>
                <hr />
              </div>
            </div>
          </div>

          <div>
            <div className="sm:flex sm:items-center  py-4">
              <img
                className="block h-14 sm:h-14 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
                src="https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4"
                alt=""
              />
              <div className="text-center sm:text-left sm:flex-grow">
                <div className="mb-4">
                  <p className="text-2xl pb-3 leading-tight font-medium tracking-wider uppercase">
                    No lobbyist to speak for the people
                  </p>
                  <span className="text-sm leading-tight  text-grey-dark border-t-4 border-inherit">
                    Sohrab Hassan.
                  </span>
                </div>
                <hr />
              </div>
            </div>
          </div>

          <div>
            <div className="sm:flex sm:items-center  py-4">
              <img
                className="block h-14 sm:h-14 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
                src="https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4"
                alt=""
              />
              <div className="text-center sm:text-left sm:flex-grow">
                <div className="mb-4">
                  <p className="text-2xl pb-3 leading-tight font-medium tracking-wider uppercase">
                    No lobbyist to speak for the people
                  </p>
                  <span className="text-sm leading-tight  text-grey-dark border-t-4 border-inherit">
                    Sohrab Hassan.
                  </span>
                </div>
                <hr />
              </div>
            </div>
          </div>

          <div>
            <div className="sm:flex sm:items-center  py-4">
              <img
                className="block h-14 sm:h-14 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
                src="https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4"
                alt=""
              />
              <div className="text-center sm:text-left sm:flex-grow">
                <div className="mb-4">
                  <p className="text-2xl pb-3 leading-tight font-medium tracking-wider uppercase">
                    No lobbyist to speak for the people
                  </p>
                  <span className="text-sm leading-tight  text-grey-dark border-t-4 border-inherit">
                    Sohrab Hassan.
                  </span>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpEd;
