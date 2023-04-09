import React from 'react';
import MainHeader from './components/MainHeader';
import SideNav from './components/SideNav';
import MainOverview from './components/MainOverview';
import OverviewCard from './components/OverviewCard';
import MainCards from './components/MainCards';
import BadOverview from './components/BadOverview';
import './App.css';


function App() {
  return (
    <div className="App">
      <MainHeader />
      <div className="container">
        <SideNav />
          <main className="main-content">
            <h2>Bem-vindo à sua Dashboard</h2>
            <p>Esta é a sua página sobre Investimentos</p>
          </main>
          <MainOverview/>
          <BadOverview/>
          <MainCards />
          <OverviewCard/>
      </div>
    </div>
  );
}

export default App;