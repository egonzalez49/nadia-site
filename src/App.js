import * as React from 'react';
import { Stack } from '@mui/material';

import Footer from './components/Footer';
import PasswordForm from './components/PasswordForm';
import './App.css';

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
        <main>
          <p>Lorem ipsum...</p>
        </main>
        <Footer />
      </Stack>
    </React.Fragment>
  );
}

export default App;
