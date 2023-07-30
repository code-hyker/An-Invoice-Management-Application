import React from 'react'
import { Button } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Box, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import EditIcon from "@material-ui/icons/Edit";
import CancelIcon from "@material-ui/icons/Cancel";

export default function EditButton({ edit_curr_type, edit_ccode, edit_distr_channel, openEdit, editChangeHandler, editHandler, num }) {
  const [data1, setData1] = React.useState(false);
  const f1 = () => {
    if (num === 1) {
      setData1(true);
      openEdit();
    }
  }
  const f2 = () => {
    setData1(false);
  }
  const f3 = () => {
    editHandler();
    setData1(false);
  }

  return (
    <>
      <Button variant="outlined" size="small" style={{ margin: "0.25%", backgroundColor: "#fc7500"}}  onClick={f1} disabled={false}>
        Edit
      </Button>

      <Dialog
        open={data1}
        onClose={f2}
        fullWidth={true}
        maxWidth={"sm"}
        PaperProps={{
          style: {
            backgroundColor: "#2d4250"
          }
        }}
      >
        <DialogTitle style={{ color: "white" }}>Edit</DialogTitle>
        <DialogContent>
          <Box sx={{ flexGrow: 2 }}>
            <Grid container item spacing={6}>
              <Grid item sm={5} >
                <TextField

                  variant="filled"
                  label="Order Currency"
                  id="curr_type"
                  name="edit_curr_type"
                  value={edit_curr_type}
                  onChange={editChangeHandler}
                  fullWidth
                  style={{ backgroundColor: "white", borderRadius: "5px" }}
                />
              </Grid>
              <Grid item sm={5}>
                <TextField

                  variant="filled"
                  label="Company Code"
                  id="ccode"
                  name="edit_ccode"
                  value={edit_ccode}
                  onChange={editChangeHandler}
                  fullWidth
                  style={{ backgroundColor: "white", borderRadius: "5px" }}
                />
              </Grid>
            </Grid>
            <Grid container item spacing={6}>
            <Grid item sm={5} >
                <TextField

                  variant="filled"
                  label="Distribution Channel"
                  id="distr_channel"
                  name="edit_distr_channel"
                  value={edit_distr_channel}
                  onChange={editChangeHandler}
                  fullWidth
                  style={{ backgroundColor: "white", borderRadius: "5px" }}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>

        <DialogActions>
          <Box sx={{ flexGrow: 2 }} textAlign="center">
            <Grid container item spacing={1}>
              <Grid item sm={6}>
                <Button
                  onClick={f3}
                  variant="outlined"
                  style={{ color: "white", borderColor: "white" }}
                  fullWidth
                  startIcon={<EditIcon style={{ backgroundColor: "white", color: "grey", borderRadius: "5px" }} />}
                >
                  EDIT
                </Button>
              </Grid>
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
            </Grid>
          </Box>
        </DialogActions>
      </Dialog>

    </>
  )
}
