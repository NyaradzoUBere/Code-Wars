let ridesArray = ["Despicable Me Minion Mayhem,Simulator,4,20,30","Hollywood Rip Ride Rockit,Coaster,5,12,50", "Transformers: The Ride 3D,Simulator,4,10,40", "Race Through New York,Simulator,5,12,30", "Revenge of The Mummy,Coaster,5,16,60", "Jurassic Park River Adventure,Water,4,8,20", "The Forbidden Journey,Simulator,4,12,60"]

// Step 1. Get variables from array
function makeArray(rideString) {
    let rideArray = rideString.split(",")
    for (let i = 0; i < rideArray.length; i++) {
        if (i >= 2) {
            rideArray[i] = parseInt(rideArray[i])
        } else {
            rideArray[i] = rideArray[i]
        }
    }
    return rideArray
}
// console.log(makeArray("Despicable Me Minion Mayhem,Simulator,4,20,30"))

function calcWaitTime(rideArray) {
    let lineLength = rideArray[4]
    let seats = rideArray[3]
    let duration = rideArray[2]
    let waitTime = Math.floor(lineLength / seats * duration)
    return waitTime
}
// console.log(calcWaitTime(makeArray("Despicable Me Minion Mayhem,Simulator,4,20,30")))

function createArrayForEachRideString(arrayOfRideStrings) {
    // return arrayOfRideStrings.map(rideString => {
    //     let rideArray = makeArray(rideString)
    //     rideArray.push(calcWaitTime(rideArray))
    //     return rideArray
    // })

    let rideArray = []
    for (let i = 0; i < arrayOfRideStrings.length; i++) {
        let singleRideArray = makeArray(arrayOfRideStrings[i])
        let waitTime = calcWaitTime(singleRideArray)
        singleRideArray.push(waitTime)
        rideArray.push(singleRideArray)
    }
    return rideArray
}
// console.log(createArrayForEachRideString(ridesArray))

function changeRideLayout(arrayOfRides) {
    let newRideOrder = []
    for (let i = 0; i < arrayOfRides.length; i++) {
        newRideOrder.push([arrayOfRides[i][1], arrayOfRides[i][0], arrayOfRides[i][5]])
    }
    newRideOrder = newRideOrder.sort()
    // return newRideOrder
    return groupByRide(newRideOrder)
}
console.log(changeRideLayout(createArrayForEachRideString(ridesArray)))

function groupByRide(rideSet) {
    let outterArray = []
    let firstGroup = [rideSet[0]]
    let secondGroup = []
    let thirdGroup = []
    for (let i = 1; i < rideSet.length; i++) {
        if (rideSet[i][0] == firstGroup[0][0]) {
            firstGroup.push(rideSet[i])
        } else if (rideSet[i][0] !== firstGroup[0][0]) {
            if (!secondGroup[0]) {
                secondGroup.push(rideSet[i])
            } else if (secondGroup[0]) {
                if (rideSet[i][0] == secondGroup[0][0]) {
                    secondGroup.push(rideSet[i])
                } else if (rideSet[i][0] !== secondGroup[0][0]) {
                    thirdGroup.push(rideSet[i])
                }
            }
        }
    }

    if (firstGroup) {
        outterArray.push(firstGroup)
    }
    if (secondGroup) {
        outterArray.push(secondGroup)
    }
    if (thirdGroup) {
        outterArray.push(thirdGroup)
    }
    let sortedFirstGroup = []
    let temp

    return reorderRides(firstGroup, secondGroup, thirdGroup)
}

function reorderRides (group1, group2, group3) {
    let outterArray = []

    if (group1[1]) {
        for (let i = 0; i < group1.length - 1; i++) {
            if (group1[i][2] > group1[i+1][2]){
                temp = group1[i];
                group1[i] = group1[i+1];
                group1[i+1] = temp;
                outterArray.push(group1)
                // return outterArray
            }
        }
    } else {
        outterArray.push(group1)
    }

    if (group2[1]) {
        for (let i = 0; i < group2.length - 1; i++) {
            if (group2[i][2] > group2[i+1][2]){
                temp = group2[i];
                group2[i] = group2[i+1];
                group2[i+1] = temp;
                outterArray.push(group2)
            }
        }
    } else {
        outterArray.push(group2)
    }


    if (group3[1]) {
        for (let i = 0; i < group3.length - 1; i++) {
            if (group3[1]) {
                if (group3[i][2] > group3[i+1][2]){
                    temp = group3[i];
                    group3[i] = group3[i+1];
                    group3[i+1] = temp;
                    outterArray.push(group3)
                }
            } 
        }
    } else {
        outterArray.push(group3)
    }
    
    return outterArray
    
}

// console.log(makeArray("Despicable Me Minion Mayhem,Simulator,4,20,30"))
// makeArray("Despicable Me Minion Mayhem,Simulator,4,20,30")
// console.log(calcWaitTime(makeArray))
// console.log(calcWaitTime(makeArray("Despicable Me Minion Mayhem,Simulator,4,20,30")))
// console.log(createArrayForEachRideString(ridesArray))
// console.log(changeRideLayout(createArrayForEachRideString(ridesArray)))
// console.log(groupByRide(changeRideLayout(createArrayForEachRideString(ridesArray))))