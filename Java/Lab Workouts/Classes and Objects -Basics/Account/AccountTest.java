import java.util.Scanner;

//import java.util.Scanner;

public class AccountTest {
	public static void main(String args[]){
		
	/*	Account account1 = new Account();
		
		System.out.println(account1);
		System.out.println(account1.getName());

		Scanner dataInput = new Scanner(System.in);
		System.out.println("Enter the account name: ");
		String inputName = dataInput.nextLine();
		account1.setName(inputName);
		System.out.println(account1.getName());
		
		account1.setName("Khalid");
		
		System.out.println(account1);
		System.out.println(account1.getName());	
		
		---------------------------------------------------------- */
		
		Account account2 = new Account("Ahmad" , 10000.50);
		System.out.println(account2);
		System.out.println(account2.getName() + " " + account2.getBalance());
		
		account2.deposit(-5000);
		account2.withdraw(11000);
		account2.withdraw(-11000);
		account2.deposit(0.50);
		System.out.println(account2.getName() + " " + account2.getBalance());
		account2.withdraw(1);
		System.out.println(account2.getName() + " " + account2.getBalance());
		
	}
}