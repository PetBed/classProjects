const types = 
{
    "Weight": ["Tonne", "Kilogram", "Gram", "Milligram", "Microgram", "Imperial Ton", "US Ton",  "Stone", "Pound", "Ounce"],
    "Length": ["Imperial League", "Mile", "Kilometre", "Meter", "Yard", "Foot", "Inch", "Centimeter", "Millimetre"],
    "Fluid Volume": ["Gallon", "Litre", "Quart", "Pint", "Cup", "Ounce", "Milliliter"],
};
const formula = 
{
    "Weight": [1000000, 1000, 1, 0.001, 0.00001, 1016000, 907200, 6350, 453.6, 28.35],
    "Length": [4828.02, 1609.34, 1000, 1, 0.9144, 0.3048, 0.0254, 0.01, 0.001],
    "Fluid Volume": [3785, 1000, 946.4, 473.2, 240, 29.574, 1],
}


const leftCon = document.getElementById("left-convert");
const rightCon = document.getElementById("right-convert");
const typeCon = document.getElementById("type-convert");
const leftInp = document.getElementById("left-input");
const rightInp = document.getElementById('right-input');
const formulaText = document.getElementById('formula-text');
const title = document.getElementById('title');

var option
function addOptions(id) {
    id.innerHTML = ""
    types[ typeCon.value ].forEach((type) => {
        option += "<option>" + type + "</option>";
    })
    id.innerHTML = option;
    option = "";
}
/* function addOptions(id) {
    var option = document.createElement("option")
    types.forEach((type) => {
        id.add(option);
        option.text = type;
    })
}
addOptions(leftCon); */

var lastLeft;
var lastRight;
var lastConLeft;
var lastConRight;
var lastType;
var formulaType = "mass";
setInterval(() => {
    var conLeft = formula[ typeCon.value][types[ typeCon.value ].indexOf(leftCon.value)]
    var conRight = formula[ typeCon.value][types[ typeCon.value ].indexOf(rightCon.value)]
    console.log(conLeft, types[typeCon.value].indexOf(leftCon.value))
    var operations = ["Divide", 0]
    
    function updateFormula() {
        if (conLeft > conRight) {
            operations[0] = "Multiply";
            operations[1] = Math.round(((conLeft / conRight) + Number.EPSILON) * 10000) / 10000;
        } else {
            operations[0] = "Divide";
            operations[1] = Math.round(((conRight / conLeft) + Number.EPSILON) * 10000) / 10000;
        }
        if (conLeft != conRight) {
            formulaText.innerHTML = `<span>Formula</span>: ${operations[0]} ${formulaType} by ${operations[1]}`;
        } else {
            formulaText.innerHTML = ""
        }
    }
    
    if (lastConLeft != conLeft) {
        lastConLeft = conLeft;
        leftInp.value = Math.round(((rightInp.value*conRight/conLeft) + Number.EPSILON) * 10000) / 10000;
        lastRight = rightInp.value;
        lastLeft = leftInp.value;
        updateFormula()
    }
    if (lastConRight != conRight) {
        lastConRight = conRight;
        rightInp.value = Math.round(((leftInp.value*conLeft/conRight) + Number.EPSILON) * 10000) / 10000;
        lastLeft = leftInp.value;
        lastRight = rightInp.value;
        updateFormula()
    }
    if(lastLeft != leftInp.value) {
        rightInp.value = Math.round(((leftInp.value*conLeft/conRight) + Number.EPSILON) * 10000) / 10000;
        lastRight = rightInp.value;
        lastLeft = leftInp.value;
        updateFormula()
    }
    if(lastRight != rightInp.value) {
        leftInp.value = Math.round(((rightInp.value*conRight/conLeft) + Number.EPSILON) * 10000) / 10000;
        lastLeft = leftInp.value;
        lastRight = rightInp.value;
        updateFormula()
    }
    if(typeCon.value != lastType) {
        var formulaTitleType
        addOptions(leftCon);
        addOptions(rightCon);
        lastType = typeCon.value
        if (typeCon.value == "Weight") {
            formulaType = "mass";
            formulaTitleType = "Weight"
        } else if (typeCon.value == "Length") {
            formulaType = "length";
            formulaTitleType = "Length";
        } else {
            formulaType = "volume";
            formulaTitleType = "Fluid Volume"
        };
        title.innerHTML = `${formulaTitleType} Conversion`
    }
}, 30);