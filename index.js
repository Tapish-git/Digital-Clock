// To call the function every second use setInterval() method and set the time-interval as 1000ms which is equal to 1s.(Call setInterval() method outside the function).
setInterval(currentTime, 1000);

// Create a function currentTime().
function currentTime() {
    // Inside the function, create an object of Date Class which allows you to call day, year, month, day, hour, minute, second, etc.
    
    let time = new Date();      //creating object of Date class
    let dayName = time.getDay();
    let month = time.getMonth();
    let year = time.getFullYear() ;
    let date = time.getDate();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    // The Date object works on the 24-hour format so we change the hour back to 1 when it gets larger than 12. The AM/PM also changes according to that.
    var am_pm = "AM";
    if (hour == 12) {
        am_pm = "PM";
    }
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hour = 12;
        am_pm = "AM";
    }

    // The obtained hours, minutes, and seconds from Date object will be displayed in single-digit if less than 10. To display the elements of time in two-digit format, a 0 is appended before them whenever they are less than 10.
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    // Now once our time is ready, make a string using the same HH: MM: SS format changing the hour, minute, and a second value with the values, we get from Date object methods.
    // value of current time
    let currentTime = hour + ":" + min + ":" + sec +" "+ am_pm;

    // value of present day(Day, Month, Year)
    var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    var week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    var presentDay = week[dayName]+", "+months[month]+" "+date+", "+year;

    // Once the string is ready, let's display it in the div which we made before. This is done by obtaining the div using the document.getElementById method and give our time as the content of the div using the innerHTML property.
    const clock = document.getElementById("time");
    const dayIntro = document.getElementById("dayName");
    
    clock.innerHTML = currentTime;
    dayIntro.innerHTML = presentDay;
   
    currentTime()
}