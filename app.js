const IFToDate = (dateSt) => {
    const AMPMto24H = (time) => {
        let hours = Number(time.match(/^(\d+)/)[1]);
        let minutes = Number(time.match(/:(\d+)/)[1]);
        const AMPM = time.match(/(.{2})$/)[1];
        if(AMPM == "PM" && hours<12) hours = hours+12;
        if(AMPM == "AM" && hours==12) hours = hours-12;
        let sHours = hours.toString();
        let sMinutes = minutes.toString();
        if(hours<10) sHours = "0" + sHours;
        if(minutes<10) sMinutes = "0" + sMinutes;
        return (sHours + ":" + sMinutes);
    }
    let datePt = dateSt.split(" ");
    datePt[1] = datePt[1].substr(0,datePt[1].length-1);
    datePt.splice(3,1);
    datePt[3] = AMPMto24H(datePt[3]);
    const dateStNew = datePt.join(" ");
    return new Date(dateStNew);
}

const dateSt = 'May 28, 2020 at 10:47AM'; //From IFTTT time stamp...
console.log(date);
const dateObj = IFToDate(date);
console.log(dateObj.toLocaleString());
