import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
// import "./App.css";
import LesTemplate from "../components/LesTemplate";
import ChoparTemplate from "../components/ChoparTemplate";
import GetOrders from "../api/getOrders";
import {
  useQuery,
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <GetOrders />
      </QueryClientProvider>
      {/* <LesTemplate /> */}
      {/* <ChoparTemplate /> */}
    </div>
  );
}

export default App;
