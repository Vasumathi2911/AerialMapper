from core.engine import AerialMapperEngine
from core.job import ProcessingJob


engine = AerialMapperEngine()

job = ProcessingJob(

    id="1",

    name="Analyze Mission",

    pipeline="vision"

)

engine.submit_job(job)

print("Pending Jobs:", engine.pending_jobs())