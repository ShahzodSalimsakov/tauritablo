import React, { useState } from "react";
import { setSetting, syncSetting } from "../helpers/settings";

const SettingsModal = () => {
  const [soundPath, setSoundPath] = useState("");
  const [template, setTemplate] = useState("");
  console.log("soundPath", soundPath);

  // onkeydown ctrl + s
  onkeydown = (event: any) => {
    if (event.ctrlKey && event.key === "s") {
      event.preventDefault();
      settingsModal();
    }
  };

  const settingsModal = () => {
    document.getElementById("settingsModal")?.click();
  };
  const saveSettings = async (e: any) => {
    await setSetting("soundPath", soundPath);
    console.log("saved");
    await setSetting("template", template);
    // syncSetting();
    settingsModal();
    location.reload();
  };
  return (
    <>
      <input type="checkbox" id="settingsModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative max-w-xs">
          <label
            htmlFor="settingsModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h1 className="text-lg font-bold mb-3">Настройки</h1>
          <div className="mb-3">
            <div className="mb-3">Укажите путь звук для вызова клиента</div>
            <input
              type="text"
              placeholder="Укажите путь"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setSoundPath(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <select
              className="select select-bordered w-full max-w-xs"
              onChange={(e) => setTemplate(e.target.value)}
            >
              <option disabled selected>
                Выберите шаблон
              </option>
              <option value="les">Les Ailes</option>
              <option value="chopar">Chopar Pizza</option>
            </select>
          </div>
          <button className="btn btn-primary" onClick={(e) => saveSettings(e)}>
            Сохранить
          </button>
        </div>
      </div>
    </>
  );
};

export default SettingsModal;
