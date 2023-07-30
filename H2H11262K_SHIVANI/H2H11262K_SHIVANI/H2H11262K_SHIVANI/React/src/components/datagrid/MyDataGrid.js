// import { Box, TablePagination } from "@material-ui/core";
// import { useState, useEffect } from "react";
// import React from 'react';

// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import Checkbox from '@material-ui/core/Checkbox';
// import { Button } from "@material-ui/core";
// import RefreshIcon from '@material-ui/icons/Refresh';
// // import PredictButton from './PredictButton';
// // import AnalyticsButton from './AnalyticsButton';
// // import AdvanceSearch from './AdvanceSearch';
// // import EditButton from './EditButton';
// // import DeleteButton from './DeleteButton';
// // import AddButton from './AddButton';
// import SearchBar from "material-ui-search-bar";

// import { getData, addCustomer, deleteCustomer, updateCustomer, searchCustomer } from "../dataaxios/DataAxios";

// function MyGrid(props) {

//   const [data, setData] = useState([]);
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   const [searched, setSearched] = React.useState("");
//   const [initial, setInitial] = useState([]);
//   const [orderBy, setOrderBy] = React.useState("id");
//   const [order, setOrder] = React.useState("ASC");
//   const [customer, setCustomer] = React.useState({
    
//     id : '', cust_order_id: '' , sales_org: '', distr_channel: '', cust_number: '', ccode: '', curr_type: '',usd_amount: '', order_creation : ''
//   });
//   const [editCustomer, setEditCustomer] = React.useState({ edit_id: '', edit_invoice_currency: '', edit_cust_payment_terms: '' });
//   // const [advanceSearchCustomer, setAdvanceSearchCustomer] = React.useState({ as_doc_id: '', as_invoice_id: '', as_cust_number: '', as_buisness_year: '' });
//   const { business_code, cust_number, clear_date, buisness_year, doc_id, posting_date, document_create_date, due_in_date, invoice_currency,
//     document_type, posting_id, total_open_amount, baseline_create_date, cust_payment_terms, invoice_id } = customer;
//   const { edit_invoice_currency, edit_cust_payment_terms } = editCustomer;

//   // const { as_doc_id, as_invoice_id, as_cust_number, as_buisness_year } = advanceSearchCustomer;


//   const handleRefresh = async () => {
//     setData(initial);
//     setSearched("");
//     setPage(0);
//     setRowsPerPage(10);
//     setSelected([]);
//     cancelSearch();
//   }

//   const changeHandler = (e) => {
//     const { name, value } = e.target;
//     setCustomer({ ...customer, [name]: value })
//   }

//   const editChangeHandler = (e) => {
//     const { name, value } = e.target;
//     setEditCustomer({ ...editCustomer, [name]: value })
//   }
//   const requestSearch = async (searchedVal) => {
//     if ((searchedVal === "") || (searchedVal.length <= 1))
//       setData(initial);
//     if (searchedVal.length > 1) {
//       let response = await searchCustomer(searchedVal);
//       setData(response.customer);
//     }
//   }

//   const cancelSearch = () => {
//     setSearched("");
//     setData(initial);
//   };

//   // const advanceSearchChangeHandler = (e) => {
//   //   const { name, value } = e.target;
//   //   setAdvanceSearchCustomer({ ...advanceSearchCustomer, [name]: value })
//   // }

//   const submitHandler = async (e) => {
//     let response = await addCustomer(customer);
//     if (response) {
//       setCustomer({
//         business_code: '', cust_number: '', clear_date: '', buisness_year: '',
//         doc_id: '', posting_date: '', document_create_date: '', due_in_date: '',
//         invoice_currency: '', document_type: '', posting_id: '', total_open_amount: '',
//         baseline_create_date: '', cust_payment_terms: '', invoice_id: ''
        
//       });

//       setData(await getData("id", "DESC"));
//       setInitial(await getData("id", "ASC"));
//       alert("1 Row sucessfully added");
//     }
//   }

