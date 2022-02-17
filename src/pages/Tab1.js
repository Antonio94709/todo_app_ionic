import {
  IonApp,
  IonItem,
  IonContent,
  IonCol,
  IonRow,
  IonGrid,
  IonButton,
  IonList,
  IonCard,
  IonCardContent,
  IonLabel,
} from "@ionic/react";

import "./Tab1.css";
import { useState } from "react";
import FetchAPI from "../components/API/FectAPI";
import axios from "axios";
import { useEffect } from "react";
import NavHeader from "../components/NavHeader";

const Tab1 = () => {
  const [tasks, setTask] = useState([]);
  const [item, setItem] = useState("");

  useEffect(() => {
    axios.get("https://todoappdatabase.herokuapp.com/get").then((response) => {
      setTask(response.data);
    }, []);
    // axios.get("http://localhost:4000/tasks").then((response) => {
    //   setTask(response.data);
    // });
  });

  function removeItemFu(id) {
    axios.delete(`https://todoappdatabase.herokuapp.com/delete/${id}`);
    // axios.delete(`http://localhost:4000/deleteTask/${taskid}`);
    // setTask(
    //   tasks.filter((task) => {
    //     return task != taskName;
    //   })
    // );
  }

  function addItemFu() {
    if (item !== "" && !tasks.includes(item)) {
      axios.post("https://todoappdatabase.herokuapp.com/insert", {
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
      <NavHeader />
      <IonContent className=" mx-auto text-center">
        {/* <IonFab vertical="top" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab> */}
        <IonCard className="p-4">
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
                <IonButton onClick={addItemFu}>
                  <IonLabel>Add Task</IonLabel>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
          {/* <IonList className="text-center">
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
          </IonList> */}
          <IonCardContent>
            <IonList>
              {tasks.map((tasks) => (
                <IonItem key={tasks._id}>
                  <IonLabel>{tasks.todotask}</IonLabel>
                  <IonButton
                    slot="end"
                    onClick={() => {
                      removeItemFu(tasks._id);
                    }}
                  >
                    Remove Task
                  </IonButton>
                </IonItem>
              ))}
            </IonList>
          </IonCardContent>
        </IonCard>

        <FetchAPI />
      </IonContent>
    </IonApp>
  );
};

export default Tab1;
