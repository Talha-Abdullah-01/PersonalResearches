import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JLabel;
import javax.swing.JOptionPane;

import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
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

public class EditTopic extends JFrame {

	private JPanel contentPane;
	private JTextField textField;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					EditTopic frame = new EditTopic(0,null,0);
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
	 * @param i 
	 */
	public EditTopic(int i, String passedString, int tid) {
		setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
		setBounds(100, 100, 400, 311);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		if(i==1) {
		JLabel lblNewLabel = new JLabel("Add Topic");
		lblNewLabel.setFont(new Font("Tahoma", Font.BOLD, 15));
		lblNewLabel.setBounds(145, 21, 143, 22);
		contentPane.add(lblNewLabel);
		}
		else {
			JLabel lblNewLabel = new JLabel("Edit Topic");
			lblNewLabel.setFont(new Font("Tahoma", Font.BOLD, 15));
			lblNewLabel.setBounds(145, 21, 143, 22);
			contentPane.add(lblNewLabel);
		}
		JLabel lblNewLabel_1 = new JLabel("Topic Title\r\n");
		lblNewLabel_1.setBounds(29, 76, 102, 22);
		contentPane.add(lblNewLabel_1);
		
		textField = new JTextField();
		textField.setBounds(117, 77, 257, 20);
		contentPane.add(textField);
		textField.setColumns(10);
		if(i!=1) {
			try {
				Connection conn=DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
				String sql="Select * from Topic where T_ID=?";
				PreparedStatement p1=conn.prepareStatement(sql);
				p1.setInt(1, tid);
				ResultSet s=p1.executeQuery();
				String title=null;
				while(s.next()) {
					title=s.getString(4);
				}
				textField.setText(title);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		JComboBox comboBox = new JComboBox();
		comboBox.setBounds(117, 144, 257, 22);
		contentPane.add(comboBox);
		Connection conn;
		try {
			conn = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
			String sqlget="Select * from Topic_type";
			PreparedStatement p1=conn.prepareStatement(sqlget);
			ResultSet r=p1.executeQuery();
			ArrayList<String> typeofTopics=new ArrayList<>();
			while(r.next()) {
				String topicname=r.getString(2);
				typeofTopics.add(topicname);
			}
			for(int k=0;k<typeofTopics.size();k++) {
				comboBox.addItem(typeofTopics.get(k));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		JLabel lblNewLabel_2 = new JLabel("Type\r\n");
		lblNewLabel_2.setBounds(29, 144, 78, 22);
		contentPane.add(lblNewLabel_2);
		if(i==1) {
		JButton btnNewButton = new JButton("Add Topic");
		btnNewButton.addActionListener(new ActionListener() {
		public void actionPerformed(ActionEvent e) {
			ArrayList<Integer> Topic_IDArr=new ArrayList<>();
			String Topicname="select * from Topic";
			PreparedStatement p3;
			
			try {
				Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
				p3 = conn.prepareStatement(Topicname);
				ResultSet r5=p3.executeQuery();
				while(r5.next()) {
					int tid=r5.getInt(1);
					Topic_IDArr.add(tid);
				}
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			
			Object Item=comboBox.getSelectedItem();
			String value=(String) Item;
			String title=textField.getText().trim();
			int min = 100;
		    int max = 999;  
		      //Generate random int value from 1000 to 9999
		    int random_int=0;
		    do {
		     random_int= (int)Math.floor(Math.random()*(max-min+1)+min);
		    }while(Topic_IDArr.contains(random_int));
		    PreparedStatement p2;
		    PreparedStatement p5;
		    try {
		    	Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
		    	int specid=100;
		    	if(i==2) {
		    	String getspecID="Select * from doctors where Username=?";
		    	PreparedStatement p7=conn.prepareStatement(getspecID);
		    	p7.setString(1, passedString);
		    	ResultSet rs=p7.executeQuery();
		    	while(rs.next()) {
		    		specid=rs.getInt(4);
		    	}
		    	}
		    	String getTID="Select * from Topic_type where t_name=?";
		    	p5=conn.prepareStatement(getTID);
		    	p5.setString(1, value);
		    	ResultSet r=p5.executeQuery();
		    	int TID=0;
		    	while(r.next()) {
		    		TID=r.getInt(1);
		    	}
		    	java.util.Calendar cal = new GregorianCalendar();
		    	String insertintoTopic="INSERT INTO TOPIC VALUES(?,?,?,?,?,?,?)";
		    	p2=conn.prepareStatement(insertintoTopic);
		    	p2.setInt(1,random_int);
		    	p2.setDate(2,new java.sql.Date(cal.getTime().getTime()), cal );
		    	p2.setInt(3,1);
		    	p2.setString(4,title);
		    	p2.setInt(5,specid);
		    	p2.setInt(6, TID);
		    	p2.setString(7, passedString);
		    	p2.executeQuery();
		    	JOptionPane.showMessageDialog(null, "Topic Successfully Added");
		    	dispose();
		    }
		    catch(Exception e1) {
		    	e1.printStackTrace();
		    }
		}
		});
		btnNewButton.setBounds(134, 209, 150, 23);
		contentPane.add(btnNewButton);
		}
		else {
			JButton btnNewButton = new JButton("Update Topic");
			btnNewButton.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent e) {
					if(textField.getText().trim().equals("")) {
						JOptionPane.showMessageDialog(null, "The topic title cannot be empty");
					}
					else {
						Connection conn;
						try {
							conn = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
							String title=textField.getText().trim();
							Object Item=comboBox.getSelectedItem();
							String value=(String) Item;
							String sql1="Select * from Topic_Type where t_name=?";
							PreparedStatement p4=conn.prepareStatement(sql1);
							p4.setString(1, value);
							ResultSet r1=p4.executeQuery();
							int noRequired=0;
							while(r1.next()) {
								noRequired=r1.getInt(1);
							}
							String sql2="UPDATE TOPIC set title=?, TTYPE_ID=? WHERE T_ID=?";
							PreparedStatement p5=conn.prepareStatement(sql2);
							p5.setString(1, title);
							p5.setInt(2, noRequired);
							p5.setInt(3, tid);
							JOptionPane.showConfirmDialog(null, "Updation will take place. Do you wish to continue?");
							p5.executeUpdate();
							JOptionPane.showMessageDialog(null, "Topic has been updated");
							dispose();
						} catch (SQLException e1) {
							// TODO Auto-generated catch block
							e1.printStackTrace();
						}
						
						
					}
				}
			});
			btnNewButton.setBounds(134, 209, 150, 23);
			contentPane.add(btnNewButton);
		}
		}
}
