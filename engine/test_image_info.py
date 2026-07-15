import cv2

image = cv2.imread("sample1.jpg")

print("Width :", image.shape[1])
print("Height:", image.shape[0])