//   // const advanceSearchSubmitHandler = async (e) => {
//   //   let response = await advancedSearch(advanceSearchCustomer);
//   //   if (response) {
//   //     setData(response.customer);
//   //     setAdvanceSearchCustomer({
//   //       as_doc_id: '', as_invoice_id: '', as_cust_number: '', as_buisness_year: ''
//   //     })
//   //   }
//   // }

//   const deleteHandler = async () => {
//     let i = 0, flag = 0, num = selected.length;
//     while (selected.length > i) {
//       let response = await deleteCustomer(selected[i++]);
//       if (response) {
//         flag = 1;
//       }
//     }
//     if (num === 0)
//       alert("No rows selected");
//     if (flag) {
//       setData(await getData(orderBy, order));
//       setInitial(await getData("id", "ASC"));
//       setSelected([]);
//       if (num > 0)
//         alert(num + " Row(s) sucessfully deleted");
//     }
//   }

//   const openEdit = () => {
//     if (selected.length === 1) {
//       var editCustomer1 = data.filter(c => c.id === selected[0])[0];
//       setEditCustomer({ edit_id: editCustomer1.id, edit_invoice_currency: editCustomer1.invoice_currency, edit_cust_payment_terms: editCustomer1.cust_payment_terms })
//     }
//   }
//   const editHandler = async () => {
//     let response = await updateCustomer(editCustomer);
//     if (response) {
//       setData(await getData(orderBy, order));
//       setInitial(await getData("id", "ASC"));
//       alert("Row successfully edited");
//     }
//   }

  
//   useEffect(() => {
//     (async()=>{
//     const res = await getData();
//     setInitial(await getData("id", "ASC"));
//     setData(res)})();
//   },[]);
  
  
//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelecteds = data.map((n) => n.id);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, id) => {
//     const selectedIndex = selected.indexOf(id);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, id);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );

//     }
//     setSelected(newSelected);

//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const createSortHandler = (row_name) => {
//     let newOrder = (order === "ASC" ? "DESC" : "ASC");
//     if (orderBy === row_name) {
//       setOrder(newOrder);
//     }
//     else {
//       setOrder("ASC");
//     }
//     setOrderBy(row_name);
//   }

//   const isSelected = (id) => selected.indexOf(id) !== -1;

//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

//   // const openPredict = () => {
//   //   let i=0;
//   //   if (selected.length >i) {
//   //     var customer1 = data.filter(c => c.id === selected[0])[i++];
//   //     setPredictCustomer({ predict_id:customer1.id, edit_predict_doc_id:customer1.doc_id,
//   //     })
//   //   }
//   // }
//   return (
//     <>
//       <>

//         <div >

//         </div>
//         <Box sx={{ width: '100%' }}>
//           <TableContainer component={Paper}>

//             <Table className="DataTable" sx={{ minWidth: 650 }} size='small' aria-label="a dense table" >
//               <TableHead>
//                 <TableRow className="DataTableHeader" >
//                   <TableCell padding="checkbox" style={{
//                     backgroundColor: "#555"
//                     , color: "white"
//                   }}><Checkbox
//                       style={{ color: 'white' }}
//                       indeterminate={selected.length > 0 && selected.length < data1.length}
//                       checked={data1.length > 0 && selected.length === data1.length}
//                       onChange={handleSelectAllClick} />
//                   </TableCell>
//                   <TableCell align=" left" style={{ backgroundColor: "#555", color: "white" }} onClick={() => createSortHandler("id")}> Sl no.</TableCell>
//                   <TableCell align=" left" style={{ backgroundColor: "#555", color: "white" }} onClick={() => createSortHandler("business_code")}>Customer Order Id</TableCell>
//                   <TableCell align=" left" style={{ backgroundColor: "#555", color: "white" }} onClick={() => createSortHandler("cust_number")}> Sales Org</TableCell>
//                   <TableCell align=" left" style={{ backgroundColor: "#555", color: "white" }} onClick={() => createSortHandler("clear_date")}> Distribution Channel </TableCell>
//                   <TableCell align=" left" style={{ backgroundColor: "#555", color: "white" }} onClick={() => createSortHandler("buisness_year")}>Customer Number</TableCell>
//                   <TableCell align=" left" style={{ backgroundColor: "#555", color: "white" }} onClick={() => createSortHandler("doc_id")}>Company Code</TableCell>
//                   <TableCell align=" left" style={{ backgroundColor: "#555", color: "white" }} onClick={() => createSortHandler("posting_date")}>Order Currency</TableCell>
//                   <TableCell align=" left" style={{ backgroundColor: "#555", color: "white" }} onClick={() => createSortHandler("document_create_date")}>Amount In Usd</TableCell>
//                   <TableCell align=" left" style={{ backgroundColor: "#555", color: "white" }} onClick={() => createSortHandler("due_in_date")}>Order Creaton Date</TableCell>
          
