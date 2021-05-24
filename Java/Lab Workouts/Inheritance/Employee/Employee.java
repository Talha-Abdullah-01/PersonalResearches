package model;

public class Employee extends Person{
	private int noOfChild;
	
	public Employee(int id, String name, int noOfChild) {
		super(id, name);
		System.out.println("Employee constructor is called now.\n");
//		this.id = id;
//		setId(id);
		this.noOfChild = noOfChild;
	}

	public Employee() {
		super();
	}
	
	public Employee(int noOfChild) {
		super();
		this.noOfChild = noOfChild;
	}
	
	

	public int getNoOfChild() {
		return noOfChild;
	}

	public void setNoOfChild(int noOfChild) {
		this.noOfChild = noOfChild;
	}

	@Override
	public String toString() {
		return  super.toString() + ", " + noOfChild ;
	}
	

}
