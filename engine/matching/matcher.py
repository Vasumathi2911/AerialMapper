import cv2


class BFMatcherEngine:
    """
    Brute Force Feature Matcher.
    """

    def __init__(self):

        self.matcher = cv2.BFMatcher(

            cv2.NORM_HAMMING,

            crossCheck=True

        )

    def match(

        self,

        descriptors1,

        descriptors2

    ):

        if descriptors1 is None or descriptors2 is None:

            return []

        matches = self.matcher.match(

            descriptors1,

            descriptors2

        )

        matches = sorted(

            matches,

            key=lambda match: match.distance

        )

        return matches