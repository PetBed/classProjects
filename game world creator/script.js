var grid = document.getElementById("grid")

var tileIndex = 0;
var seed = "10/10/";
var gridHeight, gridWidth
var values = [];
var tileList = [];

readSeed();
createGrid();
function readSeed() {
    var char, word = ""
    for (i = 0; i <= seed.length; i++) {
        if (seed.charAt(i) == "/") {
            values.push(word)
            word = ""
        } else {
            word = word + seed.charAt(i)
        }
    }

    defineTileList()

    gridWidth = values[0];
    gridHeight = values[1];

    console.log(values)
    function defineTileList() {
        
    }
}

function createGrid() {
    for(i = 0; i <= gridWidth; i++) {
    
        var createRow = document.createElement("div")
        createRow.id = "row"+i;
        createRow.classList = ["row"]
        grid.appendChild(createRow)
        
        for (j = 0; j <= gridHeight; j++) {
            var row = document.getElementById("row"+i)
            var createTile = document.createElement("div")
            createTile.classList = ["tile"]
            createTile.id = "tile"+tileIndex
            // createTile.style.width = "32px";
            // createTile.style.height = "32px";
            createTile.innerHTML = ("")
            row.appendChild(createTile)
            tileIndex++
        }
    }
}