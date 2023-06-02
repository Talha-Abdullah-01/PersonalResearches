from io import BytesIO, StringIO
from pickle import BYTEARRAY8
from pickletools import bytes1
from tarfile import BLOCKSIZE
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from Crypto import Random
from PIL import Image
import os
import numpy as np
import random
import socket

def getKey(keysize):

    key = os.urandom(keysize)
    return key

def getIV(blocksize):

    iv = os.urandom(blocksize)
    return iv


#def image_encrypt(img, mode, iv, key):
    bImg = img.tobytes()
    BLOCK_SIZE = 16
    if mode == AES.MODE_ECB:
        cipher = AES.new(key, mode)
    else:
        cipher = AES.new(key, mode, iv)
    m = cipher.encrypt(pad(bImg, BLOCK_SIZE))
    enc_img = Image.frombytes('L', img.size, m, 'raw')
    return enc_img


def encrypt_image(filename, key, iv):

    BLOCKSIZE = 16
    encrypted_filename = "encrypted_" + filename

    with open(filename, "rb") as file1:
        data = file1.read()

        cipher = AES.new(key, AES.MODE_CBC, iv)
        ciphertext = cipher.encrypt(pad(data, BLOCKSIZE))

        with open(encrypted_filename, "wb") as file2:
            file2.write(ciphertext)

    return encrypted_filename


def decrypt_image(filename, key, iv):

    BLOCKSIZE = 16
    decrypted_filename = "decrypted_" + filename

    with open(filename, "rb") as file1:
        data = file1.read()

        cipher2 = AES.new(key, AES.MODE_CBC, iv)
        decrypted_data = unpad(cipher2.decrypt(data), BLOCKSIZE)

        with open(decrypted_filename, "wb") as file2:
            file2.write(decrypted_data)

    return decrypted_filename

#serverAddressPort = ("127.0.0.1", 20000)
#bufferSize = 151200
# Create a UDP socket at client side
#UDPClientSocket = socket.socket(family=socket.AF_INET, type=socket.SOCK_DGRAM)
# Send to server using created UDP socket


im=Image.open('download.jpg')
pixels=np.asarray(im)
ManipulatingP = np.empty_like(pixels)
ManipulatingP[:] = pixels
pixels1=np.empty_like(pixels)
pixels1[:]=pixels
finalP = np.empty_like(pixels)
finalP[:] = pixels
finalP1 = np.empty_like(pixels)
finalP1[:] = pixels
threshold=0.5

thresholdHolder=ManipulatingP.astype(np.float64)
for i in range(len(thresholdHolder)):
    randomVal=np.random.uniform(0.0,1.0)
    for j in range(len(thresholdHolder[i])):
        for z in range(3):
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

img=Image.fromarray(finalP)
img.save('BlockCipher.png')
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

#img.show()

secret = Image.open('BlockCipher.png')
 
#key = b'tDSqLEEBjSz8MF4z'
#iv = Random.new().read(AES.block_size)
KEYSIZE = 16
BLOCKSIZE = 16
key = getKey(KEYSIZE)
iv = getIV(BLOCKSIZE)
filename = "BlockCipher.png"

encrypted_filename = encrypt_image(filename, key, iv)
decrypted_filename = decrypt_image(encrypted_filename, key, iv)
