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
import { appDataDir } from "@tauri-apps/api/path";
// import { enable, disable, isEnabled } from "tauri-plugin-autostart-api";
import { checkUpdate, installUpdate } from "@tauri-apps/api/updater";
import { relaunch } from "@tauri-apps/api/process";

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
    const appDataDirPath = await appDataDir();
    const resourceDirPath = await resourceDir();
    console.log("resourceDirPath", resourceDirPath);
    const barcode = await listen("barcode", (barcode) => {
      console.log("Barcode: ", barcode);
      if (barcode.payload) {
        let res = barcode.payload as string;
        if (res.length > 0) {
          console.log(appDataDirPath);
          console.log("is playing");
          let audio = new Audio(`src/music/bells.wav`);
          audio.play();
        }
      }
    });
  };

  const getSettings = async () => {
    try {
      await initSetting();
      console.log("davr");
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

  const updateCheck = async () => {
    try {
      const { shouldUpdate, manifest } = await checkUpdate();
      if (shouldUpdate) {
        // display dialog
        await installUpdate();
        // install complete, restart the app
        await relaunch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    enableAutoStart();
    listenForBarcode();
    getSettings();
    updateCheck();
  }, []);
  console.log(templateValue);
  return (
    <div className=" ">
      <QueryClientProvider client={queryClient}>
        {templateValue.length > 0 && (
          <GetOrders templateValue={templateValue} />
        )}
        {!templateValue.length && (
          <div className="flex h-screen flex-col items-center justify-center">
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
