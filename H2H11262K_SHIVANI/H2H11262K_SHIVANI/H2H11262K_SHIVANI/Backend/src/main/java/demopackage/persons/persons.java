package demopackage.persons;
import java.sql.*;

public class persons {
	public static void main(String[] args) throws Exception{
		
		String url = "jdbc:mysql://localhost:3306/demo";
		String username="root";
		String password = "jayant#1510";
		int userid = 5;
		String Username = "Jatin";
//		String query = "select * from persons";
//		String query = "insert into persons values("+userid+",'"+Username+"')";
		String query = "insert into persons values (?,?)";
		
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con = DriverManager.getConnection(url, username, password);
		Statement st = con.createStatement();
//		ResultSet rs = st.executeQuery(query);
		
		PreparedStatement ps = con.prepareStatement(query);
		ps.setInt(1, userid);
		ps.setString(2, Username);
		int count = ps.executeUpdate();
		if(count != 0) {
			System.out.println(count +"rows got affected");
		}
//		while(rs.next()) {
//			String userdata = rs.getInt(1)+" "+ rs.getString(2);
//			System.out.println(userdata);
//		}
		
		con.close();
		st.close();
	}
}
