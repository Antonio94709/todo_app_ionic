import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/react";
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
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Global news in one place</IonCardSubtitle>
          <IonCardTitle>
            <h3>News Feed</h3>
          </IonCardTitle>
        </IonCardHeader>

        <IonCardContent className="grid grid-cols-4 gap-4 sm:grid-cols-1">
          {data.map((data) => (
            <div key={data.id}>
              <div class=" rounded-l-lg border-l-indigo-500 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.title}
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  {data.body}
                </p>
              </div>
            </div>
          ))}
        </IonCardContent>
      </IonCard>
    </>
  );
}

export default FetchAPI;
