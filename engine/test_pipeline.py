from core.engine import AerialMapperEngine

engine = AerialMapperEngine()

result = engine.execute(

    "vision.orb",

    image_path="sample.jpg"

)

print(

    "Detected Keypoints:",

    len(result["keypoints"])

)

print(

    "Descriptor Shape:",

    result["descriptors"].shape

)