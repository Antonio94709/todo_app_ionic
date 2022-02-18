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

        <div className="bg-blue-100 max-w-full mx-8 my-8  p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div>
            <div class="mb-6">
              <input
                type="text"
                id="large-input"
                onChange={(e) => {
                  setItem(e.target.value);
                }}
                value={item}
                class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
                placeholder="Add Task"
              />
              <button
                type="button"
                onClick={addItemFu}
                class="mx-8 my-8 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
              >
                Add Task
              </button>
            </div>
            <div className="place-content-center">
              {tasks.map((tasks) => (
                <div
                  key={tasks._id}
                  className="place-content-center flex text-center mx-8 my-8 max-w-full rounded-full bg-white p-1"
                >
                  <h3 className="m-3 bg-blue-100 px-5 py-2.5 rounded-full">
                    {tasks.todotask}
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      removeItemFu(tasks._id);
                    }}
                    class="m-2 mr-3 p-3 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Remove Task
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <FetchAPI />
      </IonContent>
    </IonApp>
  );
};

export default Tab1;
