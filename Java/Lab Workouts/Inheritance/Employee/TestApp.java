package test;

import model.*;

public class TestApp {

	public static void main(String[] args) {
/*		Employee emp1 = new Employee();
		emp1.setId(123);
		emp1.setName("Khalid");
		emp1.setNoOfChild(2);
		System.out.printf("Emp. Name is: %s, Emp. ID is: %d and No. of child is: %d.\n",
				emp1.getName(), emp1.getId() , emp1.getNoOfChild());
		*/
		
		Employee emp2=new Employee(124, "Ameen",1);
//		emp2.setId(123);
		System.out.println(emp2);
		System.out.println('\n');
		System.out.println(emp2.toString());
	}

}
