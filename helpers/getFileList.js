import fs from "fs";

export async function getFileList(dirName) {
    let files = [];
    const items = await fs.promises.readdir(dirName, { withFileTypes: true });

    for (const item of items) {
        if (item.isDirectory()) {
            files = [
                ...files,
                ...(await getFileList(`${dirName}/${item.name}`)),
            ];
        } else {
            files.push(`${dirName}/${item.name}`);
        }
    };
    return files;
};