let idArr = [];

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id){

        if(id === undefined){
            throw new Error("Param id is not defined!")
        }

        if(idArr.includes(id)){
            console.error('alarm with this id already exists');
            return;
        }

        idArr.push(id);

        this.alarmCollection.push(
            {
                id:id,
                time:time,
                callback:callback,
            }
        )
    }

    removeClock(id){
        this.alarmCollection = this.alarmCollection.filter(ring => ring.id !== id);
    }

    getCurrentFormattedTime(){
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return (`${hours}:${minutes}`);
    }


    start(){
        function checkClock(currentRing) {
            if(currentRing.time === this.getCurrentFormattedTime()){
                return this.alarmCollection.callback;
            }

            if(this.timerId === null){
                this.timerId = setInterval(
                    function (alarmCollection) {
                        alarmCollection.forEach(checkClock());
                    }
                )
            }

        }
    }

}




