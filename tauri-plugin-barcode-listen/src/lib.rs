use tauri::{plugin::{Builder, TauriPlugin}, Runtime};
use rdev::{listen, Event, EventType, Key};

fn callback(event: Event) {
    
    if event.event_type == EventType::KeyPress(Key::KeyA) {
        println!("Key pressed: {:?}", event);
    }

    // match event.event_type {
    //     Some(EventType::KeyPress(Key::KeyA)) => println!("Key 1 pressed"),
    // }
}

/// Initializes the plugin.
pub fn init<R: Runtime>() -> TauriPlugin<R> {
  Builder::new("barcode-listen").build()
}
