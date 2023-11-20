import { useState } from "react";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
import goalsImg from "/assets/goals.jpg";

export type CourseGoalProps = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoalProps[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoalProps = {
        id: Math.random(),
        title: goal,
        description: summary,
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
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoals} />
    </main>
  );
}

export default App;
