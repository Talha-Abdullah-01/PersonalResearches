import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JLabel;
import javax.swing.JOptionPane;

import java.awt.Font;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.GregorianCalendar;

import javax.swing.JTextField;
import javax.swing.JComboBox;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class RatingsForum extends JFrame {

	private JPanel contentPane;
	private JTextField textField;
	private JTextField textField_1;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					RatingsForum frame = new RatingsForum(0);
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public RatingsForum(int pID) {
		setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
		setBounds(100, 100, 446, 387);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JLabel lblNewLabel = new JLabel("Rating Forum\r\n");
		lblNewLabel.setFont(new Font("Tahoma", Font.BOLD, 15));
		lblNewLabel.setBounds(139, 11, 111, 28);
		contentPane.add(lblNewLabel);
		
		JLabel lblNewLabel_1 = new JLabel("Choose Doctor To Rate\r\n");
		lblNewLabel_1.setBounds(45, 71, 171, 39);
		contentPane.add(lblNewLabel_1);
		
		JComboBox comboBox = new JComboBox();
		try {
			Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
			String sqlget="select * from Doctors";
			PreparedStatement p1=conn.prepareStatement(sqlget);
			ResultSet r=p1.executeQuery();
			ArrayList<String> nameOfDoctors=new ArrayList<>();
			while(r.next()) {
				String dr=r.getString(5);
				nameOfDoctors.add(dr);
			}
			for(int i=0;i<nameOfDoctors.size();i++) {
				comboBox.addItem(nameOfDoctors.get(i));
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		comboBox.setBounds(245, 79, 141, 22);
		contentPane.add(comboBox);
		
		JLabel lblNewLabel_2 = new JLabel("Rating (1-5)");
		lblNewLabel_2.setBounds(45, 145, 112, 14);
		contentPane.add(lblNewLabel_2);
		
		textField = new JTextField();
		textField.setBounds(245, 142, 141, 20);
		contentPane.add(textField);
		textField.setColumns(10);
		
		textField_1 = new JTextField();
		textField_1.setBounds(245, 196, 141, 20);
		contentPane.add(textField_1);
		textField_1.setColumns(10);
		
		JLabel lblNewLabel_3 = new JLabel("Comment\r\n");
		lblNewLabel_3.setBounds(45, 199, 112, 14);
		contentPane.add(lblNewLabel_3);
		
		JButton btnNewButton = new JButton("Submit\r\n");
		btnNewButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				if(textField.getText().equals("") || textField_1.equals("")) {
					JOptionPane.showMessageDialog(null, "Please Enter all the Rating Informations");
				}
				else {
				Object Item=comboBox.getSelectedItem();
				String value=(String) Item;
				int rating=Integer.parseInt(textField.getText().trim());
				String rating_comment=textField_1.getText();
				if(rating<0 || rating>5) {
					JOptionPane.showMessageDialog(null, "Ratings should be either 1,2,3,4 or 5");
				}
				else {
					Connection conn;
					try {
						conn = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
						String sqlget1="select * from Doctors where Username=?";
						PreparedStatement p=conn.prepareStatement(sqlget1);
						p.setString(1, value);
						ResultSet r=p.executeQuery();
						int drno=0;
						int RatingID=0;
						while(r.next()) {
							drno=r.getInt(1);
						}
						String sqlget="select * from Rating where PAT_ID=? AND DOC_ID=?";
						PreparedStatement p1=conn.prepareStatement(sqlget);
						p1.setInt(1,pID);
						p1.setInt(2, drno);
						ResultSet r1=p1.executeQuery();
						boolean checkEmpty=false;
						if(r1.next()==false) {
							checkEmpty=true;
						}
						else {
							RatingID=r1.getInt(1);
						}
						System.out.println("CheckEmpty is "+checkEmpty);
						if(checkEmpty) {
							String sqlratings="select * from Rating";
							PreparedStatement p3=conn.prepareStatement(sqlratings);
							ArrayList<Integer> Rat_IDArr=new ArrayList<>();
							ResultSet r5=p3.executeQuery();
							while(r5.next()) {
								int ratID=r5.getInt(1);
								Rat_IDArr.add(ratID);
							}
							int min = 1000;
						    int max = 9999;  
						      //Generate random int value from 1000 to 9999
						    int random_int=0;
						    do {
						     random_int= (int)Math.floor(Math.random()*(max-min+1)+min);
						    }while(Rat_IDArr.contains(random_int));
						    java.util.Calendar cal = new GregorianCalendar();
							String sqlCreate="Insert into Rating values(?,?,?,?,?,?)";
							PreparedStatement p2=conn.prepareStatement(sqlCreate);
							p2.setInt(1, random_int);
							p2.setDate(2, new java.sql.Date(cal.getTime().getTime()), cal);
							p2.setInt(3,rating);
							p2.setString(4, rating_comment);
							p2.setInt(5, pID);
							p2.setInt(6, drno);
							p2.executeUpdate();
							JOptionPane.showMessageDialog(null, "Rating is Added");
							
						}
						else {
							String sqlAlterate="Update Rating set Rat_Rating=?, RAT_Comment=? where RAT_ID=?";
							PreparedStatement p3=conn.prepareStatement(sqlAlterate);
							p3.setInt(1,rating);
							p3.setString(2, rating_comment);
							p3.setInt(3, RatingID);
							p3.executeUpdate();
							JOptionPane.showMessageDialog(null, "Your Previous Rating has been updated");
						}
					} catch (SQLException e1) {
						// TODO Auto-generated catch block
						e1.printStackTrace();
					}
					
				}
				}
			}
		});
		btnNewButton.setBounds(177, 277, 89, 23);
		contentPane.add(btnNewButton);
	}
}
