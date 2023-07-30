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
import com.highradius.implementation.*;
import com.highradius.model.Invoice;

/**
 * Servlet implementation class Adddata
 */
@WebServlet("/Adddata")
public class Adddata extends HttpServlet {
	private static final long serialVersionUID = 1L;

	
       
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
			doPost(request,response);
		} catch (ServletException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		 String cust_order_id = request.getParameter("cust_order_id");
		 String sales_org = request.getParameter("sales_org");
		 String distr_channel = request.getParameter("distr_channel");
		 String cust_number = request.getParameter("cust_number");
		 String ccode = request.getParameter("ccode");
		 String curr_type = request.getParameter("curr_type");
		 String usd_amount = request.getParameter("usd_amount");
		 String order_creation = request.getParameter("order_creation");
		 String sl_no = null;
		 
		Invoice invoice = new Invoice(sl_no, cust_order_id, sales_org, distr_channel, cust_number , ccode, curr_type, usd_amount, order_creation);
		try {
			invoices.insertInvoice(invoice);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
