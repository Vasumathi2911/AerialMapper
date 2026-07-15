from .scheduler import JobScheduler
from .job import ProcessingJob
from .pipeline import ProcessingPipeline


class AerialMapperEngine:
    """
    Central execution engine for AerialMapper.
    """

    def __init__(self):

        self.scheduler = JobScheduler()

        self.pipeline = ProcessingPipeline()

    def submit_job(self, job: ProcessingJob):

        self.scheduler.submit(job)

    def pending_jobs(self):

        return self.scheduler.pending_jobs()

    def execute(

        self,

        pipeline: str,

        **kwargs

    ):

        return self.pipeline.execute(

            pipeline,

            **kwargs

        )