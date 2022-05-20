package JavaDBWorking;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Tester {
	public static void main (String [] args) throws SQLException {
		Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@coestudb.qu.edu.qa:1521/STUD.qu.edu.qa","tp1903446", "tp1903446");
		Statement stmt = conn.createStatement();
		ResultSet rs=stmt.executeQuery("Select ename,empno,sal from emp");
		while(rs.next()){
			String name=rs.getString(1);
			int no=rs.getInt(2);
			int sal=rs.getInt(3);
			System.out.println("Name : "+name+", Empno : "+no+" Sal : "+sal);
		}
		rs.close();
		conn.close();
		
		}
}
