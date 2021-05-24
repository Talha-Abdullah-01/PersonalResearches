
public class Account {

	private String name; //instance variable, Data members, Att.
	private double balance;

	public Account() {
		name = "Not yet intialized.";
	}

	public Account(String name, double balance) {
		this.name = name;
		//this.balance = balance;
		setBalance(balance);
	}

	//List of methods
	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		if(balance>=0)
			this.balance = balance;
		else
			System.out.println("Invalid balance");
	}

	public String getName() { //This method will return "read" the name of the object.
		return name; 
	}

	public void setName(String name) { //This method will change "write" the name of the object.
		this.name = name;
	}

	public void deposit(double amount) {
		if(amount>0)
			balance+=amount;
		else
			System.out.println("Invalid deposit.");
	}

	public void withdraw(double amount) {
		if(amount<=0)
			System.out.println("Invalid withdraw amount.");
		else if(amount<=balance)
			balance-=amount;
		else
			System.out.println("No enough balance.");
	}
}
