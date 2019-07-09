let current = "x";

let a = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]

];

function ham(myButton, row, col) {

    if (current === "x") {
        current = "o";
    } else {
        current = "x";
    }
    if (!myButton.value) {
        myButton.value = current;
        a[row][col] = current;
    }

    for (let i = 0; i < a.length; i++) {
        ngangCase(i);
        docCase(i);
        xeoCase(i);
    }
}


function ngangCase(i) {
    let prev = i - 1;
    let next = i + 1;

    for (let row = 0; row < a.length; row++) {
        let isValidRange = prev >= 0 && next < a.length;
        let isEqualPrev = a[row][i] === a[row][prev];
        let isEqualNext = a[row][i] === a[row][next];
        let isNotEmpty = a[row][i] !== "";


        if (isValidRange
            && isEqualPrev
            && isEqualNext) {

            if (isNotEmpty) {
                if (a[row][i] === 'o') {
                    document.write('o win!')
                } else {
                    document.write('x win!')
                }
            }

        }
    }
}

function docCase(i) {
    let prev = i - 1;
    let next = i + 1;

    for (let col = 0; col < a.length; col++) {
        let isValidRange = prev >= 0 && next < a.length;

        if (isValidRange) {
            let isEqualPrev = a[i][col] === a[prev][col];
            let isEqualNext = a[i][col] === a[next][col];
            let isNotEmpty = a[i][col] !== "";


            if (isEqualPrev
                && isEqualNext) {

                if (isNotEmpty) {
                    if (a[i][col] === 'o') {
                        document.write('o win!')
                    } else {
                        document.write('x win!')
                    }
                }

            }
        }
    }
}

function xeoCase(i) {
    let prev = i - 1;
    let next = i + 1;

    let isValidRange = prev >= 0 && next < a.length;

    if (isValidRange) {
        let isEqualPrev = a[i][i] === a[prev][prev];
        let isEqualNext = a[i][i] === a[next][next];
        let isNotEmpty = a[i][i] !== "";


        if (isEqualPrev
            && isEqualNext) {

            if (isNotEmpty) {
                if (a[i][i] === 'o') {
                    document.write('o win!')
                } else {
                    document.write('x win!')
                }
            }

        }

    }

}

