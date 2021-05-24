import java.util.Scanner;
public class ArrayApp {
	
	public static void main(String[] args){
		
/*		int arr[] = new int[5];
		Scanner input = new Scanner(System.in);
		
		for(int i=0;i<arr.length;i++){
			System.out.print("Enter element no. "+i +" -->");
			arr[i] = input.nextInt();
		}
		input.close();	*/
		
		int arr1[] = {1,2,3,2,5};
		for(int i=0 ; i<arr1.length ; i++)
			System.out.print(arr1[i] + " ");

		replace(arr1, 2, 9 );
		System.out.println("\n");
		
		for(int i=0 ; i<arr1.length ; i++)
			System.out.print(arr1[i] + " ");
		
	}
	
	public static void replace(int numbers[], int oldValue, int newValue)
	{
		for(int i=0 ; i<numbers.length ; i++)
			if(numbers[i] == oldValue)
				numbers[i] = newValue;
	}
}