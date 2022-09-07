import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Form } from './components/FormBuilder';

function App() {
  return (
    <Box>
      <Typography variant="h5">ViteJS Forms</Typography>
      <Box sx={{ pt: 2 }}>
        <Form></Form>
      </Box>
    </Box>
  );
}

export default App;
