from vision.image_loader import ImageLoader

loader = ImageLoader()

image = loader.load("sample.jpg")

print(image.shape)