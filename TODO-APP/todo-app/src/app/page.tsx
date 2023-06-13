"use client";

import Image from "next/image";
import { useState } from "react";
import { TaskObject } from "./models/model";
import { v4 as uuid } from "uuid";

const Home: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [task, setTask] = useState<TaskObject[]>([]);

  const addTask = () => {
    setTask([{ id: uuid(), value: value, done: false }, ...task]);
    setValue("");
  };

  const taskDone = (id: string) => {
    const updatedTask = task.map((tasks) =>
      tasks.id === id ? { ...tasks, done: !tasks.done } : tasks
    );
    setTask(updatedTask);
  };

  return (
    <>
      <header className="bg-slate-950 p-4">
        <h1 className="text-3xl">Todos</h1>
      </header>
      <main className="p-4">
        <input
          type="text"
          placeholder="Enter your Task"
          className="p-2 mr-5 text-slate-950 rounded"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          type="button"
          className="border rounded p-2"
          onClick={() => addTask()}
        >
          Add Todo
        </button>
      </main>
      <ul className="p-4 ">
        {task.map((tasks) => {
          return (
            <li
              onClick={() => taskDone(tasks.id)}
              className={`text-3xl cursor-pointer ml-5 mb-5 ${
                tasks.done ? "line-through" : "no-underline"
              }`}
            >
              {tasks.value}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
