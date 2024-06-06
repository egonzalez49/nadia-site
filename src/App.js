import * as React from 'react';
import { Grid, Stack } from '@mui/material';

import Footer from './components/Footer';
import PasswordForm from './components/PasswordForm';

function App() {
  const [hidden, setHidden] = React.useState(true);

  const onClose = () => {
    setHidden(false);
  };

  return (
    <React.Fragment>
      <PasswordForm onClose={onClose} />
      <Stack
        className="app"
        textAlign="center"
        minHeight="100vh"
        sx={{ opacity: hidden ? 0 : 1 }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ flex: 1 }}
        >
          <img
            src="https://media.tenor.com/AL4ZMzBLtvgAAAAi/aww-cute.gif"
            alt="cute bear love you gif"
            style={{ marginLeft: '-3.2em' }}
          />
        </Grid>
        <Footer />
      </Stack>
    </React.Fragment>
  );
}

export default App;
