import Image from "next/image";
import Form from "@/app/components/Form";
import TodoList from "@/app/components/TodoList";

export default function ServerComponent() {
  async function myAction() {
    "use server";
  }
  return (
   <div>
     <Form/>
     <TodoList/>
   </div>
  );
}
