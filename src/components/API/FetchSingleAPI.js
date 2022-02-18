import React, { useEffect, useState } from "react";

function FetchSingleAPI() {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
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
      <div
        key={data.id}
        class="mx-8 my-8 bg-blue-400 max-w-full flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-full hover:bg-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full h-96 rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/15/44/netflix-vr.jpg"
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.title}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {data.body}
          </p>
        </div>
      </div>
    </>
  );
}

export default FetchSingleAPI;
