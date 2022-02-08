import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
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
      <IonCard>
        <IonCardHeader key={data.id}>
          <IonCardTitle>{data.title}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>{data.body}</IonCardContent>
      </IonCard>
    </>
  );
}

export default FetchSingleAPI;
