let scoreStudent = [
    [34, 56],
    [23, 24],
    [45, 51],
    [45, 46],
    [40, 44]
];
let html = "";

for (let i=0; i < scoreStudent.length; i++) {
    let score = checkScore(scoreStudent[i][0], scoreStudent[i][1]);
   html += score + " ";
}

document.write(html);

function checkScore (scoreMid, scoreFE) {
    let x = Math.abs(scoreMid - scoreFE);
    if (scoreMid < 40 || scoreFE < 40)
        return 0;
    else if (x > 5) {
        return scoreFE;
    } else if (x < 3) {
        return scoreMid;
    } else {
        return (scoreMid + scoreFE)/2;
    }
}