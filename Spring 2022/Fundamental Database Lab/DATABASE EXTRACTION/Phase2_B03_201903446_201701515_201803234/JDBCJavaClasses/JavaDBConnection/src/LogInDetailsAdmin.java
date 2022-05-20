import java.awt.BorderLayout;
import java.awt.EventQueue;
import java.awt.Point;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Vector;

import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.table.DefaultTableModel;
import javax.swing.table.TableColumn;
import javax.swing.table.TableColumnModel;
import javax.swing.table.TableModel;

import net.proteanit.sql.DbUtils;

import javax.swing.JTable;
import javax.swing.SwingUtilities;
import javax.swing.JScrollBar;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.event.ActionEvent;
import javax.swing.JLabel;

public class LogInDetailsAdmin extends JFrame {

	private JPanel contentPane;
	private JTable table;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					LogInDetailsAdmin frame = new LogInDetailsAdmin();
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
	public LogInDetailsAdmin() {
		setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
		setBounds(100, 100, 665, 485);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		table = new JTable();
		table.addMouseListener(new MouseAdapter() {
			@Override
			public void mouseClicked(MouseEvent e) {
				DefaultTableModel model=(DefaultTableModel) table.getModel();
				int SelectedRow=table.getSelectedRow();
				String value=model.getValueAt(SelectedRow, 0).toString();
			}
		});
		table.setBounds(10, 38, 617, 288);
		contentPane.add(table);
		Connection conn = null;
		try {
			conn = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
			Statement stmt = conn.createStatement();
			ResultSet result=stmt.executeQuery("select * from Users where Usertype_id!=1");
			table.setModel(DbUtils.resultSetToTableModel(result));
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		JButton AddUser = new JButton("Add User");
		AddUser.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				UserProcess u=new UserProcess(1,null);
				u.setVisible(true);
			}
		});
		AddUser.setBounds(59, 352, 105, 34);
		contentPane.add(AddUser);
		
		JButton UpdateUser = new JButton("Update User");
		UpdateUser.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				DefaultTableModel model=(DefaultTableModel) table.getModel();
				int SelectedRow=table.getSelectedRow();
				String value=model.getValueAt(SelectedRow, 0).toString();
			//	System.out.println(value);
				if(value==null) {
					JOptionPane.showMessageDialog(null, "Choose a Row to Update");
				}
				
				else {
				UserProcess u=new UserProcess(2,value);
				u.setVisible(true);
				}
				}
		});
		UpdateUser.setBounds(253, 352, 105, 34);
		contentPane.add(UpdateUser);
		
		JButton DeleteUser = new JButton("Delete User");
		DeleteUser.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				DefaultTableModel model=(DefaultTableModel) table.getModel();
				int SelectedRow=table.getSelectedRow();
				String value=model.getValueAt(SelectedRow, 0).toString();
				String value1=model.getValueAt(SelectedRow, 3).toString();
				String value2=model.getValueAt(SelectedRow, 4).toString();
				Connection conn;
				try {
					conn = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
					String sql="delete from Users where Username=?";
					PreparedStatement p=conn.prepareStatement(sql);
					p.setString(1, value);
					p.executeUpdate();
					JOptionPane.showConfirmDialog(null, String.format("%s %s's Information will be Deleted",value1,value2));
					JOptionPane.showMessageDialog(null, "The Information is Deleted");
				} catch (SQLException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
				
			}
		});
		DeleteUser.setBounds(449, 352, 105, 34);
		contentPane.add(DeleteUser);
		
		JButton btnNewButton = new JButton("Refresh");
		btnNewButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				dispose();
				LogInDetailsAdmin u=new LogInDetailsAdmin();
				u.setVisible(true);
			}
		});
		btnNewButton.setBounds(253, 412, 105, 23);
		contentPane.add(btnNewButton);
		
		JLabel lblNewLabel = new JLabel("Log in Details");
		lblNewLabel.setBounds(297, 11, 80, 14);
		contentPane.add(lblNewLabel);
	}
}
