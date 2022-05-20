import socket

client = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

file = open('qatar-flag-260nw-107328506.jpg', 'rb')
image_parts = file.read(2048)

while image_parts:
    client.sendto(image_parts, ('localhost', 1005))
    image_parts = file.read(2048)

file.close()