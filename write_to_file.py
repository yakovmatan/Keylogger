import time
import json
from time import localtime

class WriteToFile:
    def __init__(self, data="", dic=None):
        if dic is None:
            dic = {}
        self.data = data
        self.dic = dic


    @staticmethod
    def timer_hours():
        return time.strftime('%H:%M', localtime())

    @staticmethod
    def timer_days():
        return time.strftime('%d-%m-%y', localtime())

    def is_time(self):
        return self.timer_hours() == "23:59"

    def enter_to_dic(self):
        if self.is_time():
            self.dic.clear()
        if self.timer_hours() in self.dic:
            self.dic[self.timer_hours()] += self.data
        else:
            self.dic[self.timer_hours()] = self.data
        return self.dic

    def write_to_json_file(self):
        json_data = json.dumps(self.enter_to_dic(), indent=4 , ensure_ascii=False)
        with open(f"{self.timer_days()}.json", "w" ,encoding='utf-8') as file:
            file.write(json_data)


    def write_to_file(self):
        with open(f"{self.timer_days()}.txt", "a" , encoding='utf-8') as file:
            file.write(f"   ***{self.timer_hours()}*** \n {self.data}\n")

if __name__ == '__main__':
    WriteToFile()