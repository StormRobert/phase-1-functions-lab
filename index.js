// Code your solution in this file!
function distanceFromHqInBlocks (blocks) {
    const headQuarter = 42;
    const pickuplocation = blocks;
    return Math.abs((headQuarter - pickuplocation));
}

function distanceFromHqInFeet (blocks) {
    const headQuarter = 42;
    const pickuplocation = blocks;
   const distance = 264;
    return Math.abs((headQuarter - pickuplocation) * distance); //distance in feet after the maths.abs calculation
}

function distanceTravelledInFeet (point1, point2) {
    const distance =264;
    return Math.abs((point1 - point2) * distance)
}

function calculatesFarePrice (start, destination){
    const distance = 264;
    const total = Math.abs((start - destination)* distance);
    if (total < 400){
        return (0);
    }
    else if (total > 400 && total < 2000){
        return ((total - 400)*0.02);

    }
    else if(total > 2000 && total <2500){
        return(25);
    }
    else{
        return('cannot travel that far');
    }
}