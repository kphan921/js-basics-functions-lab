// Code your solution in this file!
function distanceFromHqInBlocks(n) {
    return Math.abs(42 - n);
};

function distanceFromHqInFeet(n) {
    return distanceFromHqInBlocks(n) * 264;
}

const distanceTravelledInFeet = (num1, num2) => Math.abs(num1 - num2) * 264;

const calculatesFarePrice = (start, destination) => {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return 0.02 * (distance - 400);
    } else if (distance > 2500) {
        return `cannot travel that far`;
    } else if (distance > 2000) {
        return 25;
    }
}