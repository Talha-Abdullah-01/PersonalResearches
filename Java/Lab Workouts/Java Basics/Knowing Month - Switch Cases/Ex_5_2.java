import java.util.Scanner;

public class Ex_5_2 {
	public static void main(String args[])
	{
		String month;
		Scanner dataInput = new Scanner(System.in);
		System.out.println("Enter the month please: ");
		month = dataInput.nextLine();
		
		switch (month) {
		case "Jan.":
		case "jan.": // in case you want to consider the samll letter of (J) 
			System.out.println("1.");			
			break;
		case "Feb.":
			System.out.println("2.");
			break;
		case "Mar.":
			System.out.println("3.");
			break;
		case "Apr.":
			System.out.println("4.");
			break;
		case "May.":
			System.out.println("5.");
			break;
		case "Jun.":
			System.out.println("6.");
			break;
		case "Jul.":
			System.out.println("7.");
			break;
		case "Aug.":
			System.out.println("8.");
			break;
		case "Sep.":
			System.out.println("9");
			break;
		case "Oct.":
			System.out.println("10.");
			break;
		case "Nov.":
			System.out.println("11.");
			break;
		case "Dec.":
			System.out.println("12.");
			break;
		default:
			System.out.println("Invlid input.");
		}
	}
}