package com.highradius.implementation;

import com.highradius.model.Invoice;
import java.util.List;
import java.sql.*;

public interface InvoiceDao {
    public List<Invoice> getInvoice();
    public void insertInvoice(Invoice invoice) throws SQLException;
    public void updateInvoice(int id, Invoice invoice) throws SQLException;
    public boolean deleteInvoice(int id) throws SQLException;
    public List<Invoice> searchcustid(int custid);
}
