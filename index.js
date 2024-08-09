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
    let ranNum1 = Math.floor(Math.random() * 4)
    let ranNum2 = Math.floor(Math.random() * 4)

    document.getElementById(gridId[ranNum1][ranNum2]).style.backgroundImage = "linear-gradient(to bottom left, #676767, #000000)";
    document.getElementById(gridId[ranNum2][ranNum1]).style.backgroundImage = "linear-gradient(to bottom left, #676767, #000000)";
}

function refreshFunction() {
}
