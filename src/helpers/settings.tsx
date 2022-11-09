import { SettingsManager } from "tauri-settings";
type Schema = {
  soundPath: string;
  template: string;
};

const settingsManager = new SettingsManager<Schema>(
  {
    // defaults
    soundPath: "",
    template: "",
  },
  {
    // options
    fileName: "customization-settings",
  }
);

export const initSetting = async () => {
  await settingsManager.initialize();
};

export const getSetting = async (key: keyof Schema) => {
  return await settingsManager.get(key);
};

export const setSetting = async (key: keyof Schema, value: any) => {
  return await settingsManager.set(key, value);
};
