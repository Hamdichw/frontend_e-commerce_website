import React from 'react'
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Newsletter from '../Components/Newsletter'
import Categories from  '../Components/categories/categories'
import Products from '../Components/popularProducts/Products'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className=' w-screen'>
        <Announcement />
        <Navbar/>
       <Slider />
       <Categories />
       <Products />
       <Newsletter />
       <Footer />
    </div>
  )
}

export default Home