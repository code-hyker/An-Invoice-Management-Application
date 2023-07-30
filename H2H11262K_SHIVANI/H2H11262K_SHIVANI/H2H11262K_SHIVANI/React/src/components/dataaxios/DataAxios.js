import axios from "axios";

export const getData = async function() {
    
    let response =  await axios.get("http://localhost:8080/h2h_milestone_3/fetchdata");
    let data = response.data
    return data;
}

export const addCustomer = async ({ cust_order_id , sales_org , distr_channel , cust_number , ccode , curr_type , usd_amount , order_creation }) => {

    let d = "cust_order_id=" + cust_order_id + "&sales_org=" + sales_org + "&distr_channel=" + distr_channel + "&cust_number=" + cust_number + "&ccode=" + ccode + "&curr_type=" + curr_type + "&usd_amount=" + usd_amount + "&order_creation =" + order_creation;

    let response = await axios.get("http://localhost:8080/h2h_milestone_3/Adddata?" + d);
    
    return response.data;
}

export const updateCustomer = async ({ edit_id, edit_distr_channel, edit_ccode , edit_curr_type }) => {
    let data = "id=" + edit_id + "&distr_channel=" + edit_distr_channel + "&ccode=" + edit_ccode +"&curr_type=" + edit_curr_type;
    let response = await axios.get("http://localhost:8080/h2h_milestone_3/editdata?" + data);
    
    return response.data;
}

export const deleteCustomer = async (id) => {

    let data = "id=" + id;
    let response = await axios.get("http://localhost:8080/h2h_milestone_3/deletedata?" + data);
    // console.log(response.data);
    return response.data;
}

export const searchCustomer = async (cust_order_id) => {

    let data = "cust_order_id=" + cust_order_id;
    let response = await axios.get("http://localhost:8080/h2h_milestone_3/search_customerid?" + data);
    //console.log(response.data);
    return response.data;
}
