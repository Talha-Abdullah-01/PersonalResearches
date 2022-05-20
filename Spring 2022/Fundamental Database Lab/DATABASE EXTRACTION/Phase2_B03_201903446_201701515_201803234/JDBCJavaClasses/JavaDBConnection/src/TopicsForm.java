import java.awt.BorderLayout;
import java.awt.EventQueue;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Date;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JOptionPane;

import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class TopicsForm extends JFrame {

	private JPanel contentPane;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					TopicsForm frame = new TopicsForm(3,"PATIENT1");
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 * @param passedValue 
	 */
	public TopicsForm(int passedValue,String passedString) {
		setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
		setBounds(100, 100, 399, 326);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JLabel lblNewLabel = new JLabel("Topics Forum");
		lblNewLabel.setFont(new Font("Tahoma", Font.BOLD, 15));
		lblNewLabel.setBounds(123, 11, 130, 21);
		contentPane.add(lblNewLabel);
		
		JButton btnNewButton = new JButton("REFRESH\r\n");
		btnNewButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				dispose();
				TopicsForm u=new TopicsForm(passedValue, passedString);
				u.setVisible(true);
			}
		});
		btnNewButton.setBounds(10, 9, 103, 23);
		contentPane.add(btnNewButton);
		Connection conn;
		try {
			conn = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
			Statement stmt = conn.createStatement();
			ResultSet rs1= stmt.executeQuery("Select * from Topic");
			String passedString1="Select * from Topic where Username=?";
			PreparedStatement p1=conn.prepareStatement(passedString1);
			p1.setString(1, passedString);
			ResultSet UserRelated=p1.executeQuery();
			int k=0;
			while(UserRelated.next()) {
				k++;
			}
			Object[][] o=new Object[k][7];
			int i=0;
			ResultSet UserRelatedindex=p1.executeQuery();
			while(UserRelatedindex.next()) {
				int tid=UserRelatedindex.getInt(1);
				Date date1=UserRelatedindex.getDate(2);
				int approved=UserRelatedindex.getInt(3);
				String title=UserRelatedindex.getString(4);
				int specid=UserRelatedindex.getInt(5);
				int ttypeid=UserRelatedindex.getInt(6);
				String Username=UserRelatedindex.getString(7);
				o[i][0]=tid;
				o[i][1]=date1;
				o[i][2]=approved;
				o[i][3]=title;
				o[i][4]=specid;
				o[i][5]=ttypeid;
				o[i][6]=Username;
				i++;
			}
			String passedString2="Select * from Topic where Username!=?";
			PreparedStatement p2=conn.prepareStatement(passedString2);
			p2.setString(1, passedString);
			ResultSet UserNotRelated=p2.executeQuery();
			int p=0;
			while(UserNotRelated.next()) {
				p++;
			}
			Object[][] o1=new Object[p][7];
			int n=0;
			ResultSet UserRelatedindex1=p2.executeQuery();
			while(UserRelatedindex1.next()) {
				int tid=UserRelatedindex1.getInt(1);
				Date date1=UserRelatedindex1.getDate(2);
				int approved=UserRelatedindex1.getInt(3);
				String title=UserRelatedindex1.getString(4);
				int specid=UserRelatedindex1.getInt(5);
				int ttypeid=UserRelatedindex1.getInt(6);
				String Username=UserRelatedindex1.getString(7);
				o1[n][0]=tid;
				o1[n][1]=date1;
				o1[n][2]=approved;
				o1[n][3]=title;
				o1[n][4]=specid;
				o1[n][5]=ttypeid;
				o1[n][6]=Username;
				n++;
			}
//			System.out.println("n : " +n);
//			System.out.println("i : " +i);
			JButton[] selfbuttons=new JButton[i]; 
			int ycordinate=57;
			for(int t=0;t<i;t++) {
			selfbuttons[t] = new JButton(String.format("<html>"+"TOPIC : %s"+  "<br>"+"--> BY YOU </html>",o[t][3]));
			int tid=(int)o[t][0];
			String obj=(String)o[t][6];
			selfbuttons[t].addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent e) {
					IndividualTopics t=new IndividualTopics(1,tid,obj,passedString);
							t.setVisible(true);
				}
			});
			selfbuttons[t].setBounds(67, ycordinate, 229, 60);
			contentPane.add(selfbuttons[t]);
			ycordinate+=70;
			}
			if(passedValue==2 || passedValue==3) {
			JButton createTopic=new JButton("Create a new Topic");
			createTopic.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent e) {
					EditTopic addtopic=new EditTopic(1,passedString,0);
					addtopic.setVisible(true);
				}
			});
			createTopic.setBounds(100, ycordinate+5, 150, 20);
			contentPane.add(createTopic);
			}
			JButton[] othersbuttons=new JButton[n]; 
			int ycordinate1=ycordinate+40;
			
			for(int t=0;t<n;t++) {
			othersbuttons[t] = new JButton(String.format("<html>"+"TOPIC : %s"+  "<br>"+"--> BY %s </html>",o1[t][3],o1[t][6]));
			int tid=(int)o1[t][0];
			String obj=(String)o1[t][6];
			othersbuttons[t].addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent e) {
					IndividualTopics t=new IndividualTopics(2,tid,obj,passedString);
					t.setVisible(true);
				}
			});
			othersbuttons[t].setBounds(67, ycordinate1, 229, 60);
			contentPane.add(othersbuttons[t]);
			ycordinate1+=70;
			}
			

			int l=0;
			while(rs1.next()) {
				l++;
			}
			//System.out.println(l);
			int setHeight=325;
			for(int j=3;j<=l;j++) {
				setHeight+=80;
			}
			setBounds(100,100,400,setHeight);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}
