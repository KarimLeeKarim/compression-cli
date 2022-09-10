import fs from "fs"
import { getArgs } from "./helpers/args.js";
import { compressFile } from "./helpers/compressFile.js";
import { compressFolder } from "./helpers/compressFolder.js";

const initCLI = () => {
    const args = getArgs(process.argv);
    const checkPath = fs.statSync(args?.s);
    if (checkPath.isFile()) {
        compressFile(args?.s, args?.d);
    }
    if (checkPath.isDirectory()) {
        compressFolder(args?.s, args?.d)
    }
}

initCLI();
