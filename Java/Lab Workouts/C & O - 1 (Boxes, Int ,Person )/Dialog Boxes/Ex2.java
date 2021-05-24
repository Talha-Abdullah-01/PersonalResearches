import javax.swing.JOptionPane;
//   Package.sub package.Class 

public class Ex2 {

	public static void main(String[] args) {
		
		int n1, n2, sum, response;
		String firstNumber, secondNumber;
		
		do {
			// obtain user input (as String) from JOptionPane input dialogs
			firstNumber = JOptionPane.showInputDialog("Enter first integer");  // "1" ==> 1
			secondNumber = JOptionPane.showInputDialog("Enter second integer");// "2" ==> 2

			// convert String inputs to int values for use in a calculation
			n1 = Integer.parseInt(firstNumber);
			n2 = Integer.parseInt(secondNumber);
			sum = n1 + n2;
			int product = n1*n2;
			
			JOptionPane.showMessageDialog(null, "Sum = " + sum);
			JOptionPane.showMessageDialog(null, "Product = " + product);
			
			response = JOptionPane.showConfirmDialog(null, "Do you want to continue?", "Confirm", JOptionPane.YES_NO_OPTION);
			
			/*
			if(response == JOptionPane.YES_OPTION)
				System.out.println("User select YES.");
			else if(response == JOptionPane.NO_OPTION)
				System.out.println("User select NO.");
			else
				System.out.println("User select CANCEL.");
			*/
			
			/*
			System.out.println("Response = " + response);
			System.out.println("JOptionPane.YES_OPTION value is: " + JOptionPane.YES_OPTION);
			System.out.println("JOptionPane.NO_OPTION value is: " + JOptionPane.NO_OPTION);
			System.out.println("JOptionPane.CANCEL_OPTION value is: " + JOptionPane.CANCEL_OPTION);
			*/
			
		} while (response == JOptionPane.YES_OPTION);
	}

}
