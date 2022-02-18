import { IonContent, IonPage } from "@ionic/react";

import "./Tab2.css";
import FetchSingleAPI from "../components/API/FetchSingleAPI";

const Tab2 = () => {
  return (
    <IonPage>
      <IonContent>
        <FetchSingleAPI />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
