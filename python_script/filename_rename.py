import os
from glob import glob
import pandas as pd
import csv
import re
from natsort import natsorted

rename_file_list = natsorted(os.listdir(os.path.join(os.getcwd(), f"csv")))

rename_file_folder = os.path.join(os.getcwd(), f"csv")

# rename_file_listで得たファイル群を順番にos.renameでリネームする
# 名前の形式は_で区切って、最初の要素を取得して、それをファイル名にする
# 例：csv/battery_forklift.csv -> battery_photos.csv

for i, file in enumerate(rename_file_list):
    os.rename(f"{rename_file_folder}/{file}", f"{rename_file_folder}/{file.split('_')[0]}_photos.csv")



     
