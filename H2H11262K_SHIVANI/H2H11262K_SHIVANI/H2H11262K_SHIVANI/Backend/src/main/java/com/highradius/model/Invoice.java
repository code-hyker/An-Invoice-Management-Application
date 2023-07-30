package com.highradius.model;

public class Invoice {
	private String id;
	private String cust_order_id;
	private String sales_org;
	private String distr_channel;
	private String cust_number ;
	private String ccode;
	private String curr_type;
	private String usd_amount;
	private String order_creation;
	

	public Invoice(String id,String cust_order_id, String sales_org, String distr_channel, String cust_number , String ccode, String curr_type,  String usd_amount, String order_creation) {
		super();
		this.id = id;
		this.cust_order_id = cust_order_id;
		this.sales_org = sales_org;
		this.distr_channel = distr_channel;
		this.cust_number  = cust_number ;
		this.ccode = ccode;
		this.curr_type = curr_type;
		this.usd_amount = usd_amount;
		this.order_creation = order_creation;
		
		
	}
	public Invoice(String id2, String distr_channel2, String ccode2, String curr_type2) {
		// TODO Auto-generated constructor stub
		super();
		this.id = id2;
		
		this.distr_channel = distr_channel2;
		
		this.ccode = ccode2;
		this.curr_type = curr_type2;

	}
	public String getid() {
		return id;
	}

	public void setid(String id) {
		this.id = id;
	}
	
	public String getcust_order_id() {
		return cust_order_id;
	}

	public void setcust_order_id(String cust_order_id) {
		this.cust_order_id = cust_order_id;
	}

	public String getsales_org() {
		return sales_org;
	}

	public void setsales_org(String sales_org) {
		this.sales_org = sales_org;
	}

	public String getdistr_channel() {
		return distr_channel;
	}

	public void setdistr_channel(String distr_channel) {
		this.distr_channel = distr_channel;
	}

	public String getcust_number () {
		return cust_number ;
	}

	public void setcust_number (String cust_number ) {
		this.cust_number  = cust_number ;
	}

	

	public String getccode() {
		return ccode;
	}

	public void setccode(String ccode) {
		this.ccode = ccode;
	}
	public String getcurr_type() {
		return curr_type;
	}

	public void setcurr_type(String curr_type) {
		this.curr_type = curr_type;
	}

	public String getorder_creation() {
		return order_creation;
	}

	public void setorder_creation(String order_creation) {
		this.order_creation = order_creation;
	}

	

	public String getusd_amount() {
		return usd_amount;
	}

	public void setusd_amount(String usd_amount) {
		this.usd_amount = usd_amount;
	}

	
}

	
	

