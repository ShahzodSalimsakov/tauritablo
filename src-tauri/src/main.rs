#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// use device_query::{DeviceQuery, DeviceState, Keycode};

use rdev::{listen, Event, EventType, Key};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn get_char(key: EventType) -> Option<char> {
    match key {
        EventType::KeyPress(Key::Num1) => Some('1'),
        EventType::KeyPress(Key::Num2) => Some('2'),
        EventType::KeyPress(Key::Num3) => Some('3'),
        EventType::KeyPress(Key::Num4) => Some('4'),
        EventType::KeyPress(Key::Num5) => Some('5'),
        EventType::KeyPress(Key::Num6) => Some('6'),
        EventType::KeyPress(Key::Num7) => Some('7'),
        EventType::KeyPress(Key::Num8) => Some('8'),
        EventType::KeyPress(Key::Num9) => Some('9'),
        EventType::KeyPress(Key::Num0) => Some('0'),
        _ => None,
    }
}

fn main() {

    // let device_state = DeviceState::new();0

    

    // let mut read_chars = String::new();
    // loop {
        // let keys: Vec<Keycode> = device_state.get_keys();
        // for key in keys.iter() {
        //     println!("Pressed key: {:?}", key);
        // }
    // }

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .plugin(tauri_plugin_window_state::Builder::default().build())
        .on_page_load(|app, _ev| {

    let mut read_chars = String::new();
            if let Err(error) = listen(move |event| {

                // match event.event_type {
                //     EventType::KeyPress(Key::Num0) => read_chars.push('0'),
                //     EventType::KeyPress(Key::Num1) => read_chars.push('1'),
                //     EventType::KeyPress(Key::Num2) => read_chars.push('2'),
                //     EventType::KeyPress(Key::Num3) => read_chars.push('3'),
                //     EventType::KeyPress(Key::Num4) => read_chars.push('4'),
                //     EventType::KeyPress(Key::Num5) => read_chars.push('5'),
                //     EventType::KeyPress(Key::Num6) => read_chars.push('6'),
                //     EventType::KeyPress(Key::Num7) => read_chars.push('7'),
                //     EventType::KeyPress(Key::Num8) => read_chars.push('8'),
                //     EventType::KeyPress(Key::Num9) => read_chars.push('9'),
                //     // EventType::KeyPress(Key::Return) => {
                //     //     println!("Barcode: {}", read_chars);
                //     //     &read_chars.clear();1234234
                //     // },
                //     _ => (),
                // }

                if let Some(c) = get_char(event.event_type) {
                    read_chars.push(c);
                }
                
                if event.event_type == EventType::KeyPress(Key::Return) {
                    println!("Barcode: {}", read_chars);
                    read_chars.clear();
                }
            }) {
    println!("Error: {:?}", error)
}
            ()
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
