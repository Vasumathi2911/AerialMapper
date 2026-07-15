from datasets.validation.dataset_validator import DatasetValidator

validator = DatasetValidator()

validator.scan(
    "datasets/validation/images"
)