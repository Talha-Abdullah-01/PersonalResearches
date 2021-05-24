
public class MajorTest {
	public static void main(String args[])
	{
		Major m1 = new Major(1, "CS", 10, 130);
		Major m2 = new Major(2, "CE", 11, 137);
		Major m3 = new Major();
		
		m1.display();
		m1.guiDisplay();
		m2.display();
		m2.guiDisplay();
		m3.display();
		m3.guiDisplay();	
	}
}