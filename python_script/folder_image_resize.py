from PIL import Image


import os
from glob import glob
import pandas as pd
import csv
import re
from natsort import natsorted


fork_kind = "battery"
data = []

base_dir = os.path.join(os.getcwd(), f"public/{fork_kind}")
sorted_image_dir_list = natsorted(os.listdir(os.path.join(os.getcwd(), f"public/{fork_kind}")))
sorted_image_file_list = [os.listdir(os.path.join(base_dir, dir)) for dir in sorted_image_dir_list]

# sorted_image_dir_listとsorted_image_file_listを使用して、画像のリサイズを行う
# 画像のリサイズは、640x480にする
# 画像のリサイズは、python_script/folder_image_resize.pyを参考にする

for i, file in enumerate(sorted_image_file_list):
    for j in range(len(file)):
        img_name = f"{base_dir}/{sorted_image_dir_list[i]}/{file[j]}"
        im = Image.open(img_name)
        print(im.format,im.size,im.mode)
        img_resize = im.resize((640,480))
        img_resize.save(img_name)
        print(f"{img_name}をリサイズしました")