import java.util.Scanner;

public class IntNumbersTest {
	
	public static void main(String arg[]){
		Scanner keyboard=new Scanner(System.in);
		System.out.print("Enter a value for n: ");
		
		//2- Calling the method nextInt() using the object keyboard.		
		int n= keyboard.nextInt(); //Declaring n as a local variable for main() method.
		
		//1- Calling a static method() without using object or class name in case you are calling the method from the main().
		//1- Calling a method() without using object or class name similar to class Person line No. 14, 15 and 16.
		System.out.println(digits(n));
		
		
		System.out.println(IntNumbers.digits1(n));
		
		//3- Calling the method sqrt() using the Class Math.
		System.out.println(Math.sqrt(n));
		
		keyboard.close();
	}
	
	public static int digits(int x) { //x=100, 10, 1, 0
		int n=0; //Declaring n as a local variable for digits() method.
		while (x!=0){
			x=x/10;
			n++;				//1, 2, 3
		}
		return n;
	}

}
