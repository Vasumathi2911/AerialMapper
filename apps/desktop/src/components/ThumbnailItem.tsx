import "./ThumbnailItem.css";

interface ThumbnailItemProps {

    imageUrl: string;

    imageName: string;

    selected?: boolean;

    onClick?: () => void;

}

export default function ThumbnailItem({

    imageUrl,

    imageName,

    selected = false,

    onClick

}: ThumbnailItemProps) {

    return (

        <div

            className={

                selected

                    ? "thumbnail-item selected"

                    : "thumbnail-item"

            }

            onClick={onClick}

        >

            <img

                src={imageUrl}

                alt={imageName}

            />

            <span>

                {imageName}

            </span>

        </div>

    );

}