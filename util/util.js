const formatDate = (val)=>{
    const dateVal = val?val:new Date();
    const year = dateVal.toLocaleString("default", { year: "numeric" });
    const month = dateVal.toLocaleString("default", { month: "2-digit" });
    const day = dateVal.toLocaleString("default", { day: "2-digit" });
    let hour =  dateVal.getHours().toString();
    hour=(hour.length==1)?"0"+hour:hour;

    let minute = dateVal.toLocaleString("default", { minute: "2-digit" });
    minute=(minute.length==1)?"0"+minute:minute;
    let second = dateVal.toLocaleString("default", { second: "2-digit" });
    second=(second.length==1)?"0"+second:second;
    let miliseconds = dateVal.getMilliseconds();
    miliseconds='000'+miliseconds;
    miliseconds = miliseconds.substring(miliseconds.length - 3);
    return `${year}-${month}-${day} ${hour}:${minute}:${second}:${miliseconds}`;

}
module.exports={ formatDate }