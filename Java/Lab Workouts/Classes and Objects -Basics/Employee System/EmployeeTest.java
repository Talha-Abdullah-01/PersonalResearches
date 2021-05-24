
public class EmployeeTest {
	public static void main(String args[]) {
		Employee emp1 = new Employee("Ahmad", "Mohammad", 10000);
		Employee emp2 = new Employee("Mohammad", "Khalid", 20000);

		System.out.printf("Employee 1: %s %s; Yearly Salary: %.2f\n",
				emp1.getfName(), emp1.getlName(), emp1.getSalary()*12);
		
		System.out.printf("Employee 2: %s %s; Yearly Salary: %.2f\n",
				emp2.getfName(), emp2.getlName(), emp2.getSalary()*12);
		
		System.out.println("\nIncreasing employee salaries by 10%: ");
		
		emp1.setSalary(emp1.getSalary() * 1.1);
		emp2.setSalary(emp2.getSalary() + (emp2.getSalary() * 0.1));
		
		System.out.printf("Employee 1: %s %s; Yearly Salary: %.2f\n",
				emp1.getfName(), emp1.getlName(), emp1.getSalary()*12);
		
		System.out.printf("Employee 2: %s %s; Yearly Salary: %.2f\n",
				emp2.getfName(), emp2.getlName(), emp2.getSalary()*12);

	}
}