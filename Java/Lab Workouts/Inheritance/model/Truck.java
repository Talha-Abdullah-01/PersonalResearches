package model;


public class Truck extends Vehicle{

	private int wheels;
	private double weight;
	private int load;

	public Truck(){}

	//***********************START
	


	public String toString() {
		String s= super.toString()+"\nload: " + load + "\nwheel load:"+getWheelLoad();
		return s;
	}
	
	public Truck(int wheels, double weight, int load) {
		super();
		this.wheels = wheels;
		this.weight = weight;
		this.load = load;
	}

	//***********************END

	public double getWheelLoad()
	{
		return (load + getWeight() )/ (double)getWheels();
	}

	public String getAsCSV() 
	{
		return super.getAsCSV()+","+load;
	}
}