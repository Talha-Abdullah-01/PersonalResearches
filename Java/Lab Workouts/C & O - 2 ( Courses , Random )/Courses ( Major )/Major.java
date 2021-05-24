import javax.swing.JOptionPane;

public class Major {
	
	private int majorId;
	private String title;
	private int hostDeptId;
	private int totalCreditHours;
	
	public Major() {
		super();
		this.majorId = 999;
		this.title = "Unknown";
		this.hostDeptId = 888;
		this.totalCreditHours = 0;
	}
	
	public Major(int majorId, String title, int hostDeptId, int totalCreditHours) {
		//super();
		this.majorId = majorId;
		this.title = title;
		this.hostDeptId = hostDeptId;
		this.totalCreditHours = totalCreditHours;
	}


	public int getMajorId() {
		return majorId;
	}


	public void setMajorId(int majorId) {
		this.majorId = majorId;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public int getHostDeptId() {
		return hostDeptId;
	}


	public void setHostDeptId(int hostDeptId) {
		this.hostDeptId = hostDeptId;
	}


	public int getTotalCreditHours() {
		return totalCreditHours;
	}


	public void setTotalCreditHours(int totalCreditHours) {
		this.totalCreditHours = totalCreditHours;
	}
	
	public void display()
	{
		System.out.println("Major id: " + majorId);
		System.out.println("Title: " + getTitle());
		System.out.println("Host Dept. ID: " + hostDeptId);
		System.out.println("Total Credit Hours: " + getTotalCreditHours());
		
		System.out.printf("Major id: %d\nTitle: %s\nHost Dept. ID: %d\nTotal Credit Hours: %d.\n" , 
				getMajorId(), title, getHostDeptId(),  totalCreditHours);
	}
	
	public void guiDisplay()
	{	
		JOptionPane.showMessageDialog(null, "Major id: " + majorId + "\nTitle: " + getTitle() + 
				"\nHost Dept. ID: " + hostDeptId + "\nTotal Credit Hours: " + getTotalCreditHours());
	}

}
