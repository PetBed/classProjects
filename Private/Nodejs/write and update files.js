const fs = require("fs")

const content= "Node Appication"


fs.writeFileSync("text.txt", content, {flag: "a+"}, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Done!")
})