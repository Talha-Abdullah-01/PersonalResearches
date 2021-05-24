import java.util.Scanner;

public class Compare2 {

	public static void main( String args[] ) {
		int mark;
		Scanner cin = new Scanner(System.in);
		System.out.println("Enter an integer value please: ");
		mark = cin.nextInt();
		
		switch (mark) {
		case 4:
		case 5:
			System.out.println("Excellent.");
			break;
		case 3:
			System.out.println("Very Good.");
			break;
		case 2:
			System.out.println("Good.");
			break;
		default:
			System.out.println("Fail.");;
		}		
		cin.close();
	}
}