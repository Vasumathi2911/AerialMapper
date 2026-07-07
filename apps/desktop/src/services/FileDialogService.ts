export default class FileDialogService {

    static async pickImages(): Promise<File[]> {

        return new Promise((resolve) => {

            const input = document.createElement("input");

            input.type = "file";

            input.multiple = true;

            input.accept = ".jpg,.jpeg,.png,.tif,.tiff";

            input.onchange = () => {

                resolve(Array.from(input.files ?? []));

            };

            input.click();

        });

    }

}