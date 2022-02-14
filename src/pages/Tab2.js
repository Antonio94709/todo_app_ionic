import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Tab2.css";
import FetchSingleAPI from "../components/API/FetchSingleAPI";

const Tab2 = () => {
  return (
    <IonPage>
      <IonHeader className="text-center">
        <IonToolbar>
          <IonTitle>Article</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <FetchSingleAPI />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
