
public class SavingAccountTest {
	
	public static boolean sameDay(Customer cust1, Customer cust2)
	{
		String date1 = cust1.getAccount().getOpenDate().toString();
		String date2 = cust2.getAccount().getOpenDate().toString();
		
		if(date1.equals(date2))
			return true;
		else
			return false;
	}
	
	public static void main(String[] args) {
		
		Customer cust1 = new Customer(1, "Ahmad", new SavingAccount(1, 1000, new Date(10,11,2021)));
		Customer cust2 = new Customer(2, "Mohammad", new SavingAccount(2, 2000, new Date(10,12,2021)));
		
		System.out.println(sameDay(cust1, cust2));
/*		
		SavingAccount acc0 = new SavingAccount(0,3000);
		SavingAccount acc1 = new SavingAccount(1,6000);
		//System.out.println(acc1);
		
		SavingAccount acc2 = new SavingAccount(2,4000);
		System.out.println(acc0);
		System.out.println(acc1);
		System.out.println(acc2);
		
		System.out.println("\nAfter updating\n=================");
		acc1.setBalance(3500);
		SavingAccount.setInterestRate(0.07);
		System.out.println(acc0);
		System.out.println(acc1);
		System.out.println(acc2);

		acc2.setBalance(4500);
		SavingAccount.setInterestRate(0.09);
		System.out.println(acc0);
		System.out.println(acc1);
		System.out.println(acc2);
		
		
		SavingAccount acc3 = new SavingAccount(3, 3000, new Date(10,10,2010) );
		System.out.println(acc3);
*/
		}
}