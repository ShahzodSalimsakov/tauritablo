import { useEffect, useState } from "react";
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
import { listen } from "@tauri-apps/api/event";
import { resourceDir } from "@tauri-apps/api/path";
import { enable, disable, isEnabled } from "tauri-plugin-autostart-api";

const queryClient = new QueryClient();

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  const enableAutoStart = async () => {
    await enable();
  };

  const listenForBarcode = async () => {
    const resourceDirPath = await resourceDir();
    console.log("resourceDirPath", resourceDirPath);
    const barcode = await listen("barcode", (barcode) => {
      console.log("Barcode: ", barcode);
      if (barcode.payload) {
        let res = barcode.payload as string;
        if (res.length > 0) {
          console.log("is playing");
          let audio = new Audio(`${resourceDirPath}/bells.mp3`);
          audio.play();
        }
      }
    });
  };

  useEffect(() => {
    enableAutoStart();
    listenForBarcode();
  }, []);

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
