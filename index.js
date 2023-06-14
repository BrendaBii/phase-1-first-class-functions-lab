// Code your solution in this file!
const drivers = ["1","2","3","4","5"];

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice (0,2);
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice (-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(mult){
    const fare = 5;
    return (() => fare*mult);
}

function fareDoubler(fare){
const result = createFareMultiplier;
return fare*2;
}

function fareTripler(fare){
const result = createFareMultiplier;
return fare*3; 
}

function selectDifferentDrivers(drivers, returnTwoDrivers){
    if(returnTwoDrivers === returnFirstTwoDrivers){
        returnTwoDrivers = drivers.slice (0,2);
    }
    else{
        returnTwoDrivers = drivers.slice (-2);
    }
return returnTwoDrivers; 
}

