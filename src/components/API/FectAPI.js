import React, { useEffect, useState } from "react";

function FetchAPI() {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };
  useEffect(() => {
    apiGet();
  }, []);
  return (
    <>
      <div className="bg-blue-100 max-w-full mx-8 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div>
          <img
            className=" rounded-t-lg"
            src="https://thumbs.dreamstime.com/b/planet-earth-globe-view-space-showing-realistic-earth-surface-world-map-as-outer-space-point-view-elements-211900228.jpg"
            alt=""
          />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Welcome to our news feed
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            All the worlds news in one place
          </p>
          <div className="mx-8 md:grid grid-cols-4 gap-4">
            {data.map((data) => (
              <div key={data.id}>
                <div className="my-8 bg-blue-50 rounded-l-lg border-l-4 border-l-blue-400 block p-6 max-w-sm bg-white  border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {data.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FetchAPI;
