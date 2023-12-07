import os
from glob import glob
import pandas as pd
import csv
import re
from natsort import natsorted

fork_kind = "battery"
data = []
with open(f"csv/{fork_kind}_photos.csv", "r") as f:
    reader = csv.reader(f)
    for row in reader:
        data.append(row)
natsorted(data)
base_dir = os.path.join(os.getcwd(), f"public/{fork_kind}")
sorted_image_dir_list = natsorted(os.listdir(os.path.join(os.getcwd(), f"public/{fork_kind}")))
sorted_image_file_list = [os.listdir(os.path.join(base_dir, dir)) for dir in sorted_image_dir_list]


for i, file in enumerate(sorted_image_file_list):
    for j in range(len(file)):
        os.rename(f"{base_dir}/{sorted_image_dir_list[i]}/{file[j]}",f"{base_dir}/{sorted_image_dir_list[i]}/{data[i][2]}-{data[i][3]}_{j}.jpg")
