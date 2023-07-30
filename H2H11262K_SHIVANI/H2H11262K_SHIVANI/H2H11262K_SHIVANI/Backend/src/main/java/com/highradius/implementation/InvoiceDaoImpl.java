package com.highradius.implementation;

import com.highradius.connection.DatabaseConnection;
import com.highradius.model.Invoice;

import java.util.*;
import java.sql.*;

public class InvoiceDaoImpl implements InvoiceDao {
	
	private static final String insert_sql = "INSERT INTO h2h_oap" + " (CUSTOMER_ORDER_ID, SALES_ORG, DISTRIBUTION_CHANNEL, CUSTOMER_NUMBER, COMPANY_CODE, ORDER_CURRENCY, AMOUNT_IN_USD, ORDER_CREATION_DATE) VALUES " + " (?, ?, ?, ?, ?, ?, ?, ?);";
	private static final String fetch_data = "select Sl_no,CUSTOMER_ORDER_ID, SALES_ORG, DISTRIBUTION_CHANNEL, CUSTOMER_NUMBER, COMPANY_CODE, ORDER_CURRENCY, AMOUNT_IN_USD, ORDER_CREATION_DATE from h2h_oap limit 10000 ;";
	private static final String update_data = "update h2h_oap set ORDER_CURRENCY = ?,COMPANY_CODE = ?,DISTRIBUTION_CHANNEL = ? where Sl_no = ?;";
	private static final String delete_data = "delete from h2h_oap where Sl_no=?;";
	private static final String fetch_data_search = "select Sl_no,CUSTOMER_ORDER_ID, SALES_ORG, DISTRIBUTION_CHANNEL, CUSTOMER_NUMBER, COMPANY_CODE, ORDER_CURRENCY, AMOUNT_IN_USD, ORDER_CREATION_DATE from h2h_oap where CUSTOMER_ORDER_ID=?;";
	@Override
	public List<Invoice> getInvoice() {
		// TODO Auto-generated method stub
		List<Invoice> data = new ArrayList<>();
		System.out.println(fetch_data);
		try(Connection connection = DatabaseConnection.connect();
				PreparedStatement ps = connection.prepareStatement(fetch_data);){
			System.out.println(ps);
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				String id = rs.getString("Sl_no");
				String cust_order_id = rs.getString("CUSTOMER_ORDER_ID");
				String sales_org = rs.getString("SALES_ORG");
				String distr_channel = rs.getString("DISTRIBUTION_CHANNEL");
				String cust_number = rs.getString("CUSTOMER_NUMBER");
				String ccode = rs.getString("COMPANY_CODE");
				String curr_type = rs.getString("ORDER_CURRENCY");
				String usd_amount = rs.getString("AMOUNT_IN_USD");
				String order_creation = rs.getString("ORDER_CREATION_DATE");
				data.add(new Invoice(id, cust_order_id, sales_org, distr_channel, cust_number, ccode, curr_type,  usd_amount, order_creation));
				}
			} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		return data;
	}

	@Override
	public void insertInvoice(Invoice invoice) throws SQLException {
		// TODO Auto-generated method stub
		System.out.println(insert_sql);
		try(Connection connection = DatabaseConnection.connect();
				PreparedStatement ps = connection.prepareStatement(insert_sql)){
			ps.setString(1, invoice.getcust_order_id());
			ps.setString(2, invoice.getsales_org());
			ps.setString(3, invoice.getdistr_channel());
			ps.setString(4, invoice.getcust_number());
			ps.setString(5, invoice.getccode());
			ps.setString(6, invoice.getcurr_type());
			ps.setString(7, invoice.getusd_amount());
			ps.setString(8, invoice.getorder_creation());
			System.out.println(ps);
			ps.executeUpdate();
			
		} catch(SQLException e) {
			e.printStackTrace();
		}
	}

	@Override
	public void updateInvoice(int id, Invoice invoice) throws SQLException {
		// TODO Auto-generated method stub
		System.out.println(update_data);
		try(Connection connection = DatabaseConnection.connect();
				PreparedStatement ps = connection.prepareStatement(update_data);){
			ps.setString(1, invoice.getcurr_type());
			ps.setString(2, invoice.getccode());
			ps.setString(3, invoice.getdistr_channel());
			ps.setInt(4, id);
			ps.executeUpdate();
		} catch(SQLException e) {
			e.printStackTrace();
		}
	}

	@Override
	public boolean deleteInvoice(int id) throws SQLException {
		// TODO Auto-generated method stub
		System.out.println(delete_data);
		boolean row_deleted;
		try(Connection connection = DatabaseConnection.connect();
				PreparedStatement ps = connection.prepareStatement(delete_data);){
			ps.setInt(1,id);
			row_deleted = ps.executeUpdate() > 0;
		}
		return row_deleted;
	}

	@Override
	public List<Invoice> searchcustid(int custid) {
		// TODO Auto-generated method stub
		List<Invoice> data = new ArrayList<>();
		System.out.println(fetch_data_search);
		try(Connection connection = DatabaseConnection.connect();
				PreparedStatement ps = connection.prepareStatement(fetch_data_search);){
			System.out.println(ps);
			ps.setInt(1, custid);
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				String id = rs.getString("Sl_no");
				String cust_order_id = rs.getString("CUSTOMER_ORDER_ID");
				String sales_org = rs.getString("SALES_ORG");
				String distr_channel = rs.getString("DISTRIBUTION_CHANNEL");
				String cust_number = rs.getString("CUSTOMER_NUMBER");
				String ccode = rs.getString("COMPANY_CODE");
				String curr_type = rs.getString("ORDER_CURRENCY");
				String usd_amount = rs.getString("AMOUNT_IN_USD");
				String order_creation = rs.getString("ORDER_CREATION_DATE");
				data.add(new Invoice(id, cust_order_id, sales_org, distr_channel, cust_number, ccode, curr_type,  usd_amount, order_creation));
				}
			} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		return data;
	
	}

}
