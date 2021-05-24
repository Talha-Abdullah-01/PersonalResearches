package model;

public class Person {
	private int id;
	private String name;
	
	public Person() {
		super();
	}

	public Person(int id, String name) {
		super();
		System.out.println("Person constructor is called now.\n");
		this.id = id;
		this.name = name;
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

	@Override
	public String toString() {
		return id + ", " + name;
	}
	

}
