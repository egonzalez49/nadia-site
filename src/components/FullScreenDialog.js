import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog fullScreen open={open} onClose={handleClose}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: '100vh' }}
        >
          <Grid item>
            <Typography
              variant="body1"
              gutterBottom
              align="center"
              sx={{ padding: '1em' }}
            >
              You hereby acknowledge you are Nadia.
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={handleClose}>
              Acknowledge
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </React.Fragment>
  );
}
