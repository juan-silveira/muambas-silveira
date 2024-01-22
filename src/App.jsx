import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartContextProvider } from './contexts/cartContext';
import Orders from './components/Orders';
// import { getFirestore, getDocs, collection } from 'firebase/firestore'; //doc, getDoc
// import { useEffect, useState } from 'react';


export default function App() {

  // const [products, setProducts] = useState([]);
  
  // useEffect(()=>{
  //   const database = getFirestore();
  //   console.log(database);

  //   const docRef = doc(database, 'products', 'k2bUUUpy1g4tqRWsPtJ2');
  //   const collectionRef = collection(database, 'products');

  //   getDoc(docRef).then((snapshot)=>{
  //     if(snapshot.exists()){
  //       setProducts([
  //         {snapshotId: snapshot.id, ...snapshot.data()}])
  //     }
  //   })

  //   getDocs(collectionRef).then((snapshot)=>{
  //     if(snapshot.size > 0){
  //       setProducts(snapshot.docs.map((doc)=> ({ id: doc.id, ...doc.data()})));
  //     }
  //   })
  // }, [])

  return (

    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}
