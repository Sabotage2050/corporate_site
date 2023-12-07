from PIL import Image

img_name = "public/forklift_tan_4.jpg"
im = Image.open(img_name)
print(im.format,im.size,im.mode)

img_resize = im.resize((1024,768))
img_resize.save(img_name)