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

import javax.swing.JComboBox;
import javax.swing.JButton;

public class medicationForm extends JFrame {

	private JPanel contentPane;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					medicationForm frame = new medicationForm(0,0,0);
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 * @param pid 
	 * @param i 
	 */
	public medicationForm(int i, int pid, int med_id) {
		setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
		setBounds(100, 100, 423, 290);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		if(i==1) {
		JLabel lblNewLabel = new JLabel("Add Medication");
		lblNewLabel.setFont(new Font("Tahoma", Font.BOLD, 15));
		lblNewLabel.setBounds(156, 25, 180, 14);
		contentPane.add(lblNewLabel);
		
		JLabel lblNewLabel_1 = new JLabel("Add Medicine\r\n");
		lblNewLabel_1.setBounds(41, 94, 109, 14);
		contentPane.add(lblNewLabel_1);
		
		int medid=0;
		ArrayList<String> nameOfMedicines=new ArrayList<>();
		ArrayList<Integer> noMed=new ArrayList<>();
		JComboBox comboBox = new JComboBox();
		try {
			Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
			String sqlget="select * from Medicine";
			PreparedStatement p1=conn.prepareStatement(sqlget);
			ResultSet r=p1.executeQuery();
			while(r.next()) {
				int medno=r.getInt(1);
				String med=r.getString(2);
				noMed.add(medno);
				nameOfMedicines.add(med);
			}
			for(int j=0;j<nameOfMedicines.size();j++) {
				comboBox.addItem(nameOfMedicines.get(j));
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		comboBox.setBounds(198, 90, 138, 22);
		contentPane.add(comboBox);
		
		JButton btnNewButton = new JButton("Add Medication");
		btnNewButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				Connection conn;
				try {
					conn = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
					Object Item=comboBox.getSelectedItem();
					String value=(String) Item;
					int neededInt=0;
					for(int i=0;i<nameOfMedicines.size();i++) {
						if(nameOfMedicines.get(i).equals(value)) {
							neededInt=noMed.get(i);
						}
					}
					int wantedMedID=0;
					String sql="Select * from Patient_medicine where med_ID=? AND PAT_ID=?";
					PreparedStatement prep=conn.prepareStatement(sql);
					prep.setInt(1, neededInt);
					prep.setInt(2, pid);
					ResultSet r=prep.executeQuery();
					boolean checkEmpty=false;
					if(r.next()==false) {
						checkEmpty=true;
					}
					else {
						wantedMedID=r.getInt(4);
					}
					if(checkEmpty) {
						try {
							String sql1="Insert into patient_medicine values(?,?,?,?)";
							PreparedStatement prep1=conn.prepareStatement(sql1);
							java.util.Calendar cal = new GregorianCalendar();
							prep1.setDate(1, new java.sql.Date(cal.getTime().getTime()), cal);
							prep1.setDate(2, new java.sql.Date(cal.getTime().getTime()), cal);
							prep1.setInt(3, pid);
							prep1.setInt(4, neededInt);
							prep1.executeUpdate();
							JOptionPane.showMessageDialog(null, "New Medication Added");
							dispose();
						}
						catch(SQLException e3) {
							e3.printStackTrace();
						}
					}
					else {
						JOptionPane.showMessageDialog(null, "This medication is already added to your list");
					}
				} catch (SQLException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
				
			}
		});
		btnNewButton.setBounds(115, 175, 153, 23);
		contentPane.add(btnNewButton);
		}
		if(i==2) {
			JLabel lblNewLabel = new JLabel("Update Medication");
			lblNewLabel.setFont(new Font("Tahoma", Font.BOLD, 15));
			lblNewLabel.setBounds(156, 25, 180, 14);
			contentPane.add(lblNewLabel);
			
			JLabel lblNewLabel_1 = new JLabel("Update Medicine\r\n");
			lblNewLabel_1.setBounds(41, 94, 109, 14);
			contentPane.add(lblNewLabel_1);
			ArrayList<String> nameOfMedicines=new ArrayList<>();
			ArrayList<Integer> noMed=new ArrayList<>();
			
			JComboBox comboBox = new JComboBox();
			try {
				Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
				String sqlget="select * from Medicine";
				PreparedStatement p1=conn.prepareStatement(sqlget);
				ResultSet r=p1.executeQuery();
				while(r.next()) {
					int medno=r.getInt(1);
					String med=r.getString(2);
					noMed.add(medno);
					nameOfMedicines.add(med);
				}
				for(int j=0;j<nameOfMedicines.size();j++) {
					comboBox.addItem(nameOfMedicines.get(j));
				}
				
				for(int k=0;k<noMed.size();k++) {
					if(med_id==noMed.get(k)) {
						comboBox.setSelectedItem(nameOfMedicines.get(k));
					}
				}
				
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			comboBox.setBounds(198, 90, 138, 22);
			contentPane.add(comboBox);
			JButton btnNewButton = new JButton("Update Medication");
			btnNewButton.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent e) {
					Object Item=comboBox.getSelectedItem();
					String value=(String) Item;
					//System.out.println(value);
					try {
						Connection conn1 = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
						String newsql="select * from medicine where med_name=?";
						PreparedStatement p1;
						p1 = conn1.prepareStatement(newsql);
						p1.setString(1,value);
						ResultSet r=p1.executeQuery();
						int medid=0;
						while(r.next()) {
							medid=r.getInt(1);
						}
						if(medid==med_id) {
							JOptionPane.showMessageDialog(null, "Cannot update to the same medicine");
						}
						else {
						
							String newsql2="select * from patient_medicine where med_id=? and pat_id=?";
							PreparedStatement p2;
							p2 = conn1.prepareStatement(newsql2);
							p2.setInt(1,medid);
							p2.setInt(2, pid);
							ResultSet r2=p2.executeQuery();
							if(r2.next()==false) {
								String newsql3="Update Patient_medicine set med_id=? where med_id=?";
								PreparedStatement p3;
								p3 = conn1.prepareStatement(newsql3);
								p3.setInt(1, medid);
								p3.setInt(2, med_id);
								p3.executeUpdate();
								JOptionPane.showConfirmDialog(null, "Your information will be updated. Do you want to continue?");
								dispose();
							}
							else {
								JOptionPane.showMessageDialog(null, "This medication already exists for you");
							}
							
						}
					
					} catch (SQLException e2) {
						// TODO Auto-generated catch block
						e2.printStackTrace();
					}
					
					
						}
				
			});
			btnNewButton.setBounds(115, 175, 153, 23);
			contentPane.add(btnNewButton);
		}
		
	}

}
