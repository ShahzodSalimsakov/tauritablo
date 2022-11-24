import { useEffect, useState, Fragment } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
// import "./App.css";
import LesTemplate from "./components/LesTemplate";
import ChoparTemplate from "./components/ChoparTemplate";
import GetOrders from "../api/getOrders";
import {
  useQuery,
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { listen } from "@tauri-apps/api/event";
import { resourceDir } from "@tauri-apps/api/path";
import {
  getSetting,
  getAllSettings,
  initSetting,
} from "../src/helpers/settings";
import SettingsModal from "./components/SettingsModal";
// import { enable, disable, isEnabled } from "tauri-plugin-autostart-api";

const queryClient = new QueryClient();

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [soundPathValue, setSoundPathValue] = useState("");
  const [templateValue, setTemplateValue] = useState("");

  const enableAutoStart = async () => {
    // await enable();
  };

  let [isOpen, setIsOpen] = useState(false);

  const listenForBarcode = async () => {
    const resourceDirPath = await resourceDir();
    console.log("resourceDirPath", resourceDirPath);
    const barcode = await listen("barcode", (barcode) => {
      console.log("Barcode: ", barcode);
      if (barcode.payload) {
        let res = barcode.payload as string;
        if (res.length > 0) {
          console.log("is playing");
          let audio = new Audio(`/bells.wav`);
          audio.play();
        }
      }
    });
  };

  const getSettings = async () => {
    try {
      await initSetting();
      const soundPath = await getSetting("soundPath");
      const template = await getSetting("template");
      console.log("soundPath", soundPath);
      setSoundPathValue(soundPath);
      setTemplateValue(template);
      const allSettings = await getAllSettings();
      console.log("allSettings", allSettings);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    enableAutoStart();
    listenForBarcode();
    getSettings();
  }, []);
  console.log(templateValue);
  return (
    <div className=" ">
      <QueryClientProvider client={queryClient}>
        {templateValue.length > 0 && (
          <GetOrders
            soundPathValue={soundPathValue}
            templateValue={templateValue}
          />
        )}
        {!templateValue.length && (
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold text-black">
                Укажите шаблон в настройках. Нажмите Ctrl + S
              </h1>
            </div>
          </div>
        )}
        <SettingsModal />
      </QueryClientProvider>
    </div>
  );
}

export default App;
