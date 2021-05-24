//import java.util.Scanner;

public class IntNumbers {

	public static int digits1(int x) { //x=100, 10, 1, 0
		int n=0; //Declaring n as a local variable for digits() method.
		while (x!=0){
			x=x/10;
			n++;				//1, 2, 3
		}
		return n;
	}
	
}