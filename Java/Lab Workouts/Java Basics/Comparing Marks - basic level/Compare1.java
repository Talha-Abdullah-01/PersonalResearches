import java.util.Scanner;

public class Compare1 {

	public static void main( String args[] ) {
		int mark;
		Scanner cin = new Scanner(System.in);
		System.out.println("Enter mark (an integer):");
		mark = cin.nextInt();
		if ( (mark/20)>=3 )
			System.out.println( "Pass" );
		else
			System.out.println( "Fail" );
		cin.close();
	}
}