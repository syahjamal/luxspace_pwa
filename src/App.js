import React from 'react';
import AsideMenu from './components/AsideMenu';
import Browse from './components/Browse';
import Client from './components/Client';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import JustArrive from './components/JustArrive';
import Offline from './components/Offline.js';


function App() {
  const [items, setItems] = React.useState([]);
  const [offlineStatus, setofflineStatus] = React.useState(!navigator.onLine);

  function handleOfflineStatus() {
    setofflineStatus(!navigator.onLine);
  }

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

        const script = document.createElement("script");
        script.src = "/carousel.js";
        script.async = false;
        document.body.appendChild(script);
      })();
      
      handleOfflineStatus();
      window.addEventListener('online', handleOfflineStatus);
      window.addEventListener('offline', handleOfflineStatus);

      return function () {
        window.removeEventListener('online', handleOfflineStatus);
        window.removeEventListener('offline', handleOfflineStatus);
      }
  }, [offlineStatus]);

  return (
    <>
      {
        offlineStatus && <Offline/>
      }
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
