import java.util.Scanner;
public class AccountArrayTest {
	
	public static void main(String arg[]) {
		
		Scanner input = new Scanner(System.in);
		Date openDate = new Date(24, 3, 2016);//All accounts are opened on this date.
		SavingAccount.setInterestRate(0.05);
	
		System.out.println("Enter the size of the array:");
		int size = input.nextInt();
		SavingAccount accounts[] = new SavingAccount[size];
		
		for (int i = 0; i < accounts.length; i++) {
			System.out.println("Enter account number");
			int accountNo = input.nextInt();
			System.out.println("Enter initial balance");
			double balance = input.nextDouble();
			accounts[i] = new SavingAccount(accountNo, balance, openDate);
		}
		
		System.out.println("Accounts List:");
		for(int i=0 ; i<accounts.length ; i++)
			System.out.println(accounts[i].toString());

		//System.out.println("Account No: " + accounts[i].getAccountNo());
		
		System.out.println("The object has the maximum balance is: " + SavingAccount.heighest(accounts));
		

		
		input.close();
	}
}