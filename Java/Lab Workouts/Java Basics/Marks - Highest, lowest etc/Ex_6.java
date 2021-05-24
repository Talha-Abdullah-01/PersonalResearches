import java.util.Scanner;

public class Ex_6 {

	public static void main(String args[])
	{
		double math, computer, music;
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the score of Math. please: ");
		math = input.nextDouble();
		System.out.print("Enter the score of Computer please: ");
		computer = input.nextDouble();
		System.out.print("Enter the score of Music please: ");
		music = input.nextDouble();

		//To debug, right-click on the line No. that you want to trace
		//You will be having the following three options:
		//1- Step into - Means, get out of the main() method, and go the other methods and execute it step by step.
		//2- Step over - Means, executes the other methods in the background, and provides the output without leaving the main() method.
		//3- Step into - Means, if you decided to Step into, and you don't want to continue, it will continue the execution in the background and will return you back to the main() method.

		//Don't forget, there's:
		//1- Normal mode.
		//2- Debug mode.
		//You can switch between both modes from the buttons below to the X sign at the top right screen.

		highest(math, computer, music); // calling the method highest and passing three parameters
		lowest(math, computer, music);  // calling the method lowest and passing three parameters
		total(math, computer, music);   // calling the method total and passing three parameters
		average(math, computer, music); // calling the method average and passing three parameters
	}

	public static void highest(double math1, double computer1, double music1)
	{
		if((math1>computer1) && (math1>music1))
			System.out.println("Highest mark is: " + math1);
		else if ((computer1>math1) && (computer1>music1))
			System.out.println("Highest mark is: " + computer1);
		else
			System.out.println("Highest mark is: " + music1);	
	}

	public static void lowest(double math2, double computer2, double music2)
	{
		if((math2<computer2) && (math2<music2))
			System.out.println("Lowest mark is: " + math2);
		else if ((computer2<math2) && (computer2<music2))
			System.out.println("Lowest mark is: " + computer2);
		else
			System.out.println("Lowest mark is: " + music2);
	}

	public static void total(double math2, double computer2, double music2)
	{
		System.out.println("Total mark is: " + (math2+computer2+music2));
	}

	public static void average(double math3, double computer3, double music3)
	{
		System.out.println("Average mark is: " + (math3+computer3+music3)/3);
	}
}
