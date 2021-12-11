import { FC } from 'react';
import { Container, Stack, Button } from '@mui/material';
import Header from 'components/Header';
import TaskList from 'components/TaskList';

const Home: FC = () => {

  return (
    <>
      <Header />
      <Container component="main">
        <Stack direction="column" alignItems="center" justifyContent="center" minHeight="90vh">
          <TaskList />
        </Stack>
      </Container>
    </>
  )
}

export default Home
