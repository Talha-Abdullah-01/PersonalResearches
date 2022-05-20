import socket
# Creating a server for UDP Connection
server = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

server.bind(('localhost', 1005))
# localhost = 127.0.0.1

# Saving the image after receiving from the client
file = open('received_image.jpg', "wb")
# Receive packets from the client
# Receives a stream of data (stream cipher)
packet = server.recv(2048)

# Receive the image as a whole
while packet:
    file.write(packet)
    packet = server.recv(2048)

file.close()