import { TodoList } from "@/components/TodoList";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <TodoList />
    </div>
  );
}
