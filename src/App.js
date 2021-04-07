import React from 'react';
import AsideMenu from './components/AsideMenu';
import Browse from './components/Browse';
import Client from './components/Client';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import JustArrive from './components/JustArrive';


function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(function(){
      (async function(){
        const response = await fetch('https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc', {
          headers:{
            "Content-Type": "application/json",
            "accept": "application/json",
            "x-api-key": process.env.REACT_APP_APIKEY
          }
        });
        const { nodes } = await response.json();
        setItems(nodes);
      })();
  }, []);

  return (
    <>
      <Header/>
      <Hero/>
      <Browse/>
      <JustArrive items={items}/>
      <Client/>
      <AsideMenu/>
      <Footer/>
    </>
  );
}

export default App;
