import * as exifr from "exifr";

export default class ExifService {

    static async read(file: File) {

        try {

            const metadata = await exifr.parse(file);

            console.log(metadata);

            return metadata;

        }

        catch (error) {

            console.error(error);

            return null;

        }

    }

}