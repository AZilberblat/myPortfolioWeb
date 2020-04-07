import React from 'react';
import Project from '../Project';
import BlockChain from '../../assets/blockchain.gif';
import Robbi from '../../assets/robbi.gif';
import Sally from '../../assets/sally1.gif';

import './index.css';

const Projects = () => {
  const blockChain =
    'A Decentralized application based on ethereum blockchain network The main goal of this Dapp is to vote to the upcoming elections in a secure way from your local computer, The project Stack: SmartContracts deployed on the etheruem network written in solidity, Node.js, Express.js, Web3, Ganache, MetaMask and React';
  const sally =
    'An application developed on Flutter with Dart. Fully functional, makes your own store digital, this apps runs on ios/android. You can sign in as an admin if you have a store and items you want to sell, or as a customer you can sign in with firebase.auth and google. The app enables you to scan products from the store with your phone camera and add it to your basket, and then you can pay for your basket with slack api. This project uses the flutter state managment library "Provider" and also includes a website with ML model with customers habits to the admin';
    const robbi =
    'A game created on unity engine and C#. This game was created for the final project in "Game Development" course'
  
  return (
    <div className='projects'>
      <div className='container-fluid'>
        <h2 className='projects-title'>Projects</h2>
        <Project
          desc={blockChain}
          img={BlockChain}
          website={'https://mizrahiomer.github.io/todolist/'}
          source={'https://github.com/AZilberblat/BlockChain-Elections'}
          title={'Elections based on Blockchain'}
        />
        <Project
          desc={sally}
          img={Sally}
          website={'https://mizrahiomer.github.io/tictactoe/'}
          source={'https://github.com/AZilberblat/Sally-Smart-Grocery'}
          title={'Sally Smart Grocery'}
        />
        <Project
          desc={robbi}
          img={Robbi}
          website={'https://nba-app-7e573.firebaseapp.com/'}
          source={'https://github.com/AZilberblat/3D-Game_Robbi'}
          title={'Robbi Unity 3D Game'}
        />
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
      >
        <polygon fill='#252934' points='100,100 0,100 0,0' />
      </svg>
    </div>
  );
};

export default Projects;
