
public class SavingAccount {
	private int accountNo;
	private double balance;
	private Date openDate;
	private static double interestRate;
	private static int noOfObjects;

	public SavingAccount(int accountNo, double balance, Date openDate) {
		this(accountNo, balance);
		this.openDate = openDate;
	}

	public static SavingAccount heighest(SavingAccount accounts[])
	{
		SavingAccount max = accounts[0];
		for (SavingAccount object : accounts)
			if(object.getBalance() > max.getBalance())
				max = object;
		
		return max;
	}

	public SavingAccount(int accountNo, double balance) {
		super();
		this.accountNo = accountNo;
		this.balance = balance;
		openDate = new Date(1,1,2010);
		noOfObjects++;
		//this.interestRate = interestRate;
	}

	public Date getOpenDate() {
		return openDate;
	}

	public int getAccountNo() {
		return accountNo;
	}
	public void setAccountNo(int accountNo) {
		this.accountNo = accountNo;
	}
	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}
	public static double getInterestRate() {
		return interestRate;
	}
	public static void setInterestRate(double interestRate) {
		SavingAccount.interestRate = interestRate;
	}

	//This method will be used in order to print out the content of any SavingAccout object.
	public String toString() {
		return "Account No.: " + accountNo + "\nBalance: " + balance +
				"\nInterest rate: " + interestRate + "\nOpen date: " + openDate + ", No. of Objects created: " + noOfObjects;
	}	
}