import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JButton;
import javax.swing.JTextField;
import java.awt.Font;
import java.awt.event.ActionListener;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.awt.event.ActionEvent;

public class UserProcess extends JFrame {

	private JPanel contentPane;
	private JTextField textField;
	private JTextField textField_1;
	private JTextField textField_2;
	private JTextField textField_3;
	private JTextField textField_4;
	int decisionPass;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					UserProcess frame = new UserProcess(1,null);
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 * @param i 
	 * @param object 
	 */
	public UserProcess(int i, String object) {
		setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
		setBounds(100, 100, 418, 491);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		if(i==1) {
		JLabel lblNewLabel = new JLabel("Add User");
		lblNewLabel.setFont(new Font("Tahoma", Font.BOLD, 15));
		lblNewLabel.setBounds(142, 49, 89, 23);
		contentPane.add(lblNewLabel);
		}
		if(i==2) {
			JLabel lblNewLabel = new JLabel("Update User");
			lblNewLabel.setFont(new Font("Tahoma", Font.BOLD, 13));
			lblNewLabel.setBounds(142, 49, 89, 23);
			contentPane.add(lblNewLabel);
		}
		JLabel lblUsername = new JLabel("Username");
		lblUsername.setBounds(45, 113, 98, 14);
		contentPane.add(lblUsername);
		
		JLabel lblPassword = new JLabel("Password");
		lblPassword.setBounds(45, 160, 82, 14);
		contentPane.add(lblPassword);
		
		JLabel lblFname = new JLabel("Fname");
		lblFname.setBounds(45, 208, 82, 14);
		contentPane.add(lblFname);
		
		JLabel lblLastname = new JLabel("Lastname");
		lblLastname.setBounds(45, 256, 82, 14);
		contentPane.add(lblLastname);
		String username = null;
		String password = null;
		String fname = null;
		String lname = null;
		int usertype_id = 0;
		JLabel lblUsertypeid = new JLabel("UsertypeID");
		lblUsertypeid.setBounds(45, 306, 98, 14);
		contentPane.add(lblUsertypeid);
		if(i==1) {
		JButton btnNewButton = new JButton("Add User");
		btnNewButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				if(textField.getText()=="" || textField_1.getText()=="" || textField_2.getText()=="" ||textField_3.getText()=="" ||textField_4.getText()=="") {
					JOptionPane.showMessageDialog(null, "The fields cannot be empty");
				}
				int checkno=Integer.parseInt(textField_4.getText().trim());
				
				
				if(checkno==1 || checkno==2 || checkno==3) {
					Connection conn;
					try {
						conn = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
						 java.util.Calendar cal = new GregorianCalendar();
						String username=textField.getText();
						String password=textField_1.getText();
						String fname=textField_2.getText();
						String lname=textField_3.getText();
						int typeno=Integer.parseInt(textField_4.getText().trim());
						String sql="INSERT INTO USERS VALUES(?,?,?,?,?,?)";
						PreparedStatement p=conn.prepareStatement(sql);
						p.setString(1, username);
						p.setString(2, password);
						p.setDate(3, new java.sql.Date(cal.getTime().getTime()), cal);
						p.setString(4, fname);
						p.setString(5,lname);
						p.setInt(6,typeno);
						p.executeUpdate();
						JOptionPane.showMessageDialog(null, "User Added");
						dispose();
					} catch (SQLException e1) {
						// TODO Auto-generated catch block
						e1.printStackTrace();
					}
					
				}	
				else {
					JOptionPane.showMessageDialog(null, "Field Usertype_ID must have values 1,2, or 3");	
				}
			
			}
		});
		btnNewButton.setBounds(162, 377, 89, 23);
		contentPane.add(btnNewButton);
		}
		else {
			JButton btnNewButton = new JButton("Update");
			Connection conn;
			try {
				conn = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
				String sql="select * from Users where Username=?";
				PreparedStatement p=conn.prepareStatement(sql);
				p.setString(1, object);
				ResultSet r=p.executeQuery();
				
				while(r.next()) {
					username=r.getString(1);
					password=r.getString(2);
					fname=r.getString(4);
					lname=r.getString(5);
					usertype_id=r.getInt(6);
				}
				btnNewButton.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent e) {
				String newusername=textField.getText();
				String newpassword=textField_1.getText();
				String newfname=textField_2.getText();
				String newlname=textField_3.getText();
				int newtypeno=Integer.parseInt(textField_4.getText().trim());
				try {
					Connection conn1 = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
					String newsql="UPDATE USERS SET PASSWORD=?, FNAME=?,LNAME=?,USERTYPE_ID=? WHERE USERNAME=?";
					PreparedStatement p1;
					p1 = conn1.prepareStatement(newsql);
					p1.setString(1, newpassword);
					p1.setString(2, newfname);
					p1.setString(3,newlname);
					p1.setInt(4,newtypeno);
					p1.setString(5,newusername);
					p1.executeUpdate();
					JOptionPane.showConfirmDialog(null, "The User information will be updated. Do you want to continue?");
					JOptionPane.showMessageDialog(null, "User Updated");
					dispose();
				} catch (SQLException e2) {
					// TODO Auto-generated catch block
					e2.printStackTrace();
				}
				
					}
				});
				btnNewButton.setBounds(162, 377, 89, 23);
				contentPane.add(btnNewButton);
			
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		};
		System.out.println(username);
			
		textField = new JTextField();
		textField.setBounds(179, 110, 119, 20);
		contentPane.add(textField);
		textField.setColumns(10);
		
		
		textField_1 = new JTextField();
		textField_1.setBounds(179, 157, 119, 20);
		contentPane.add(textField_1);
		textField_1.setColumns(10);
		
		textField_2 = new JTextField();
		textField_2.setBounds(179, 205, 119, 20);
		contentPane.add(textField_2);
		textField_2.setColumns(10);
		
		textField_3 = new JTextField();
		textField_3.setBounds(179, 256, 119, 20);
		contentPane.add(textField_3);
		textField_3.setColumns(10);
		
		textField_4 = new JTextField();
		textField_4.setBounds(179, 303, 119, 20);
		contentPane.add(textField_4);
		textField_4.setColumns(10);
		if(i==2) {
			textField.setText(username);
			textField.setEnabled(false);
			textField_1.setText(password);
			textField_2.setText(fname);
			textField_3.setText(lname);
			textField_4.setText(""+usertype_id);
		}
		
	}
}
