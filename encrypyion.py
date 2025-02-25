from cryptography.fernet import Fernet

class Crypto:
   def __init__(self):
      self.key = Fernet.generate_key()
      self.f = Fernet(self.key)

   def encrypt(self,text):
      return self.f.encrypt(text.encode())

   def decrypt(self,text):
      return self.f.decrypt(text).decode()