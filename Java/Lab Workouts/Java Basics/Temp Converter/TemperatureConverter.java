
public class TemperatureConverter {

	public static void main(String args[]) {
		//The following code is to test the No. of empty spaces produced by '\t'
		//System.out.println("\t" + "." + "\n123456789");
		
		System.out.println("Fahrenheit" + "\t" + "Centigrade");

		//for (int fahr=0;fahr<=100; fahr+=10) //This is the original for loop - It will be executed 10 times.
		for (int fahr=0;fahr<=0; fahr+=10) //I have changed the condition her in order to be executed for one time.
		{
			double centigrade = 5.0*(fahr-32)/9.0;
			//System.out.println(fahr+"\t"+centigrade);
			System.out.printf("%10d\t%10.2f%s\n",fahr,centigrade," Temp. Converter");
			System.out.printf("%10d" + "\t" + "%10.2f" + "%s" + "%s"+ "\n",fahr,centigrade," Temp.", " Converter");
			
			//String.format(); = Class.method(); = The class name is String and the method name is format()
			
			//create a String variable and save the output after using the format method into that variable
			String outputLine = String.format("%10d" + "\t" + "%10.2f" + "%s" + "%s"+ "\n",fahr,centigrade," Temp.", " Converter");
			System.out.println(outputLine);
		}
	}
}