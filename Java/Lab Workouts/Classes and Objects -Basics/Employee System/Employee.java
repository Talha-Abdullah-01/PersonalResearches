
public class Employee {
	private String fName;
	private String lName;
	private double salary;
	
	public Employee(String fName, String lName, double salary) {
		super();
		this.fName = fName;
		this.lName = lName;
		setSalary(salary);
	}
	
	public String getfName() {
		return fName;
	}
	public void setfName(String fName) {
		this.fName = fName;
	}
	public String getlName() {
		return lName;
	}
	public void setlName(String lName) {
		this.lName = lName;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		if(salary>0)
			this.salary = salary;
	}
	

}
