import * as React from 'react';
import {
  Box,
  Button,
  Dialog,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

const EXPECTED_NICKNAME = 'bebe';

function PasswordForm({ onClose }) {
  const [open, setOpen] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let input = e.target.nickname.value;

    if (input.toLowerCase() === EXPECTED_NICKNAME) {
      handleClose();
    } else {
      setErrorMessage("Nope, that's not right...");
    }
  };

  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
      >
        <Grid item>
          <Box
            component="form"
            autoComplete="off"
            onSubmit={handleSubmit}
            noValidate
            sx={{ padding: '2em' }}
          >
            <Stack spacing={5} maxWidth="18em">
              <Typography variant="body1" textAlign="center">
                To confirm you are{' '}
                <Box component="span" color="primary.main">
                  Nadia
                </Box>
                ,<br /> please enter the nickname you call me.
              </Typography>
              <TextField
                id="nickname"
                variant="standard"
                type="password"
                error={errorMessage.length}
                sx={{ input: { textAlign: 'center' } }}
                placeholder="Hint: It's spanish and 4 letters."
                helperText={errorMessage}
              />
              <Button variant="outlined" type="submit">
                Submit
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default PasswordForm;
