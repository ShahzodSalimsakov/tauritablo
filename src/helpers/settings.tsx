import { SettingsManager, getAll, set, get } from "tauri-settings";
type Schema = {
  soundPath: string;
  template: string;
};

const settingsManager = new SettingsManager<Schema>({
  // defaults
  soundPath: "",
  template: "",
});

export const initSetting = async () => {
  await settingsManager.initialize();
};

export const getSetting = async (key: keyof Schema) => {
  console.log("key", key);
  return settingsManager.get(key);
};

export const setSetting = async (key: keyof Schema, value: any) => {
  // try {
  console.log("key", key);
  console.log("value", value);
  // await set(key, value);
  console.log("davr");
  return settingsManager.set(key, value);
  // } catch (error) {
  //   console.log("error", error);
  // }
};

export const getAllSettings = async () => {
  return await getAll();
};

export const syncSetting = async () => {
  return await settingsManager.syncCache();
};
