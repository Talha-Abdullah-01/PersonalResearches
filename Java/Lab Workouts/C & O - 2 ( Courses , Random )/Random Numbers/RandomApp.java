import java.util.Random;

import javax.swing.JOptionPane;

public class RandomApp {

	public int generateRandom()
	{
		Random random = new Random();
		return random.nextInt(10)+1; // 0-9 ==> 1-10
		
	}
	
	public boolean generateQuestion()
	{
		int ranNumber1 = generateRandom();
		int ranNumber2 = generateRandom();
		String answerString = JOptionPane.showInputDialog("How much is " + ranNumber1 + " times " + ranNumber2 + "?");
		int answerInt = Integer.parseInt(answerString);
		if (answerInt == (ranNumber1*ranNumber2))
			return true;
		else
			return false;
	}

}
