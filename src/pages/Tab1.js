import { IonApp, IonContent } from "@ionic/react";

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

        <div className="bg-blue-100 max-w-full mx-8 my-8  p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 place-content-center">
          <div className="place-content-center max-w-full">
            <div className="mb-6">
              <input
                type="text"
                id="large-input"
                onChange={(e) => {
                  setItem(e.target.value);
                }}
                value={item}
                className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
                placeholder="Add Task"
              />
              <button
                type="button"
                onClick={addItemFu}
                className="mx-8 my-8 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
              >
                Add Task
              </button>
            </div>
            <div className="bg-white rounded-lg my-6 ">
              {tasks.map((tasks) => (
                <div
                  key={tasks._id}
                  className="border-l-4 border-l-blue-400 flex place-content-center my-2 md:border-b-4 border-b-blue-400"
                >
                  <p className="mx-2 my-2 pt-2">{tasks.todotask}</p>
                  <button
                    type="button"
                    onClick={() => {
                      removeItemFu(tasks._id);
                    }}
                    className="mx-2 my-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
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
