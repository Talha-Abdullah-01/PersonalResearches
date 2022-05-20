from io import BytesIO, StringIO
from pickle import BYTEARRAY8
from pickletools import bytes1
from Crypto.Cipher import AES
from PIL import Image
import os
import numpy as np
import random
import socket


serverAddressPort = ("127.0.0.1", 20000)
bufferSize = 151200
# Create a UDP socket at client side
UDPClientSocket = socket.socket(family=socket.AF_INET, type=socket.SOCK_DGRAM)
# Send to server using created UDP socket


im=Image.open('download.jpg')
pixels=np.asarray(im)
ManipulatingP = np.empty_like(pixels)
ManipulatingP[:] = pixels
finalP = np.empty_like(pixels)
finalP[:] = pixels
threshold=0.5

thresholdHolder=ManipulatingP.astype(np.float64)
for i in range(len(thresholdHolder)):
    for j in range(len(thresholdHolder[i])):
            for z in range(3):
                randomVal=np.random.uniform(0.0,1.0)
                thresholdHolder[i][j][z]=randomVal
        
#print(thresholdHolder)

manipulatingPixels=ManipulatingP
for i in range(len(manipulatingPixels)):
    for j in range(len(manipulatingPixels[i])):
        for z in range(3):
            if(thresholdHolder[i][j][z]<threshold):
                manipulatingPixels[i][j][z]=100
            else:
                manipulatingPixels[i][j][z]=0

#print (manipulatingPixels)

for i in range(len(pixels)):
    for j in range(len(pixels[i])):
        for z in range(3):
            valueObtained=pixels[i][j][z]+manipulatingPixels[i][j][z]
            if(valueObtained>255):
                valueObtained=0
            finalP[i][j][z]=valueObtained

# msgFromClient = finalP.tobytes
# Send this across the network

# UDPClientSocket.sendto(byte1, serverAddressPort)

#Once this is recieved on the server

#The Actual transmitter and Reciever was not shown as the error is induced on the side of Transmitter and these errors were taken in place of the network errors.
#Also considering no loss was found on localhost to localhost, implementation of Transmitter and Reciever was not done here

#localIP = "127.0.0.1"
#localPort = 20000
#bufferSize = 151200
#msgFromServer = "Hello UDP Transmitter"
#bytesToSend = str.encode(msgFromServer)
# Create a datagram socket
#UDPServerSocket = socket.socket(family=socket.AF_INET, type=socket.SOCK_DGRAM)
# Bind to address and ip
#UDPServerSocket.bind((localIP, localPort)


#Recreating the image

img=Image.fromarray(finalP)
img.save('StreamCipher.png')
img.show()


