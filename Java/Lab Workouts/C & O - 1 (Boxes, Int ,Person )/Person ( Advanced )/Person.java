public class Person {
	
	private String firstName;
	private String lastName;
	private int age;
	private double weight;
	private double height;

	public Person( String firstName, String lastName, int age ) {
		/*this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;*/
		
		setFirstName(firstName);
		setLastName(lastName);
		setAge(age);
	} // end Person constructor
	
	public Person(String firstName, String lastName, int age, double weight, double height) {
		//super(); // it's the default constractor belongs to the father class - Object in capital 'O'
		this(firstName, lastName, age);
		this.weight = weight;
		setHeight(height);
	}

	public String getFirstName() {
		return firstName;
	} // end method getFirstName
	
	public void setFirstName( String first ) {
		firstName = first;
	} // end method setFirstName
	
	public String getLastName() {
		return lastName;
	} // end method getLastName
	
	public void setLastName( String last ) {
		lastName = last;
	} // end method setLastName
	
	public int getAge() {
		return age;
	} // end method getAge
	
	public void setAge( int years ) {
		if ( years > 0 )
			age = years;
	} // end method setAge
	
	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	public double getHeight() {
		return height;
	}

	public void setHeight(double height) {
		this.height = height;
	}
	
	public double getBMI() {
		if(weight>0 && height>0)
			return weight/Math.pow(height,2);
		else
			return 0;
	}
} 