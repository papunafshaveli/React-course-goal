import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import goalsImg from "/assets/goals.jpg";
import CourseGoalList from "./components/CourseGoalList";

export type CourseGoalProps = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoalProps[]>([]);

  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoalProps = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn it in depth",
      };
      return [...prevGoals, newGoal];
    });
  };

  const handleDeleteGoals = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id != id));
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your course goals</h1>
      </Header>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoals} />
      <button onClick={handleAddGoal}>Add Goal</button>
    </main>
  );
}

export default App;
