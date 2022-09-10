import zlib from "zlib"
import fs from "fs"

export const compressFile = (filePath, destination = filePath) => {
    const zip = zlib.createGzip();
    const stream = fs.createReadStream(filePath);
    const pathSplit = filePath.split('/');
    const path = pathSplit[pathSplit.length - 1];
    const pathJoin = destination.concat("", path);

    stream
        .pipe(zip)
        .pipe(fs.createWriteStream(`${pathJoin ? pathJoin : filePath}.gz`))
        .on("finish", () =>
            console.log(`Successfully compressed the file at ${destination}`)
        );
};