import java.awt.BorderLayout;
import java.awt.EventQueue;
import java.awt.Point;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.table.DefaultTableModel;

import net.proteanit.sql.DbUtils;

import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JTable;
import javax.swing.JButton;

public class MedicationForum extends JFrame {

	private JPanel contentPane;
	private JTable table;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					MedicationForum frame = new MedicationForum(null,0);
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
	 * @param passedString 
	 */
	public MedicationForum(String passedString, int passedValue) {
		setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
		setBounds(100, 100, 547, 465);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		if(passedValue==3) {
		JLabel lblNewLabel = new JLabel("Your Medication Forms");
		lblNewLabel.setBounds(188, 24, 179, 14);
		contentPane.add(lblNewLabel);
		
		table = new JTable();
		table.setBounds(20, 51, 484, 267);
		contentPane.add(table);
		Connection conn;
		try {
			conn = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
			Statement stmt = conn.createStatement();
			String sql2="Select * from Patient where Username=?";
			PreparedStatement s2=conn.prepareStatement(sql2);
			s2.setString(1,passedString);
			ResultSet r=s2.executeQuery();
			int pid=0;
			while(r.next()) {
				pid=r.getInt(1);
			}
			String sql="select * from Patient_Medicine where Pat_ID=?";
			PreparedStatement s=conn.prepareStatement(sql);
			s.setInt(1,pid);
			ResultSet result=s.executeQuery();
			table.setModel(DbUtils.resultSetToTableModel(result));
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
		JButton btnNewButton = new JButton("Add MED\r\n");
		btnNewButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				Connection conn;
				try {
					conn = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
					String sql2="Select * from Patient where Username=?";
					PreparedStatement s2=conn.prepareStatement(sql2);
					s2.setString(1,passedString);
					ResultSet r=s2.executeQuery();
					int pid=0;
					while(r.next()) {
						pid=r.getInt(1);
					}
					medicationForm n=new medicationForm(1,pid,0);
					n.setVisible(true);
				} catch (SQLException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
			}
		});
		btnNewButton.setBounds(33, 348, 117, 23);
		contentPane.add(btnNewButton);
		
		JButton btnNewButton_1 = new JButton("Update MED\r\n");
		btnNewButton_1.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
					DefaultTableModel model=(DefaultTableModel) table.getModel();
					int SelectedRow=table.getSelectedRow();
					String value=model.getValueAt(SelectedRow, 2).toString();
					String value1=model.getValueAt(SelectedRow,3).toString();
				//	System.out.println(value);
					if(value==null) {
						JOptionPane.showMessageDialog(null, "Choose a Row to Update");
					}
					else {
					int intvalue=Integer.parseInt(value);
					int intvalue2=Integer.parseInt(value1);
					medicationForm u=new medicationForm(2,intvalue,intvalue2);
					u.setVisible(true);
					}
			}
		});
		btnNewButton_1.setBounds(188, 348, 130, 23);
		contentPane.add(btnNewButton_1);
		
		JButton btnNewButton_2 = new JButton("Delete MED");
		btnNewButton_2.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				DefaultTableModel model=(DefaultTableModel) table.getModel();
				int SelectedRow=table.getSelectedRow();
				String value=model.getValueAt(SelectedRow, 2).toString();
				String value1=model.getValueAt(SelectedRow,3).toString();
			//	System.out.println(value);
				if(value==null) {
					JOptionPane.showMessageDialog(null, "Choose a Row to Delete");
				}
				else {
					Connection conn;
					try {
						conn = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
						Statement stmt = conn.createStatement();
						String sql2="delete from Patient_medicine where med_id=? and pat_id=?";
						PreparedStatement s2=conn.prepareStatement(sql2);
						s2.setInt(1, Integer.parseInt(value1));
						s2.setInt(2, Integer.parseInt(value));
						s2.executeUpdate();
						JOptionPane.showConfirmDialog(null, String.format("Do you want to delete Medication : %d for Patient : %d",Integer.parseInt(value1),Integer.parseInt(value)));
					} catch (SQLException e1) {
						// TODO Auto-generated catch block
						e1.printStackTrace();
					}
					
				}
			}
		});
		btnNewButton_2.setBounds(353, 348, 117, 23);
		contentPane.add(btnNewButton_2);
		
		JButton btnNewButton_3 = new JButton("Refresh\r\n");
		btnNewButton_3.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				dispose();
				MedicationForum u=new MedicationForum(passedString,passedValue);
				u.setVisible(true);
			}
		});
		btnNewButton_3.setBounds(188, 392, 130, 23);
		contentPane.add(btnNewButton_3);
		}
		else {
			JLabel lblNewLabel = new JLabel("Viewing All Medication Forms");
			lblNewLabel.setBounds(188, 24, 179, 14);
			contentPane.add(lblNewLabel);
			
			table = new JTable();
			table.setBounds(20, 51, 484, 267);
			contentPane.add(table);
			Connection conn;
			try {
				conn = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
				String sql="select * from Patient_Medicine";
				PreparedStatement s=conn.prepareStatement(sql);
				ResultSet result=s.executeQuery();
				table.setModel(DbUtils.resultSetToTableModel(result));
				table.addMouseListener(new MouseAdapter() {
				    public void mousePressed(MouseEvent mouseEvent) {
				        JTable table =(JTable) mouseEvent.getSource();
				        Point point = mouseEvent.getPoint();
				        int row = table.rowAtPoint(point);
				        if (mouseEvent.getClickCount() == 2 && table.getSelectedRow() != -1) {
				        	DefaultTableModel model=(DefaultTableModel) table.getModel();
				        	int SelectedRow=table.getSelectedRow();
				        	String value=model.getValueAt(SelectedRow, 3).toString();
				        	int invalue=Integer.parseInt(value.trim());
				        	String sql="select * from Medicine where Med_id=?";
				        	try {
								PreparedStatement s1=conn.prepareStatement(sql);
								s1.setInt(1, invalue);
								ResultSet s2=s1.executeQuery();
								int medid=0;
								String medname=null;
								String meddesc=null;
								double Medprice=0.0;
								while(s2.next()) {
									medid=s2.getInt(1);
									medname=s2.getString(2);
									meddesc=s2.getString(3);
									Medprice=s2.getFloat(4);
								}
								StringBuilder builder = new StringBuilder("<html>"); 
								builder.append("Medicine Supplied Information");
								builder.append("<br>");
								builder.append("Medicine ID : "+medid);
								builder.append("<br>");
								builder.append("Medicine Name : "+medname);
								builder.append("<br>");
								builder.append("Medicine Desc : "+meddesc);
								builder.append("<br>");
								builder.append("Medicine Price : "+Medprice);
								builder.append("<br>");
								
								builder.append("</html>");
								JOptionPane.showMessageDialog
								    (null, builder.toString(), "Printing results", JOptionPane.INFORMATION_MESSAGE);
							} catch (SQLException e) {
								// TODO Auto-generated catch block
								e.printStackTrace();
							}
				        	
				        }
				    }
				});
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
		}
	}
}
