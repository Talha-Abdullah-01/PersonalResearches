from PIL import Image
import os
import numpy as np
import random

im=Image.open('download.jpg')
pixels=np.asarray(im)
ManipulatingP = np.empty_like(pixels)
ManipulatingP[:] = pixels
finalP = np.empty_like(pixels)
finalP[:] = pixels
threshold=0.0000001

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


print(finalP)
img=Image.fromarray(finalP)
img.save('my8.png')
img.show()
