import React from 'react'
import { Button } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from "@material-ui/icons/Delete";
import CancelIcon from "@material-ui/icons/Cancel";

export default function DeleteButton({ deleteHandler }) {
  const [data1, setData1] = React.useState(false);
  const f1 = () => {
    setData1(true);
  }
  const f2 = () => {
    setData1(false);
  }
  const f3 = () => {
    deleteHandler();
    setData1(false);
  }

  return (
    <>
      <Button variant="contained"
                size="small"
                style={{ margin: "0.25%", backgroundColor: "#fc7500"}} onClick={f1}>
        Delete
      </Button>
      <Dialog
        
        open={data1}
        onClose={f2}
        fullWidth={true}
        maxWidth={"xs"}
        PaperProps={{
          style: {
            backgroundColor: "#555"
          }
        }}
      >
        <DialogTitle style={{ color: "white" }}>Delete Record ?</DialogTitle>
        <DialogContent style={{ color: "white", fontSize: "18px" }}>

          Are you sure you want to delete these record[s] ?
        </DialogContent>

        <DialogActions>
          <Box sx={{ flexGrow: 2 }} textAlign="center">
            <Grid container item spacing={1}>
              <Grid item sm={6}>
                <Button
                  onClick={f2}
                  variant="outlined"
                  style={{ color: "white", borderColor: "white" }}
                  fullWidth
                  startIcon={<CancelIcon />}
                >
                  CANCEL
                </Button>
              </Grid>
              <Grid item sm={6}>
                <Button
                  onClick={f3}
                  variant="outlined"
                  style={{ color: "white", borderColor: "white" }}
                  fullWidth
                  startIcon={<DeleteIcon style={{ backgroundColor: "white", color: "grey", borderRadius: "5px" }} />}
                >
                  DELETE
                </Button>
              </Grid>
            </Grid>
          </Box>
        </DialogActions>
      </Dialog>

    </>
  )
}