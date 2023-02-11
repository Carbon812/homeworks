class AlarmClock {

    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {

        if (id === undefined) {
            throw new Error("Param id is not defined!")
        }

        const equal = (element) => element.id === id;

        if (this.alarmCollection.some(equal)) {
            console.error('alarm with this id already exists');
            return;
        }

        this.alarmCollection.push(
            {
                id: id,
                time: time,
                callback: callback,
            }
        )
    }

    removeClock(id) {
        const beforeRemove = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(ring => ring.id !== id);
        const afterRemove = this.alarmCollection.length;

        return (beforeRemove !== afterRemove);
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return (`${hours}:${minutes}`);
    }

    start() {

        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                    this.alarmCollection.forEach(currentRing => (currentRing.time === this.getCurrentFormattedTime()) ? currentRing.callback() : console.log("You can sleep!!"));
                }
            );
        }
    }

    stop(){
        if (this.timerId !== null){
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms(){
        console.log(`Printing off alarms in amount: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(currentRing => console.log(`Alarm # ${currentRing.id}` + ` set on time: ${currentRing.time}`))
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}


const clock = new AlarmClock();
clock.addClock("18:23", () => {console.log("Wake up!")}, 1);
clock.start();
clock.addClock("18:24", () => {console.log("Wake up!")}, 2);
clock.start();
clock.removeClock(2);
clock.addClock("18:25", () => {console.log("Wake up!")}, 3);
clock.start();
clock.printAlarms();
clock.clearAlarms();
clock.printAlarms();











