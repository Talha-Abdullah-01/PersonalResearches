import socket

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(('localhost', 1000))
file = open('qatar-flag-independence.jpg', 'rb')
image_parts = file.read(2048)

while image_parts:
    client.send(image_parts)
    image_parts = file.read(2048)

file.close()
client.close()