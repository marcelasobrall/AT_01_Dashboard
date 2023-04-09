import React from 'react';

function SideNav() {
  return (
    <aside style={{ 
      backgroundColor: '#9400D3',
      color: '#fff',
      padding: '30px',
      width: '200px',
      border: '1px solid white'
    }}>
      <h2 style={{ 
        fontSize: '24px',
        margin: '0 0 20px'
      }}>Menu</h2>
      <ul style={{ 
        listStyle: 'none',
        margin: 0,
        padding: 0
      }}>
        <li style={{ 
          marginBottom: '17px',
          fontSize: '18px',
        }}>Viagens</li>
        <li style={{ 
          marginBottom: '18px',
          fontSize: '18px'
        }}>Finanças</li>
        <li style={{ 
          marginBottom: '18px',
          fontSize: '18px'
        }}>Investimentos</li>
        <li style={{ 
          marginBottom: '18px',
          fontSize: '18px'
        }}>Rendimentos</li>
        <li style={{ 
          marginBottom: '18px',
          fontSize: '18px'
        }}>IOF</li>
        <li style={{ 
          marginBottom: '18px',
          fontSize: '18px'
        }}>Dolar</li>
        <li style={{ 
          marginBottom: '18px',
          fontSize: '18px'
        }}>Gestão</li>
        <li style={{ 
          marginBottom: '18px',
          fontSize: '18px'
        }}>Produtos</li>
        <li style={{ 
          marginBottom: '18px',
          fontSize: '18px'
        }}>Gastos</li>
        <li style={{ 
          marginBottom: '18px',
          fontSize: '18px'
        }}>Trabalho</li>
        <li style={{ 
          marginBottom: '18px',
          fontSize: '18px'
        }}>Networking</li>
        <li style={{ 
          marginBottom: '18px',
          fontSize: '18px'
        }}>Lazer</li>
        <li style={{ 
          marginBottom: '18px',
          fontSize: '18px'
        }}></li>
      </ul>
    </aside>
  );
}

export default SideNav;
