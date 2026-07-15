import uuid

from .tracks import FeatureTrack


class TrackBuilder:
    """
    Builds feature tracks from verified matches.

    Current Version:
        One verified match = One feature track

    Future Versions:
        Merge observations across many images.
    """

    def build(self, matches):

        tracks = []

        for match in matches:

            track = FeatureTrack(

                id=str(uuid.uuid4()),

                observations=[

                    {

                        "query_index": match.queryIdx,

                        "train_index": match.trainIdx,

                        "distance": match.distance

                    }

                ]

            )

            tracks.append(track)

        return tracks