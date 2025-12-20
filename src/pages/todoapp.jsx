import React, { useState } from "react";

export default function Todoapp() {
  const initialTasks = [
    {
      id: 1,
      todo: "Do something nice for someone you care about",
      completed: false,
      userId: 152,
    },
    {
      id: 2,
      todo: "Memorize a poem",
      completed: true,
      userId: 13,
    },
    {
      id: 3,
      todo: "Watch a classic movie",
      completed: true,
      userId: 68,
    },
    {
      id: 4,
      todo: "Watch a documentary",
      completed: false,
      userId: 84,
    },
    {
      id: 5,
      todo: "Invest in cryptocurrency",
      completed: false,
      userId: 163,
    },
    {
      id: 6,
      todo: "Contribute code or a monetary donation to an opensource software project",
      completed: false,
      userId: 69,
    },
    {
      id: 7,
      todo: "Solve a Rubik's cube",
      completed: true,
      userId: 76,
    },
    {
      id: 8,
      todo: "Bake pastries for yourself and neighbor",
      completed: true,
      userId: 198,
    },
    {
      id: 9,
      todo: "Go see a Broadway production",
      completed: false,
      userId: 7,
    },
    {
      id: 10,
      todo: "Write a thank you letter to an influential person in your life",
      completed: true,
      userId: 9,
    },
    {
      id: 11,
      todo: "Invite some friends over for a game night",
      completed: false,
      userId: 104,
    },
    {
      id: 12,
      todo: "Have a football scrimmage with some friends",
      completed: false,
      userId: 32,
    },
    {
      id: 13,
      todo: "Text a friend you haven't talked to in a long time",
      completed: true,
      userId: 2,
    },
    {
      id: 14,
      todo: "Organize pantry",
      completed: false,
      userId: 46,
    },
    {
      id: 15,
      todo: "Buy a new house decoration",
      completed: true,
      userId: 105,
    },
    {
      id: 16,
      todo: "Plan a vacation you've always wanted to take",
      completed: true,
      userId: 162,
    },
    {
      id: 17,
      todo: "Clean out car",
      completed: false,
      userId: 71,
    },
    {
      id: 18,
      todo: "Draw and color a Mandala",
      completed: true,
      userId: 6,
    },
    {
      id: 19,
      todo: "Create a cookbook with favorite recipes",
      completed: true,
      userId: 53,
    },
    {
      id: 20,
      todo: "Bake a pie with some friends",
      completed: false,
      userId: 162,
    },
    {
      id: 21,
      todo: "Create a compost pile",
      completed: false,
      userId: 13,
    },
    {
      id: 22,
      todo: "Take a hike at a local park",
      completed: true,
      userId: 37,
    },
    {
      id: 23,
      todo: "Take a class at local community center that interests you",
      completed: true,
      userId: 65,
    },
    {
      id: 24,
      todo: "Research a topic interested in",
      completed: true,
      userId: 130,
    },
    {
      id: 25,
      todo: "Plan a trip to another country",
      completed: false,
      userId: 140,
    },
    {
      id: 26,
      todo: "Improve touch typing",
      completed: false,
      userId: 178,
    },
    {
      id: 27,
      todo: "Learn Express.js",
      completed: false,
      userId: 194,
    },
    {
      id: 28,
      todo: "Learn calligraphy",
      completed: false,
      userId: 80,
    },
    {
      id: 29,
      todo: "Have a photo session with some friends",
      completed: true,
      userId: 91,
    },
    {
      id: 30,
      todo: "Go to the gym",
      completed: true,
      userId: 142,
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;

    setTasks([
      {
        id: Date.now(),
        todo: newTask,
        completed: false,
      },
      ...tasks,
    ]);

    setNewTask("");
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <div className="flex mb-4">
        <input
          type="text"
          className="flex-1 p-2 border rounded"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button
          onClick={addTask}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center mb-2">
            <span
              className={`flex-1 cursor-pointer ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
              onClick={() => toggleTaskCompletion(task.id)}
            >
              {task.todo}
            </span>

            <button
              onClick={() => deleteTask(task.id)}
              className="ml-4 p-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
