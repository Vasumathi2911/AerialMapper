import cv2
import numpy as np

img1 = cv2.imread("sample1.jpg")
img2 = cv2.imread("sample2.jpg")

gray1 = cv2.cvtColor(img1, cv2.COLOR_BGR2GRAY)
gray2 = cv2.cvtColor(img2, cv2.COLOR_BGR2GRAY)

difference = cv2.absdiff(gray1, gray2)

print("Mean Pixel Difference:", np.mean(difference))