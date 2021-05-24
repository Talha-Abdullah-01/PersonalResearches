package test;

import model.Person;

public class Employee extends Person{
	private int noOfChild;
	
	public Employee() {
		super();
		id = 0;					// Accepted, as id declared as a protected data member in different package and Employee inherits Person class.
		name = "";				// Accepted, as name declared as a protected data member in different package and Employee inherits Person class.
	}

	public Employee(int noOfChild) {
		super();
		this.noOfChild = noOfChild;
	}

	public Employee(int id, String name, int noOfChild) {
		super(id, name);
		this.id = id;			// Accepted, as id declared as a protected data member in different package and Employee inherits Person class.
		setId(id);
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
		return super.toString() + ", " + noOfChild ;
	}
	

}
