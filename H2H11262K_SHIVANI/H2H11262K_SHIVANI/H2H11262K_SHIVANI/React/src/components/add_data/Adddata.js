import React from "react";
import { Button } from "@material-ui/core";
import { Box, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import CancelIcon from "@material-ui/icons/Cancel";

function Adddata(
  cust_order_id,
  sales_org,
  distr_channel,
  cust_number,
  ccode,
  curr_type,
  usd_amount,
  order_creation,
  changeHandler,
  submitHandler
) {
  const [data1, setData1] = React.useState(true);
 
  const f2 = () => {
    setData1(false);
  }
  const f3 = () => {
    submitHandler();
    setData1(false);
  }
  return (
    <div>
      <Box sx={{ flexGrow: 2 }}>
        <Grid container spacing={2}>
          <Grid container item spacing={2}>
            <React.Fragment>
              <Grid item xs={3} sm={3} md={3} lg={3}>
                <TextField
                   placeholder="Customer order id"
                   id="cust_order_id"
                   variant="filled"
                   name="cust_order_id"
                   onChange={changeHandler}
                   style={{ backgroundColor: "white", borderRadius: "5px" }}
                   fullWidth
                />
              </Grid>
              <Grid item xs={3} sm={3} md={3} lg={3}>
                <TextField
                 

                  variant="filled"
                  placeholder="Sales organisation"
                  id="sales_org"
                  name="sales_org"
                  onChange={changeHandler}
                  fullWidth
                  style={{ backgroundColor: "white", borderRadius: "5px" }}
                />
              </Grid>
              <Grid item xs={6} sm={3} md={3} lg={6}>
                <TextField
                    InputLabelProps={{ shrink: true }}
                  variant="filled"
                  placeholder="Distribution Channel"
                  id="distr_channel"
                  name="distr_channel"
                    value={distr_channel}
                    onChange={changeHandler}
                  fullWidth
                  style={{ backgroundColor: "white", borderRadius: "5px" }}
                />
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={3} sm={3} md={3} lg={3}>
                <TextField
                  placeholder="Customer Number"
                  id="cust_number"
                  variant="filled"
                  name="cust_number"
                    value={cust_number}
                    onChange={changeHandler}
                  fullWidth
                  style={{ backgroundColor: "white", borderRadius: "5px" }}
                />
              </Grid>

              <Grid item xs={3} sm={3} md={3} lg={3}>
                <TextField
                  placeholder="Company Code"
                  id="ccode"
                  variant="filled"
                  name="ccode"
                    value={ccode}
                    onChange={changeHandler}
                  fullWidth
                  style={{ backgroundColor: "white", borderRadius: "5px" }}
                />
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2}>
                <TextField
                  placeholder="Order Currency"
                  id="curr_type"
                  variant="filled"
                  name="curr_type"
                    value={curr_type}
                    onChange={changeHandler}
                  fullWidth
                  style={{ backgroundColor: "white", borderRadius: "5px" }}
                />
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2}>
                <TextField
                  placeholder="Amount In Usd"
                  id="usd_amount"
                  variant="filled"
                  name="usd_amount"
                    value={usd_amount}
                    onChange={changeHandler}
                  fullWidth
                  style={{ backgroundColor: "white", borderRadius: "5px" }}
                />
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2}>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  type="date"
                  variant="filled"
                  label="Order Creation Date"
                  id="order_creation"
                  name="order_creation"
                    value={order_creation}
                    onChange={changeHandler}
                  fullWidth
                  style={{ backgroundColor: "white", borderRadius: "5px" }}
                />
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <Button
                    onClick={f3}
                  variant="outlined"
                  style={{
                    color: "white",
                    borderColor: "white",
                    backgroundColor: "#fc7500",
                  }}
                  fullWidth
                  startIcon={
                    <AddIcon
                      style={{
                        backgroundColor: "white",
                        color: "grey",
                        borderRadius: "5px",
                      }}
                    />
                  }
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <Button
                    onClick={f2}
                  variant="outlined"
                  style={{
                    color: "white",
                    borderColor: "white",
                    backgroundColor: "red",
                  }}
                  fullWidth
                  startIcon={<CancelIcon />}
                >
                  Clear
                </Button>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Adddata;
