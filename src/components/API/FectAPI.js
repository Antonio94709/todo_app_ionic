import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
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
      {data.map((data) => (
        <IonCard>
          <IonCardHeader key={data.id}>
            <IonCardTitle>{data.title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>{data.body}</IonCardContent>
        </IonCard>
      ))}
    </>
  );
}

export default FetchAPI;
