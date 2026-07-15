from pipelines.sfm_pipeline import StructureFromMotionPipeline

pipeline = StructureFromMotionPipeline()

result = pipeline.process(

    "sample1.jpg",

    "sample2.jpg"

)

print(result)