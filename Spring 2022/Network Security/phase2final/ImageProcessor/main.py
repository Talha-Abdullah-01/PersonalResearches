
from io import BytesIO
import base64
from PIL import Image

from dem import byte_data

from PIL import Image, ImageFile

ImageFile.LOAD_TRUNCATED_IMAGES = True

with open('broken.png', 'rb') as f:
    b = BytesIO()
    f.seek(15, 0)

    b.write(f.read())

    im = Image.open(b)
    im.load()