/**
 * @return a Date object representing 5am on the current day (in the user's current time zone)
 */
function get_5am() {
	var fiveAM = new Date(); //current time
	fiveAM.setHours(5);
	fiveAM.setMinutes(0);
	fiveAM.setSeconds(0);
	fiveAM.setMilliseconds(0);
	return fiveAM;
}

/**
* Gets a Date object representing any time on the current day
* @param h the hour of the time to get
* @param m the minute of the time to get
* @param s the second of the time to get
*/
function get_current_day_time(h, m, s) {
	var time = new Date(); //current time
	time.setHours(h);
	time.setMinutes(m);
	time.setSeconds(s);
	time.setMilliseconds(0);
	return time;
}

/**
* Gets a Date object representing any time on the current day or the next day
* @param h the hour of the time to get
* @param m the minute of the time to get
* @param s the second of the time to get
* @param tomorrow if true, will use tomorrow, if false will use today
*/
function get_time(h, m, s, tomorrow) {
	if(tomorrow==false) {
		return get_current_day_time(h,m,s);
	}
	else {
		var time = get_current_day_time(h,m,s);
		time.setDate(time.getDate()+1);
		return time;
	}
}

/**
* Gets a Date object representing the next time that is 6am.
* @param t the time to get the next 6am of, in Date object
*/
function next_6am(t) {
	var sixAM = new Date();
	sixAM.setDate(t.getDate());
	sixAM.setHours(6);
	sixAM.setMinutes(0);
	sixAM.setSeconds(0);
	sixAM.setMilliseconds(0);
	if(sixAM<=t) {
		sixAM.setDate(sixAM.getDate()+1);
	}
	return sixAM;
}

/**
* Parses a date into a format similar to 3pm Today
* @param date the date to convert into a string
* @return a String representation.
*/
function parse_date(date) {
	var ampm = "am";
	var h = date.getHours();
	var day = date.getDay() - (new Date()).getDay();
	if(h>=12) {
		h -= 12;
		ampm = "pm";
	}
	if(h==0) {
		h = 12;
	}
	if(day<0) {
		day += 7;
	}
	if(day==0) {
		day = "Today";
	}
	if(day==1) {
		day = "Tomorrow";
	}
	return h.toString() + ampm + " " + day;
}