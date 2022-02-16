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

        <IonCardContent className="">
          {data.map((data) => (
            <IonCard className="rounded-l-lg border-l-indigo-500">
              <IonCardHeader key={data.id}>
                <IonCardTitle>{data.title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{data.body}</IonCardContent>
            </IonCard>
          ))}
        </IonCardContent>
      </IonCard>
    </>
  );
}

export default FetchAPI;
