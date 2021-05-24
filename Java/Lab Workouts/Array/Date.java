public class Date {
	private int month; // 1-12
	private int day; // 1-31 based on month
	private int year; // any year

	public int getMonth() {
		return month;
	}

	public void setMonth(int month) {
		this.month = month;
	}

	public int getDay() {
		return day;
	}

	public void setDay(int day) {
		this.day = day;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	// constructor: call checkMonth to confirm proper value for month;
	// call checkDay to confirm proper value for day
	public Date(int theDay, int theMonth, int theYear) {
		month = checkMonth(theMonth); // validate month
		year = theYear; // could validate year
		day = checkDay(theDay); // validate day
	} // end Date constructor

	// utility method to confirm proper month value
	private static int checkMonth(int testMonth) {
		if (testMonth > 0 && testMonth <= 12) // validate month
			return testMonth;
		else
			return 1; //January is the default month
	} // end method checkMonth

	// utility method to confirm proper day value based on month and year
	private int checkDay(int testDay) {
		// check if day in range for month
		if (testDay > 0 && testDay <= daysPerMonth(month, year))
			return testDay;

		// check for leap year
		if (month == 2 && testDay == 29 && Date.isLeap(year))
			return testDay;

		return 1; //default day is the first day of the month.
	} // end method checkDay

	//Returns true if the year is leap.
	public static boolean isLeap(int year) {
		return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
	}

	// Returns the number of days in each month
	// the year parameter is needed to decide the number of days in February.
	public static int daysPerMonth(int month, int year){
		month=checkMonth(month);//Validate month
		switch (month) {
		case 4: case 6: case 9: case 11:
			return 30;
		case 2:
			return 	isLeap(year)?29:28;
		default:
			return 31;
		}
	}

	// return a String of the form dd/mm/year
	public String toString() {
		return String.format("%2d/%2d/%d", day, month, year);
	} // end method toString
} // end class Date
