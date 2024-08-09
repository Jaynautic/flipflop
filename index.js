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


let rules = "RULES: Click on a dot to flip its state. This will flip the surrounding dots, too. Try to make all dots black by FLIP-FLOPPING!"

function onPageLoad() {
    window.alert(rules)
    newFunction();
}

function tileFunction(e) {
    let tileState = document.getElementById(e.target.id).style.backgroundImage;

    let house = e.target.id;
    let ok = [gridId[0].indexOf(house), gridId[1].indexOf(house), gridId[2].indexOf(house), gridId[3].indexOf(house)];

    console.log(house);
    console.log(ok);
    
    for (let i = 0; i < ok.length; i++) {
        if (ok[i] !== -1) {

            if (tileState == "linear-gradient(to left bottom, rgb(103, 103, 103), rgb(0, 0, 0))") {
                document.getElementById(e.target.id).style.backgroundImage = "linear-gradient(to bottom left, #e2e2e2, #e2e2e2)";
            } else {
                document.getElementById(e.target.id).style.backgroundImage = "linear-gradient(to left bottom, rgb(103, 103, 103), rgb(0, 0, 0))";
            }

            if (i !== 3) {
            if (document.getElementById(gridId[i + 1][ok[i]]).style.backgroundImage == "linear-gradient(to left bottom, rgb(103, 103, 103), rgb(0, 0, 0))") {
                document.getElementById(gridId[i + 1][ok[i]]).style.backgroundImage = "linear-gradient(to bottom left, #e2e2e2, #e2e2e2)";
            } else {
                document.getElementById(gridId[i + 1][ok[i]]).style.backgroundImage = "linear-gradient(to left bottom, rgb(103, 103, 103), rgb(0, 0, 0))";
            }
            }

            if (i !== 0) {
            if (document.getElementById(gridId[i - 1][ok[i]]).style.backgroundImage == "linear-gradient(to left bottom, rgb(103, 103, 103), rgb(0, 0, 0))") {
                document.getElementById(gridId[i - 1][ok[i]]).style.backgroundImage = "linear-gradient(to bottom left, #e2e2e2, #e2e2e2)";
            } else {
                document.getElementById(gridId[i - 1][ok[i]]).style.backgroundImage = "linear-gradient(to left bottom, rgb(103, 103, 103), rgb(0, 0, 0))";
            }
            }
            

            if (ok[i] !== 3) {
            if (document.getElementById(gridId[i][ok[i] + 1]).style.backgroundImage == "linear-gradient(to left bottom, rgb(103, 103, 103), rgb(0, 0, 0))") {
                document.getElementById(gridId[i][ok[i] + 1]).style.backgroundImage = "linear-gradient(to bottom left, #e2e2e2, #e2e2e2)";
            } else {
                document.getElementById(gridId[i][ok[i] + 1]).style.backgroundImage = "linear-gradient(to left bottom, rgb(103, 103, 103), rgb(0, 0, 0))";
            }
            }

            if (ok[i] !== 0) {
            if (document.getElementById(gridId[i][ok[i] - 1]).style.backgroundImage == "linear-gradient(to left bottom, rgb(103, 103, 103), rgb(0, 0, 0))") {
                document.getElementById(gridId[i][ok[i] - 1]).style.backgroundImage = "linear-gradient(to bottom left, #e2e2e2, #e2e2e2)";
            } else {
                document.getElementById(gridId[i][ok[i] - 1]).style.backgroundImage = "linear-gradient(to left bottom, rgb(103, 103, 103), rgb(0, 0, 0))";
            }
            }

        }
      }
}

function newFunction() {

    currentTiles = [];

    let newTiles = document.getElementsByClassName("gridItem");

    for (let i = 0; i < 16; i++) {
        newTiles[i].style.backgroundImage = "linear-gradient(to bottom left, #e2e2e2, #e2e2e2)"
    }

    let ranNum = 4 + Math.floor(Math.random() * 3)

    for (let i = 0; i < ranNum; i++) {
        let ranNum1 = Math.floor(Math.random() * 4)
        let ranNum2 = Math.floor(Math.random() * 4)
        let ranTile = gridId[ranNum1][ranNum2]

        document.getElementById(ranTile).style.backgroundImage = "linear-gradient(to bottom left, #676767, #000000)";

        currentTiles.push(ranTile);
    }

    console.log(currentTiles)
}

function refreshFunction() {
    console.log(currentTiles)

    let newTiles = document.getElementsByClassName("gridItem");

    for (let i = 0; i < 16; i++) {
        newTiles[i].style.backgroundImage = "linear-gradient(to bottom left, #e2e2e2, #e2e2e2)"
    }

    for (let i = 0; i < currentTiles.length; i++) {
        document.getElementById(currentTiles[i]).style.backgroundImage = "linear-gradient(to bottom left, #676767, #000000)";
    }
}
