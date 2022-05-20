import socket
# Creating a server for TCP Connection
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

server.bind(('localhost', 1000))
# localhost = 127.0.0.1
server.listen()
# Server can Accept and listen to clients

# accept clients
client_socket, client_address = server.accept()

# Saving the image after receiving from the client
file = open('received_image.jpg', "wb")
# Receive packets from the client
# Receives a stream of data (stream cipher)
packet = client_socket.recv(2048)

# Receive the image as a whole
while packet:
    file.write(packet)
    packet = client_socket.recv(2048)

file.close()
client_socket.close()
