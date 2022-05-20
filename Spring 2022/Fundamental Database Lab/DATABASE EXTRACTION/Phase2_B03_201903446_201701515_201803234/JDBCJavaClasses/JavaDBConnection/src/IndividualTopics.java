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
import javax.swing.JButton;

public class IndividualTopics extends JFrame {

	private JPanel contentPane;
	private JTextField textField;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					IndividualTopics frame = new IndividualTopics(0,0,null,null);
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 * @param tid 
	 * @param tid2 
	 */
	public IndividualTopics(int no, int tid, String userName,String currentUser) {
		setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
		setBounds(100, 100, 399, 326);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		Connection conn;
		try {
			 conn= DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
			String sql="Select * from Topic where T_ID=?";
			PreparedStatement p1=conn.prepareStatement(sql);
			p1.setInt(1, tid);
			ResultSet r=p1.executeQuery();
			
			String NameofTopic=null;
			while(r.next()) {
				NameofTopic=r.getString(4);
			}
			JLabel lblNewLabel = new JLabel(String.format("%s", NameofTopic));
			lblNewLabel.setFont(new Font("Tahoma", Font.BOLD, 15));
			lblNewLabel.setBounds(56, 11, 307, 76);
			contentPane.add(lblNewLabel);
			String sql2="Select * from Reply where T_ID=?";
			PreparedStatement p2=conn.prepareStatement(sql2);
			p2.setInt(1, tid);
			ArrayList<String> replies=new ArrayList<String>();
			ArrayList<String> username=new ArrayList<String>();
			int l=0;
			ResultSet rs=p2.executeQuery();
			while(rs.next()) {
				String reply=rs.getString(2);
				String user=rs.getString(5);
				replies.add(reply);
				username.add(user);
				l++;
			}
			JLabel[] labels=new JLabel[replies.size()];
			int ycordinate=135;
			for(int i=0;i<replies.size();i++) {
				labels[i] = new JLabel(String.format("%s : %s", username.get(i),replies.get(i)));
				labels[i].setBounds(56, ycordinate, 283, 14);
				contentPane.add(labels[i]);
				ycordinate+=35;
			}
			
			JLabel lblNewLabel_1 = new JLabel("Replies");
			lblNewLabel_1.setBounds(56, 98, 283, 14);
			contentPane.add(lblNewLabel_1);
			
			textField = new JTextField();
			textField.setBounds(58, ycordinate, 281, 20);
			contentPane.add(textField);
			textField.setColumns(10);
			ycordinate+=30;
			JButton btnNewButton = new JButton("Add Reply\r\n");
			
			btnNewButton.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent e) {
					
					String value=textField.getText().trim();
					if(value.equals("")) {
						JOptionPane.showMessageDialog(null, "Fill a reply first");
					}
					else {
						try {
							Connection conn= DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
							String sqlReplies="select * from reply";
							PreparedStatement p3=conn.prepareStatement(sqlReplies);
							ArrayList<Integer> Reply_IDArr=new ArrayList<>();
							ResultSet r5=p3.executeQuery();
							while(r5.next()) {
								int replyid=r5.getInt(1);
								Reply_IDArr.add(replyid);
							}
							int min = 100;
						    int max = 999;  
						      //Generate random int value from 100 to 999
						    int random_int=0;
						    do {
						     random_int= (int)Math.floor(Math.random()*(max-min+1)+min);
						    }while(Reply_IDArr.contains(random_int));
						    java.util.Calendar cal = new GregorianCalendar();
							String sql="INSERT INTO REPLY VALUES(?,?,?,?,?)";
							PreparedStatement p1=conn.prepareStatement(sql);
							p1.setInt(1, random_int);
							p1.setString(2,value);
							p1.setDate(3,new java.sql.Date(cal.getTime().getTime()), cal);
							p1.setInt(4,tid);
							p1.setString(5,currentUser);
							p1.executeUpdate();
							JOptionPane.showMessageDialog(null, "Reply Added");
							textField.setText("");
							dispose();
							IndividualTopics t=new IndividualTopics(no, tid,userName,currentUser);
							t.setVisible(true);
						} catch (SQLException e1) {
							// TODO Auto-generated catch block
							e1.printStackTrace();
						}
						
					}
				}
			});
			btnNewButton.setBounds(56, ycordinate, 150, 23);
			contentPane.add(btnNewButton);
			ycordinate+=30;
			
			
			JButton btnNewButton_1 = new JButton("Edit Topic\r\n");
			
			btnNewButton_1.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent e) {
						//if(currentUser.equals(userName)) {
							EditTopic editer=new EditTopic(2,currentUser,tid);
							editer.setVisible(true);
					//	}
//						else {
//							JOptionPane.showMessageDialog(null, "This topic is not yours and hence cannot be Edited");
//						}
					 }
			});
			btnNewButton_1.setBounds(56, ycordinate, 150, 23);
			contentPane.add(btnNewButton_1);
			
			JButton btnNewButton_2 = new JButton("Delete Topic\r\n");
			if(currentUser.equals("ADMIN1")|| currentUser.equals("ADMIN2")) {
				textField.setVisible(false);
				btnNewButton.setVisible(false);
				btnNewButton_1.setVisible(false);
				btnNewButton_2.setVisible(false);
			}
			if(!currentUser.equals(userName)) {
				btnNewButton_1.setVisible(false);
				btnNewButton_2.setVisible(false);
			}
			btnNewButton_2.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent e) {
					Connection conn;
					 try {
						
						conn= DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
						String sql2="delete from reply where t_id=?";
						String sql="delete from Topic where T_ID=? AND Username=?";
						PreparedStatement p1=conn.prepareStatement(sql);
						PreparedStatement p2=conn.prepareStatement(sql2);
						p2.setInt(1, tid);
						p1.setInt(1, tid);
						p1.setString(2, userName);
						//if(currentUser.equals(userName)) {
							
							JOptionPane.showConfirmDialog(null, "Do you want to delete this topic");
							p2.executeUpdate();
							p1.executeUpdate();
							JOptionPane.showMessageDialog(null, "Successfully Deleted");
							dispose();
						//}
						//else {
							//JOptionPane.showMessageDialog(null, "This topic is not yours and hence cannot be deleted");
						//}
					 } catch (SQLException e1) {
						// TODO Auto-generated catch block
						e1.printStackTrace();
					}
						
				}
			});
			btnNewButton_2.setBounds(221, ycordinate, 142, 23);
			contentPane.add(btnNewButton_2);
			
			JButton btnNewButton_3 = new JButton("Refresh\r\n");
			btnNewButton_3.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent e) {
					dispose();
					IndividualTopics t=new IndividualTopics(no, tid,userName,currentUser);
					t.setVisible(true);
				}
			});
			btnNewButton_3.setBounds(10, 0, 89, 23);
			contentPane.add(btnNewButton_3);
			int setHeight=325;
			for(int j=0;j<l;j++) {
				setHeight+=60;
			}
			setBounds(100,100,400,setHeight);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	
	}
}