//                 </TableRow>
//               </TableHead>

//               <TableBody>
//                 {data1.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(customer => (
//                   <TableRow
//                     hover
//                     onClick={(event) => handleClick(event, customer.id)}
//                     role="checkbox"
//                     aria-checked={isSelected(customer.id)}
//                     tabIndex={-1}
//                     selected={isSelected(customer.id)}
//                     key={customer.id}
//                     sx={{ '&:last-child TableCell, &:last-child th': { border: 0 } }}
//                   >
//                     <TableCell padding="checkbox" style={{ backgroundColor: "#555" }} >
//                       <Checkbox label='My checkbox'
//                         labelStyle={{ color: 'white' }}
//                         iconStyle={{ fill: 'white' }}
//                         inputStyle={{ color: 'white' }}
//                         style={{ color: 'white' }}
//                         checked={isSelected(customer.id)}
//                       />
//                     </TableCell>
//                     <TableCell padding="checkbox" style={{ backgroundColor: "#555", color: "white" }}  >{customer.id}</TableCell>
//                     <TableCell padding="checkbox" style={{ whiteSpace: "nowrap", backgroundColor: "#555", color: "white" }} align=" left">{customer.cust_order_id}</TableCell>
//                     <TableCell padding="checkbox" style={{ whiteSpace: "nowrap", backgroundColor: "#555", color: "white" }} align=" left">{customer.sales_org}</TableCell>
//                     <TableCell padding="checkbox" style={{ whiteSpace: "nowrap", backgroundColor: "#555", color: "white" }} align=" left">{customer.distr_channel}</TableCell>
//                     <TableCell padding="checkbox" style={{ whiteSpace: "nowrap", backgroundColor: "#555", color: "white" }} align=" left">{customer.cust_number}</TableCell>
//                     <TableCell padding="checkbox" style={{ whiteSpace: "nowrap", backgroundColor: "#555", color: "white" }} align=" left">{customer.ccode}</TableCell>
//                     <TableCell padding="checkbox" style={{ whiteSpace: "nowrap", backgroundColor: "#555", color: "white" }} align=" left">{customer.curr_type}</TableCell>
//                     <TableCell padding="checkbox" style={{ whiteSpace: "nowrap", backgroundColor: "#555", color: "white" }} align=" left">{customer.usd_amount}</TableCell>
//                     <TableCell padding="checkbox" style={{ whiteSpace: "nowrap", backgroundColor: "#555", color: "white" }} align=" left">{customer.order_creation}</TableCell>
                    
//                   </TableRow>

//                 ))}
//                 {emptyRows > 0 && (
//                   <TableRow>
//                     <TableCell colSpan={6} />
//                   </TableRow>
//                 )}
//               </TableBody>

//             </Table>
//           </TableContainer>
//           <TablePagination
//             rowsPerPageOptions={[5, 10, 25, 50]}
//             component="div"
//             count={data1.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//             style={{ color: "white" }}
//           />
//         </Box>
//       </>
//     </>
//   );
// }
// export default MyGrid;