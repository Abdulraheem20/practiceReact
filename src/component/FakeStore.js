import React, { useEffect, useState } from 'react'
import "./styles/fakeStore.css";
import axios from 'axios'

const FakeStore = () => {
  const [fakeApi, setFakeApi] = useState([])
  const [loading, setloading] = useState(true)
  useEffect(()=>{
    const getData = async ()=>{
      try{
        let url = 'https://fakestoreapi.com/products/'
        const products = await axios.get(url)
        console.log(products.data)
        setFakeApi(products.data)
        setloading(false)

      }catch(err){
        console.log(err)
      }
    }
     getData()
  }, [])
  const displayProduct = (itr)=>{
    return <div className="sub-container" key={itr.id}>
    <h3>{itr.category}</h3>
    <img src={itr.image} alt="shirt1" className="image1"/>
    <h2>{itr.title.slice(0, 20)}</h2>
    <p>{itr.description.slice(0, 50)}</p>
    <h4>Price:${itr.price}</h4>
    <button className= 'addcart'>Add to cart</button>
</div>
  }
  return (
    <div>
        <div className="main_container">
          {loading? 'loading...': fakeApi.map(displayProduct)} 
        </div>
    </div>
  )
}

export default FakeStore