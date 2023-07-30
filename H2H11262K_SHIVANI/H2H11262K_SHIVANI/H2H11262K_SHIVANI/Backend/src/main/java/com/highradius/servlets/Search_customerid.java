package com.highradius.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

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
 * Servlet implementation class Search_customerid
 */
@WebServlet("/search_customerid")
public class Search_customerid extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private InvoiceDao invoices;
    /**
     * Default constructor. 
     */
	public void init() {
		invoices = new InvoiceDaoImpl();
	}
    /**
     * @see HttpServlet#HttpServlet()
     */


	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
		// TODO Auto-generated method stub
		protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			// TODO Auto-generated method stub
			String jsresp = new String();
			PrintWriter pw = response.getWriter();
			System.out.println();
			String customerid = request.getParameter("cust_order_id");
			int custid =  Integer.parseInt(customerid);
			List<Invoice> data = invoices.searchcustid(custid);
			Gson gson = new Gson();
			jsresp = gson.toJson(data);
			response.setHeader("Access-Control-Allow-Origin","*");
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().append(jsresp);
			
			
			
		}

	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
