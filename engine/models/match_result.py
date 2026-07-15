from dataclasses import dataclass


@dataclass
class MatchResult:

    raw_matches: int

    verified_matches: int

    tracks: int