import { IonContent, IonPage } from "@ionic/react";

import "./Tab2.css";
import FetchSingleAPI from "../components/API/FetchSingleAPI";
import Navheader from "../components/NavHeader";

const Tab2 = () => {
  return (
    <IonPage>
      <IonContent>
        <Navheader />
        <FetchSingleAPI />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
