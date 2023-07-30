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
 * Servlet implementation class Editdata
 */
@WebServlet("/editdata")
public class Editdata extends HttpServlet {
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
		 String distr_channel = request.getParameter("distr_channel");
		 String ccode = request.getParameter("ccode");
		 String curr_type = request.getParameter("curr_type");
		 
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection conn = DriverManager.getConnection(DB_URL,USER,PASS);
			
			String sql = "update h2h_oap set ORDER_CURRENCY = ?,COMPANY_CODE = ?,DISTRIBUTION_CHANNEL = ? where Sl_no = ?; ";
			
			
			PreparedStatement ps=conn.prepareStatement(sql);
			
			ps.setString(1,curr_type);
			ps.setString(2,ccode);
			ps.setString(3,distr_channel);
			ps.setInt(4, id);
			if(ps.executeUpdate()>0)
			{
				
				Rsp.put("update",true);
			}
			else
			{
				Rsp.put("update",false);
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
		try {
			doGet(request,response);
		} catch (ServletException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

}
