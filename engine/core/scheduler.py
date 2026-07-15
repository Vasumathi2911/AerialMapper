from collections import deque

from .job import ProcessingJob


class JobScheduler:
    """
    Simple FIFO job scheduler.

    Later this will support:
    - Priority
    - Parallel execution
    - GPU scheduling
    - Worker pools
    """

    def __init__(self):

        self._queue = deque()

    def submit(self, job: ProcessingJob):

        self._queue.append(job)

    def next_job(self):

        if not self._queue:

            return None

        return self._queue.popleft()

    def pending_jobs(self):

        return len(self._queue)