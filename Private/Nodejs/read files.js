const fs = require("fs");

fs.readFile("text.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
})

const data = fs.readFileSync("text.txt", {encoding: "utf8", flag:"r"});

console.log("Synced",data)

fs.stat("text.txt", (err, stats) => {
    if (err) {
        console.error(err);
        return
    }

    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.isSymbolicLink())
    console.log(stats.size)
})