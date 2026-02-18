const file = require('fs');
const { stdin, stdout } = require('process');
const readline = require('readline');

let path = './abc.txt';

/**Create file and write/append line. */

if (!file.existsSync(path)) {
    file.writeFile(path, 'This is first line is file\n', 'utf-8', (err) => {
        if (err) throw err;
        logMsg()
    });
} else {
    file.appendFile(path, 'This is new line appending in file\n', (err) => {
        if (err) throw err;
        console.log(data);
        logMsg()
    });
}

/**read from file and log it. */

file.readFile(path, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

/** stream the file content */
async function readUsingStream() {
    const stream = file.createReadStream(path, { encoding: 'utf8', highWaterMark: 100 });

    for await (const chunk of stream) {
        console.log('reading data');
        console.log(chunk);
    }
}
readUsingStream();

/**Read data line by line and log it */
async function lineByLine() {
    const st = file.createReadStream(path, { encoding: 'utf-8' });

    const readl = readline.createInterface({
        input: st,
        crlfDelay: Infinity
    });

    readl.on('line', (line) => {
        console.log(`received: ${line}`);
    });
}
lineByLine()


function logMsg() {
    console.log("File write completed");
}