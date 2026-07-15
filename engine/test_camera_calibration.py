from calibration.camera import CameraCalibration

camera = CameraCalibration()

intrinsics = camera.load("camera.json")

K = camera.camera_matrix(intrinsics)

print(K)