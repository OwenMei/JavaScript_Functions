console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

PrintOdds(65);
PrintOdds(12);
PrintOdds(-33);

function PrintOdds(count){
    if(count>0){
        for(let i = 0; i <= count; i++){
            if(i%2 == 0){
                continue;
            }
            else{
                console.log(i);
            }
        }
    }
    else{
        for(let i = count; i <= 0; i++){
            if(i%2 == 0){
                continue;
            }
            else{
                console.log(i);
            }
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

CheckAge("Charles", 13);
CheckAge("Bob", 16);

function CheckAge(userName, age){
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're sixteen.`;
    if(age >= 16)
        console.log(aboveSixteen);
    else
        console.log(belowSixteen);
}

console.log("EXERCISE 3:\n==========\n");

FindQuad(1,3);
FindQuad(1,-3);
FindQuad(-1,3);
FindQuad(-1,-3);
FindQuad(0,0);
FindQuad(0,3);
FindQuad(1,0);

function FindQuad(x, y){
    if(x == 0 && y == 0){
        console.log("you are on the origin");
    }else if(x == 0){
        console.log("you are on the y axis");
    }else if(y == 0){
        console.log("you are on the x axis");
    }else{
        let xQuad = (x>0)? [1,4] : [2,3];
        let yQuad = (y>0)? [1,2] : [3,4];
        console.log("Quadrant: " + xQuad.find(x => yQuad.includes(x)));
    }
}

console.log("EXERCISE 4:\n==========\n");

TriangleType(1,2,3);
TriangleType(1,1,1);
TriangleType(3,3,2);
TriangleType(2,3,4);

function TriangleType(x, y, z){
    if(x+y<=z || z+x<=y || y+z<=x){
        console.log("not a valid triangle");
        return;
    }
    if(x == y && y == z)
        console.log("equilateral");
    else if(x == y || y == z || x == z){
        console.log("isoceles");
    }else{
        console.log("scalene");
    }
}

console.log("EXERCISE 5:\n==========\n");

TrackDataUsage(54, 12, 34);
TrackDataUsage(43, 34, 2);

function TrackDataUsage(planLimit, day, usage){
    let normAvg = planLimit/30;
    let actualAvg = usage/day;
    let projectedUsage = actualAvg * 30;

    if(actualAvg <= normAvg){
        console.log("you are currently not risking to exceed your data plan")
    }else{
        console.log(`${day} days used, ${30-day} days remaining`);
        console.log(`Average daily use: ${normAvg} GB/day`)
        console.log(`you are EXCEEDING your average daily use (${actualAvg} GB/day)`)
        console.log(`continuing this high usage, you'll exceed your data plan by ${projectedUsage - planLimit} GB`)
        console.log(`To stay below your data plan, use no more than ${(planLimit-usage)/(30-day)} GB/day`)
    }
}