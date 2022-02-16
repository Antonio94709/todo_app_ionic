import { IonContent, IonPage } from "@ionic/react";

import "./Tab3.css";
import NavHeader from "../components/NavHeader";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <NavHeader />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
