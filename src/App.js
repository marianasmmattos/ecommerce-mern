import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeScreen from './screens/HomeScreen';
import './App.css';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Container className='py-4'>
          <HomeScreen></HomeScreen>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
