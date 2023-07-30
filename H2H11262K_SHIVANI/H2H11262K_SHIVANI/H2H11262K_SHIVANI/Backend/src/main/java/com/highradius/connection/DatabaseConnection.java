package com.highradius.connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DatabaseConnection {

	private static String url = "jdbc:mysql://localhost:3306/h2h_sql_2023";
	private static String username = "root";
	private static String password = "Mysql1@shiv";
	
	public static Connection connect() throws SQLException {
		Connection connection = null;

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			connection = DriverManager.getConnection(url,username,password);
			if (connection == null) {
				System.out.println("Connection cannot be established");
			}
			return connection;
		} catch (Exception e) {
			System.out.println(e);
		}
		return null;
	}
}
