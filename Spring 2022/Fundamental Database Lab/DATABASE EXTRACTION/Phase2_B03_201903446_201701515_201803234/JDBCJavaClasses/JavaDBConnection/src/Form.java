import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;

import oracle.jdbc.proxy.annotation.Pre;

import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.awt.event.ActionEvent;

public class Form extends JFrame {

	private JPanel contentPane;
	JLabel checkPass;
	JButton btnLogin;
	int intPass;
	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Form frame = new Form(null,0);
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 * @param passedString 
	 * @param passedValue 
	 */
	public Form(String passedString, int passedValue) {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 252, 292);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		checkPass = new JLabel("");
		checkPass.setVisible(true);
		checkPass.setBounds(378, 11, 46, 27);
		contentPane.add(checkPass);
		
		btnLogin = new JButton("Login Information\r\n");
		btnLogin.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				if(passedValue>1) {
					JOptionPane.showMessageDialog(null, "Only Admins can view this information");
				}
				else {
					LogInDetailsAdmin r=new LogInDetailsAdmin();
					r.setVisible(true);
				}
			}
		});
		btnLogin.setBounds(50, 40, 143, 23);
		contentPane.add(btnLogin);
		
		JButton btnTopics = new JButton("Topics Forms");
		btnTopics.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				TopicsForm t=new TopicsForm(passedValue,passedString);
				t.setVisible(true);
			}
		});
		btnTopics.setBounds(50, 87, 143, 23);
		contentPane.add(btnTopics);
//		System.out.println("This is int pass"+passedValue);
		
		JButton btnMedicationForms = new JButton("Medication Forms");
		btnMedicationForms.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
			 if(passedValue==1) {
				 JOptionPane.showMessageDialog(null, "Admins Cannot access Medication Information");
			 }
			 else {
				 MedicationForum m=new MedicationForum(passedString,passedValue);
				 m.setVisible(true);
			 }
			}
		});
		btnMedicationForms.setBounds(50, 135, 143, 23);
		contentPane.add(btnMedicationForms);
		JButton btnDoctorRatingForums = null;
		if(passedValue==1) {
		btnDoctorRatingForums = new JButton("Ratings Summary\r\n");
		btnDoctorRatingForums.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				Connection conn;
				try {
					conn = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
					String sqlget="SELECT r.DOC_ID, AVG(r.RAT_RATING) FROM RATING r GROUP BY r.DOC_ID";
					PreparedStatement p1=conn.prepareStatement(sqlget);
					ResultSet r=p1.executeQuery();
					ArrayList<Integer> dID=new ArrayList<>();
					ArrayList<Double> avg=new ArrayList<>();
					while(r.next()) {
						int d=r.getInt(1);
						double a=r.getDouble(2);
						dID.add(d);
						avg.add(a);
					}
					StringBuilder builder = new StringBuilder("<html>"); 
					builder.append("Summary of Ratings per Doctor ID");
					builder.append("<br>");
					for (int i = 0; i < dID.size(); i++) {
					    builder.append("Doctor_ID : "+ dID.get(i)+" has a rating of "+avg.get(i));
					    builder.append("<br>");
					}
					builder.append("</html>");
					JOptionPane.showMessageDialog
					    (null, builder.toString(), "Printing results", JOptionPane.INFORMATION_MESSAGE);
				} catch (SQLException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
				
				
			}
		});
		}
		if(passedValue==2) {
		btnDoctorRatingForums = new JButton("View Your Rating\r\n");
		btnDoctorRatingForums.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				try {
					Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
					String sqlget="select * from Doctors where Username=?";
					PreparedStatement p1=conn.prepareStatement(sqlget);
					p1.setString(1, passedString);
					int getDocID=0;
					ResultSet rs = p1.executeQuery();
					while(rs.next()) {
						getDocID=rs.getInt(1);
					}
					String sql="select * from Rating where DOC_ID=?";
					PreparedStatement p=conn.prepareStatement(sql);
					p.setInt(1, getDocID);
					ResultSet r2=p.executeQuery();
					ArrayList<Integer> ratingsOfDoctor=new ArrayList<>();
					while(r2.next()) {
						int rating=r2.getInt(3);
						ratingsOfDoctor.add(rating);
					}
					double totalRatings=0;
					for(int i=0;i<ratingsOfDoctor.size();i++) {
						totalRatings+=ratingsOfDoctor.get(i);
					}
					JOptionPane.showMessageDialog(null, String.format("Your Current Rating is : %.2f",totalRatings));
				} catch (SQLException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
			}
		});
		}
		if(passedValue==3) {
		btnDoctorRatingForums = new JButton("Doctor Ratings\r\n");
		btnDoctorRatingForums.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				Connection conn;
				int pID=0;
				try {
					conn = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
					String sqlget="select * from Patient where Username=?";
					PreparedStatement p1=conn.prepareStatement(sqlget);
					p1.setString(1,passedString);
					ResultSet r=p1.executeQuery();
					while(r.next()) {
						pID=r.getInt(1);
					}
					RatingsForum r2=new RatingsForum(pID);
					r2.setVisible(true);
				} catch (SQLException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
				
				
			}
		});
		}
		btnDoctorRatingForums.setBounds(50, 184, 143, 23);
		contentPane.add(btnDoctorRatingForums);
	}
}
