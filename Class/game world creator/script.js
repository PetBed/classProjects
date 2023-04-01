var grid = document.getElementById("grid")

var tileIndex = 0;
var seed = "10/10/10G/3G1pG1G1TG4G/10G/10G/10G/10G/10G/7G1TG2G/10G/10G/";
var gridHeight, gridWidth
var values = [];
var tileList = [];

readSeed();
createGrid();
function readSeed() {
    var word = ""
    for (i = 0; i <= seed.length; i++) {
        if (seed.charAt(i) == "/") {
            values.push(word)
            word = ""
        } else {
            word = word + seed.charAt(i)
        }
    }

    console.log(values)
    defineTileList()
    console.log(tileList)

    gridWidth = values[0];
    gridHeight = values[1];


    function defineTileList() {
        var loop = 0
        var tileType = ""
        
        //Loop though all the indexes of the values list
        for (j = 2; j < values.length; j++) {
            // console.log("Index: "+j)

            //Loops through all the characters of the selected index
            for (k = 0; k < values[j].length; k++) {

                if (isNumber(values[j].charAt(k)) == true) {
                    loop = Number("" + loop + values[j].charAt(k))
                } else {

                    tileType = tileType + values[j].charAt(k)
                    
                    if (isNumber(values[j].charAt(k+1)) == false && values[j].charAt(k+1) != "") {
                        k++
                        tileType = tileType + values[j].charAt(k)
                    }

                    for (l = 0; l < loop; l++) {
                        tileList.push(tileType)
                    }
                    //Add tile data into tileList
                    loop = ""
                    tileType = ""
                }
            }
        }
    }

    function isNumber(char) {
        return /^\d$/.test(char);
    }
}

function createGrid() {
    for(i = 0; i < gridWidth; i++) {
    
        var createRow = document.createElement("div")
        createRow.id = "row"+i;
        createRow.classList = ["row"]
        grid.appendChild(createRow)
        
        for (j = 0; j < gridHeight; j++) {
            var row = document.getElementById("row"+i)
            var createTile = document.createElement("div")
            createTile.classList = ["tile"]
            createTile.id = "tile"+tileIndex
            // createTile.style.width = "32px";
            // createTile.style.height = "32px";
            createTile.innerHTML = ("")

            var tileType = tileList[tileIndex]
            var tileTypeChar

            for (k = 0; k < tileType.length; k++) {
                tileTypeChar = tileType.charAt(k)

                    console.log(tileTypeChar)
                    createTexture("T", "tree.png", "tree", true, "-64px")
                    createTexture("C", "cobblestone.jpg", "stone")
                    createTexture("G", "grass.jpg", "grass")
                    createTexture("p", "pink_flower.png", "pinkFlower", true, "-32px")
            }



            function createTexture(tileTypeCharName, path, className, multipleTextures, top) {
                if (tileTypeChar == tileTypeCharName) {
                    
                    var addImg = document.createElement("img")
                    addImg.src = "tiles/" + path;
                    
                    addImg.classList = [className + "Tile"]
                    // addImg.style.top = subTextureOffset;
                    createTile.classList = [createTile.classList + " " + className]
                    createTile.appendChild(addImg)
                    
                    k++
                    
                    if (multipleTextures == true) {
                        createSubTexture("C", "cobblestone.jpg", "stone", top)
                        createSubTexture("G", "grass.jpg", "grass", top)
                        console.log("AWEWAE")

                        function createSubTexture(tileTypeCharName, path, className, offsetY) {
                            if (tileType.charAt(k) == tileTypeCharName) {
                                var addSubImg = document.createElement("img")
                                addSubImg.src = "tiles/" + path;
                                
                                addSubImg.classList = [className + "Tile"]
                                addSubImg.style.cssText = `top: ${offsetY}`;
                                createTile.classList = [createTile.classList + " " + className]
                                createTile.appendChild(addSubImg)
                            }
                        }
                    }
                }
            }
            row.appendChild(createTile)
            tileIndex++
        }
    }
}