export const getArgs = (args) => {
    const [executer, file, ...rest] = args;
    const data = {};

    rest.forEach((value, index, array) => {
        if (value.charAt(0) == '-') {
            if (value.substring(1) === "s" || value.substring(1) === "d") {
                data[value.substring(1)] = array[index + 1]
            }
            else {
                console.log(`Error`);
            }
        }
    });
    return data
}