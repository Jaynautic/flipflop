const gridId = [
    ["gridOneOne",
        "gridOneTwo",
        "gridOneThree",
        "gridOneFour",],
    ["gridTwoOne",
        "gridTwoTwo",
        "gridTwoThree",
        "gridTwoFour",],
    ["gridThreeOne",
        "gridThreeTwo",
        "gridThreeThree",
        "gridThreeFour",],
    ["gridFourOne",
        "gridFourTwo",
        "gridFourThree",
        "gridFourFour",],
]


function onPageLoad() {

}

function tileFunction(e) {
    let tileState = document.getElementById(e.target.id).style.backgroundImage;
    
    if (tileState == "linear-gradient(to left bottom, rgb(103, 103, 103), rgb(0, 0, 0))") {
        document.getElementById(e.target.id).style.backgroundImage = "linear-gradient(to bottom left, #e2e2e2, #e2e2e2)";
    } else {
        document.getElementById(e.target.id).style.backgroundImage = "linear-gradient(to left bottom, rgb(103, 103, 103), rgb(0, 0, 0))";
    }
}

function newFunction() {
    let ranNum1 = Math.floor(Math.random() * 4)
    let ranNum2 = Math.floor(Math.random() * 4)

    document.getElementById(gridId[ranNum1][ranNum2]).style.backgroundImage = "linear-gradient(to bottom left, #676767, #000000)";
    document.getElementById(gridId[ranNum2][ranNum1]).style.backgroundImage = "linear-gradient(to bottom left, #676767, #000000)";
}

function refreshFunction() {
}