import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JLabel;
import javax.swing.JOptionPane;

import java.awt.Font;
import javax.swing.JTextField;
import javax.swing.JPasswordField;
import java.awt.Button;
import java.awt.event.ActionListener;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.awt.event.ActionEvent;
import java.awt.Color;

public class Login extends JFrame {

	private JPanel contentPane;
	private JTextField usertxt;
	private JPasswordField userpass;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Login frame = new Login();
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
	public Login() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 440, 249);
		contentPane = new JPanel();
		contentPane.setBackground(Color.WHITE);
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JLabel lblNewLabel = new JLabel("Username");
		lblNewLabel.setFont(new Font("Dialog", Font.BOLD, 18));
		lblNewLabel.setBounds(80, 31, 99, 31);
		contentPane.add(lblNewLabel);
		
		JLabel lblPassword = new JLabel("Password\r\n");
		lblPassword.setFont(new Font("Dialog", Font.BOLD, 18));
		lblPassword.setBounds(80, 95, 99, 31);
		contentPane.add(lblPassword);
		
		usertxt = new JTextField();
		usertxt.setBounds(214, 34, 148, 25);
		contentPane.add(usertxt);
		usertxt.setColumns(10);
		
		userpass = new JPasswordField();
		userpass.setBounds(214, 96, 148, 25);
		contentPane.add(userpass);
		
		Button button = new Button("LogIn\r\n");
		button.setBackground(Color.LIGHT_GRAY);
		button.setFont(new Font("Dialog", Font.BOLD, 16));
		button.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				Connection conn;
				try {
					conn = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
					Statement stmt = conn.createStatement();
					ResultSet rs1= stmt.executeQuery("Select * from Users");
					ArrayList<String> usernames=new ArrayList<>();
					ArrayList<String> passwords=new ArrayList<>();
					ArrayList<Integer> usertypeno=new ArrayList<>(); 
					while(rs1.next()) {
						String indiUsers=rs1.getString(1);
						String passUsers=rs1.getString(2);
						int userno=rs1.getInt(6);
						usertypeno.add(userno);
						usernames.add(indiUsers);
						passwords.add(passUsers);
					}
//					System.out.println("Users");
//					for(int i=0;i<usernames.size();i++) {
//						System.out.println(usernames.get(i)+ " with pass "+ passwords.get(i));
//					}
					// 1=Admin 2=Doctor 3=Patient
					String enteredUser=usertxt.getText();
					@SuppressWarnings("deprecation")
					String enteredPass=userpass.getText();
//					System.out.println("Entered user is "+enteredUser+ " with pass "+enteredPass);
					boolean result=false;
					int passedValue=0;
					String passedString=null;
					for(int i=0;i<usernames.size();i++) {
						if(usernames.get(i).equals(enteredUser) && passwords.get(i).equals(enteredPass)) {
							passedValue=usertypeno.get(i);
							passedString=usernames.get(i);
							result=true;
						}
					}
				//	System.out.println(passedValue);
					if(result==true) {
						//System.out.println("Success");
						Form form = new Form(passedString,passedValue);
//						form.show();
						//form.checkPass.setText(""+passedValue);
						form.intPass=passedValue;
						form.setVisible(true);
					}
					else {
						System.out.println("Failure");
						boolean ifCheck=false;
						for(int i=0;i<usernames.size();i++) {
							if(usernames.get(i).equals(enteredUser)) {
								JOptionPane.showMessageDialog(null, "Wrong Password Entered");
								ifCheck=true;
							}
						}
						if(!ifCheck) {
						JOptionPane.showMessageDialog(null, "Credentials are wrong, Please Re-Login");
						usertxt.setText("");
						}
						userpass.setText("");
						}
				} catch (SQLException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
			}
		});
		button.setBounds(80, 156, 132, 31);
		contentPane.add(button);
		
		Button button_1 = new Button("Cancel");
		button_1.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				JOptionPane.showMessageDialog(null, "Closing Login Screen");
				dispose();
			}
		});
		button_1.setFont(new Font("Dialog", Font.BOLD, 16));
		button_1.setBackground(Color.LIGHT_GRAY);
		button_1.setBounds(239, 156, 123, 31);
		contentPane.add(button_1);
	}
}
