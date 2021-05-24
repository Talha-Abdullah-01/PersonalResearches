import javax.swing.JOptionPane;

public class RandomAppTest {
	
	public static void main(String args[])
	{
		int answer;
		do {
			RandomApp random = new RandomApp();
			if(random.generateQuestion())
				JOptionPane.showMessageDialog(null, "Well done, your answer is correct.");
			else
				JOptionPane.showMessageDialog(null, "Sorry, your answer is incorrect.");
			
			answer = JOptionPane.showConfirmDialog(null,"Do you want to continue?");

		}while(answer == JOptionPane.YES_OPTION);
	}

}