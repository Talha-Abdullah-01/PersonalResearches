package model;

public class Vehicle {
	private int wheels;
	private int weight;

	public Vehicle() {
	}

	public Vehicle(int wheels, int weight) {
		this.wheels = wheels;
		this.weight = weight;
	}

	public int getWheels() {
		return wheels;
	}

	public void setWheels(int wheels) {
		this.wheels = wheels;
	}

	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public final String getClassName() {
		String className = getClass().toString();//full className.	
		//System.out.println("\n" + className + "\n");
		return className.substring(className.lastIndexOf(".")+1);//class name
	}

	@Override
	public String toString() {
		String dashes="";
		
		for(int i = 0; i < getClassName().length() ; i++)
			dashes+="-";

		return    "\n" + getClassName()
		+ "\n" + dashes
		+ "\n    wheels      : "+ wheels
		+ "\n    weight      : "+ weight;
	}
	
	public String getAsCSV() 
	{
		return wheels+", "+weight+","+getClassName();
	}
}
