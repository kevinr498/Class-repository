const carName = "KodeCar";
let drivingState = 'driving state ' + true;
let trafficLight = 'off';

if (trafficLight = 'redLight') {
	console.log(`${carName} STOP`)
    drivingState = 'driving state ' + false;
    console.log(drivingState)
}
if (trafficLight = 'greenLight') {
    console.log(`${carName} GO`)
    drivingState = 'driving state ' + true;
    console.log(drivingState)

}
if (trafficLight = 'yellowLight') {
    console.log(`${carName} slow to stop if further than 50m from traffic light`)
    drivingState = 'driving state ' + false;
    console.log(drivingState)
}
if (trafficLight = 'turnSignal') {
    console.log(`${carName} Changed Lanes`)
    drivingState = 'driving state ' + true;
    console.log(drivingState)
}
if (trafficLight = 'rightTurn') {
    console.log(`${carName} right turn signal. Slowed to a stop and proceeded to turn right after it was safe to turn.`)
    drivingState = 'driving state ' + true;
    console.log(drivingState)
}
if (trafficLight = 'leftTurn') {
    console.log(`${carName} left turn signal. Slowed to a stop and proceeded to turn left after it was safe to turn.`)
    drivingState = 'driving state ' + true;
    console.log(drivingState)
}
if (trafficLight = 'parked') {
    console.log(`${carName} slowed to a stop and parked the car.`)
    drivingState = 'driving state ' + false;
    console.log(drivingState)
}


//CompanyName
// isSunny
// isRaining
// windSpeed
// windDirection
// dayOfWeek
// expectedPrecipitation