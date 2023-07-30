package com.highradius.servlets;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.highradius.implementation.InvoiceDao;
import com.highradius.implementation.InvoiceDaoImpl;
import com.highradius.model.Invoice;

/**
 * Servlet implementation class Deletedata
 */
@WebServlet("/deletedata")
public class Deletedata extends HttpServlet {
	private static final long serialVersionUID = 1L;
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	static final String DB_URL = "jdbc:mysql://localhost:3306/h2h";
	// Database credentials
	static final String USER = "root";
	static final String PASS = "jayant#1510";

	private InvoiceDao invoices;
    
	public void init() {
		invoices = new InvoiceDaoImpl();
	}
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
			
			HashMap<Object,Object> Rsp = new HashMap<>();

				int id = Integer.parseInt(request.getParameter("id"));
				Class.forName("com.mysql.cj.jdbc.Driver");
				Connection conn = DriverManager.getConnection(DB_URL,USER,PASS);
				String sql = "delete from h2h_oap where Sl_no in (?);";
				//String sql1 = "INSERT INTO winter_internship(business_code,cust_number,clear_date,buisness_year,doc_id,posting_date) VALUES('U002',140104429,'2019-09-09',2018,'432','2017-05-31')";
		
				PreparedStatement ps=conn.prepareStatement(sql);
				
				ps.setInt(1,id);
				if(ps.executeUpdate()>0)
				{
					
					Rsp.put("delete",true);
				}
				else
				{
					Rsp.put("delete",false);
				}
				Gson gson = new Gson();
				String json = gson.toJson(Rsp);
				response.setHeader("Access-Control-Allow-Origin", "*");
				response.getWriter().append(json);
				
			}
			catch(Exception e)
			{
				e.printStackTrace();
			}
			
		
	}
	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);		
	}

}
