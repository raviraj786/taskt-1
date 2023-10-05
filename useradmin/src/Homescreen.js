// import { useEffect, useState } from "react"


// export default function Homescreen() {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);


  
   
//     useEffect(() => {
//         // Define the API URL you want to fetch data from
//         const apiUrl = 'http://localhost:5000/user'; // Replace with your API URL
    
//         // Use the fetch API to make the GET request
//         fetch(apiUrl)
//           .then((response) => {
//             if (!response.ok) {
//               throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json();
//           })
//           .then((data) => {
//             setData(data);
//             setLoading(false);
//           })
//           .catch((error) => {
//             setError(error);
//             setLoading(false);
//           });
//       }, []); // The empty array ensures this effect runs once, similar to componentDidMount
    
//       if (loading) {
//         return <div>Loading...</div>;
//       }
    
//       if (error) {
//         return <div>Error: {error.message}</div>;
//       }


  


//   return (
//     <div>
//       <h1>Data from API</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.name} {item.businessName} {item.number}{item.email}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductFilter from './comonets/ProductFilter';
import SearchBox from './comonets/SearchBox';

function Homescreen() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  
  useEffect(() => {
    // Fetch products from your API here.
    // Replace 'YOUR_API_URL_FOR_PRODUCTS' with the actual URL.
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data); // Initially, show all products
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);



  const handleCategoryChange2 = (selectedCategory) => {
    if (selectedCategory === '') {
      setFilteredProducts(products); // Show all products
    } else {
      // Filter products by selected category
      const filtered = products.filter((product) => product.category === selectedCategory);
      setFilteredProducts(filtered);
    }
  };


 
  const handleSearchChange = (searchValue) => {
    setSearchTerm(searchValue);
    // Filter products by search term
    const filtered = products.filter((product) =>
     product.title.toLowerCase().includes(searchValue.toLowerCase())
     
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto p-5 ">


{/* <div>
      <h2>Welcome, {user?.name}</h2>
      <p>Email: {user?.email}</p>
      <p>Profile Picture: {user?.imageUrl}</p>
    </div> */}







{/* sharch product */}
<h1 className="text-2xl font-bold mb-4">Product Filter Example</h1>
      <div className="grid grid-cols-2 gap-4">
        <ProductFilter onCategoryChange={ handleCategoryChange2} />
        <SearchBox onSearchChange={handleSearchChange} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p>{product.title}</p>
            <p className="text-gray-600">{product.category}</p>
          </div>
        ))}
      </div>


    </div>
  );
}

export default Homescreen;
