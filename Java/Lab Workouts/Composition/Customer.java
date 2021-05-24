
public class Customer {
	private int id;
	private String name;
	private SavingAccount account;
	
	public Customer(int id, String name, SavingAccount account) {
		super();
		this.id = id;
		this.name = name;
		this.account = account;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public SavingAccount getAccount() {
		return account;
	}
	public void setAccount(SavingAccount account) {
		this.account = account;
	}

	@Override
	public String toString() {
		return "Customer [id=" + id + ", name=" + name + ", account=" + account + "]";
	}
	

}
