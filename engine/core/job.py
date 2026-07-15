from dataclasses import dataclass, field
from datetime import datetime
from typing import Optional


@dataclass
class ProcessingJob:
    """
    Represents a single processing task inside the AerialMapper Engine.
    """

    id: str

    name: str

    pipeline: str

    status: str = "pending"

    progress: float = 0.0

    created_at: datetime = field(default_factory=datetime.now)

    started_at: Optional[datetime] = None

    completed_at: Optional[datetime] = None

    message: str = ""