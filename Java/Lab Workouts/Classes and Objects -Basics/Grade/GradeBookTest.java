public class GradeBookTest {

	public static void main( String args[] ) {

		GradeBook gradeBook1 = new GradeBook("CMPS252 OOP Lab", "Ayman" );
		gradeBook1.displayMessage(); 

		System.out.println("Chaning course instructor: ");
		gradeBook1.setInstructor("Khalid");
		gradeBook1.displayMessage(); 

		GradeBook gradeBook2 = new GradeBook("CMPS251 OOP", "Abdulaziz" );
		gradeBook2.displayMessage(); 
	} 
}