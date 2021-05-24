
public class Test {
	public static void main(String args[])
	{
/*		int a[] = {1, 2, 3}; 
		int b[]; // the memory address is null
		b = a;	// change the memory address for b from null to the same memory address of a.

		System.out.println("a[0] = " + a[0]);
		System.out.println("b[0] = " + b[0]);
		a[0] = 0;
		System.out.println("a[0] = " + a[0]);
		System.out.println("b[0] = " + b[0]);	*/
		
		
		int a[] = {1, 2, 3}; 
		int b[] = {4, 5, 6}; 
		b = a;	// change the memory address for b from null to the same memory address of a.

		System.out.println("a[0] = " + a[0]);
		System.out.println("b[0] = " + b[0]);
		a[0] = 0;
		System.out.println("a[0] = " + a[0]);
		System.out.println("b[0] = " + b[0]);
		
		System.out.println(a.length);
		
	}

}
