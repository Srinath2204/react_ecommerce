import './App.css';
import Card from './card';
import { useState } from 'react';

function App() {
 let products=[
    {
      id : 1,
      name : "product 1",
      price : 120,
      description : "Lorem ipsum dolor sit amet, consectrtur adipisicing elit.",
      rating : 3
    },
    {
      id : 2,
      name : "product 2",
      price : 180,
      description : "Lorem ipsum dolor sit amet, consectrtur adipisicing elit. Amet numquam aspernatur!",
      rating : 4
    },
    {
      id : 3,
      name : "product 3",
      price : 520,
      description : "Lorem ipsum dolor sit amet, consectrtur adipisicing elit. Amet numquam aspernatur!",
      rating : 4
    },
    {
      id : 4,
      name : "product 4",
      price : 960,
      description : "Lorem ipsum dolor sit amet, consectrtur adipisicing elit. Amet numquam aspernatur!",
      rating : 3
    },
  ]
  const [cart, setCart]= useState([])
  const [total, setTotal]= useState(0)
  let addToCart= (product)=>{
    setCart([...cart, product])
    setTotal(total + product.price)
  }
  let removeCart = (item) => {
    setCart(cart.filter(obj => obj.id !== item.id))
    setTotal(total - item.price)
  }
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <h1 className="my-4">My Cart</h1>
          <div className="list-group">
           {
             cart.map((item)=>{
               return <div className="list-group-item">
                 {item.name} - ${item.price}
                 <span>
                   <button className="btn btn-sm btn-danger" onClick={() => {
                        removeCart(item)
                        }}>x</button>
                 </span>
                 </div>
             })
           }
          </div>
          <h3>Total - ${total}</h3>
        </div>
        <div className="col-lg-9">
          <div className="row">
            {
              products.map((product)=>{
                return <Card productData={product} handleCart={addToCart}></Card>
              })
            }
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
