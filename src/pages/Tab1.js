import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonContent,
  IonCol,
  IonRow,
  IonGrid,
  IonButton,
  IonList,
  IonButtons,
} from "@ionic/react";

import "./Tab1.css";
import { useState } from "react";
import FetchAPI from "../components/API/FectAPI";
import axios from "axios";
import { useEffect } from "react";

const Tab1 = () => {
  const [tasks, setTask] = useState([]);
  const [item, setItem] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/get").then((response) => {
      setTask(response.data);
    });
    // axios.get("http://localhost:4000/tasks").then((response) => {
    //   setTask(response.data);
    // });
  });

  function removeItemFu(id) {
    axios.delete(`http://localhost:5000/delete/${id}`);
    // axios.delete(`http://localhost:4000/deleteTask/${taskid}`);
    // setTask(
    //   tasks.filter((task) => {
    //     return task != taskName;
    //   })
    // );
  }

  function addItemFu() {
    if (item !== "" && !tasks.includes(item)) {
      axios.post("http://localhost:5000/insert", {
        todotask: item,
        // axios.post("http://localhost:4000/addTask", {
        //   task: item,
      });
      // let temp = tasks;
      // temp.push(item);
      // setTask(temp);
      setItem("");
    }
  }

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo app with ionic</IonTitle>
          <IonButtons></IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className=" mx-auto text-center">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem className="m-4 bg-grey rounded p-5 text-center">
                {/* i didn't us ionlabels here ecause it did allow tme to display the entered information inthe list when add task was clicked. According to stack overflow there aren't any solutions it seems */}
                <input
                  value={item}
                  placeholder="Add Task"
                  onChange={(e) => {
                    setItem(e.target.value);
                  }}
                  className="w-full rounded p-4 text-gray-500 mr-2 rounded text-center color-black"
                ></input>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton onClick={addItemFu}>Add Task</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList className="text-center">
          {tasks.map((tasks) => {
            return (
              <div className="text-center">
                <IonItem
                  key={tasks._id}
                  className="w-full border-t p-3 text-black text-xl"
                >
                  {tasks.todotask}
                </IonItem>
                <IonButton
                  type="button"
                  onClick={() => {
                    removeItemFu(tasks._id);
                  }}
                >
                  Remove Task
                </IonButton>
              </div>
            );
          })}
        </IonList>
        <FetchAPI />
      </IonContent>
    </IonApp>
  );
};

export default Tab1;
