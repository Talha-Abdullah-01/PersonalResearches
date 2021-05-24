public class GradeBook {
	
	private String courseName; 
	private String instructor;
	
	public GradeBook( String name, String instructor ) {
		courseName = name; 
		this.instructor = instructor;
	} 
	
	public String getInstructor() {
		return instructor;
	}

	public void setInstructor(String instructor) {
		this.instructor = instructor;
	}

	public void setCourseName( String name ) {
		courseName = name; 
	}
	
	public String getCourseName() {
		return courseName;
	}
	
	public void displayMessage() {
		//System.out.printf( "Welcome to the grade book for %s, the instructor is: %s!\n", getCourseName() , getInstructor()  );
		System.out.printf( "Welcome to the grade book for %s, the instructor is: %s!\n", courseName , instructor  );
	}
} 