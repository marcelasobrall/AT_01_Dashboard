import React from 'react';
import './MainHeader.css';

export default function MainHeader() {
  return (
    <header className="main-header">
      <h1>Dashboard</h1>
      <nav>
        <a href="#">Perfil</a>
        <a href="#">Configurações</a>
        <a href="#">Sair</a>
      </nav>
    </header>
  );
}
