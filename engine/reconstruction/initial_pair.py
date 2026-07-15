class InitialPairSelector:
    """
    Selects the best initial image pair
    for Structure-from-Motion reconstruction.
    """

    def select(self, pair_results):

        if not pair_results:

            return None

        return max(

            pair_results,

            key=lambda pair: pair["verified"]

        )