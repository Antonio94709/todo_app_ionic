import {
  IonContent,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { useState } from "react";

import "./Tab3.css";
import NavHeader from "../components/NavHeader";

const Tab3: React.FC = () => {
  const [toppings, setToppings] = useState<string[]>([]);
  const [pets, setPets] = useState<string[]>(["bird", "dog"]);
  return (
    <IonPage>
      <NavHeader />
      <IonContent>
        <IonItem>
          <IonLabel>Toppings</IonLabel>
          <IonSelect
            value={toppings}
            multiple={true}
            cancelText="Nah"
            okText="Okay!"
            onIonChange={(e) => setToppings(e.detail.value)}
          >
            <IonSelectOption value="bacon">Bacon</IonSelectOption>
            <IonSelectOption value="olives">Black Olives</IonSelectOption>
            <IonSelectOption value="xcheese">Extra Cheese</IonSelectOption>
            <IonSelectOption value="peppers">Green Peppers</IonSelectOption>
            <IonSelectOption value="mushrooms">Mushrooms</IonSelectOption>
            <IonSelectOption value="onions">Onions</IonSelectOption>
            <IonSelectOption value="pepperoni">Pepperoni</IonSelectOption>
            <IonSelectOption value="pineapple">Pineapple</IonSelectOption>
            <IonSelectOption value="sausage">Sausage</IonSelectOption>
            <IonSelectOption value="Spinach">Spinach</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>Pets</IonLabel>
          <IonSelect
            multiple={true}
            value={pets}
            onIonChange={(e) => setPets(e.detail.value)}
          >
            <IonSelectOption value="bird">Bird</IonSelectOption>
            <IonSelectOption value="cat">Cat</IonSelectOption>
            <IonSelectOption value="dog">Dog</IonSelectOption>
            <IonSelectOption value="honeybadger">Honey Badger</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItemDivider>Your Selections</IonItemDivider>
        <IonItem>
          Toppings:{" "}
          {toppings.length
            ? toppings.reduce((curr, prev) => prev + ", " + curr, "")
            : "(none selected)"}
        </IonItem>
        <IonItem>
          Pets:{" "}
          {pets.length
            ? pets.reduce((curr, prev) => prev + ", " + curr, "")
            : "(none selected)"}
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
