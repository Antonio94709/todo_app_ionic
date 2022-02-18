import { IonContent, IonPage } from "@ionic/react";
import NavHeader from "../components/NavHeader";

import "./Tab2.css";
import FetchSingleAPI from "../components/API/FetchSingleAPI";

const Tab2 = () => {
  return (
    <IonPage>
      <IonContent>
        <NavHeader />
        <FetchSingleAPI />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
