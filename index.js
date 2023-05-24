// code your solution here
function superbowlWin(record) {
const winningRecord = record.find(obj => obj.result === "W");
if (winningRecord) {
    return winningRecord.year;
}
else {
    return undefined;
}
}

