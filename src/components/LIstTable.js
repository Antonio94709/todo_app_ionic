import { useEffect, useState } from "react";
import axios from "axios";
import {
  IonButton,
  IonItem,
  IonLabel,
  IonCard,
  IonCardContent,
  IonIcon,
  IonList,
  IonInput,
} from "@ionic/react";

import { PhoneIcon } from "@heroicons/react/outline";

export default function Example() {
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
    <div>
      {/* <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tasks.map((tasks) => (
                    <tr key={tasks._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900"></div>
                            <div className="text-sm text-gray-500"></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {tasks.todotask}
                        </div>
                        <div className="text-sm text-gray-500"></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <IonButton
                          type="button"
                          onClick={() => {
                            removeItemFu(tasks._id);
                          }}
                        >
                          Remove Task
                        </IonButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
      <IonCard>
        <IonItem>
          <IonIcon icon={PhoneIcon} slot="start" />

          <IonInput
            placeholder="Add task"
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          ></IonInput>
          <IonButton fill="outline" slot="end">
            Add Task
          </IonButton>
        </IonItem>

        <IonCardContent className="text-center">
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
    </div>
  );
}
