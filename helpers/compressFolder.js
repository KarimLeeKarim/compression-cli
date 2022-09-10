import fs from "fs";
import archiver from "archiver";
import { getFileList } from "./getFileList.js";

export const compressFolder = async (source, dest = source) => {
    const mainFiles = await getFileList(source);

    const archive = archiver.create('zip', {});

    archive.on('error', function (err) {
        throw err;
    });

    const output = fs.createWriteStream(dest + '/archivedFile.zip');

    output.on('close', function () {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
    });

    archive.pipe(output);
    for (const file of mainFiles) {
        archive.append(fs.readFileSync(file), { name: file });
    }

    archive.finalize();
};