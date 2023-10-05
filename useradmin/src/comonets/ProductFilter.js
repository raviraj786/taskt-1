import React, { useState, useEffect } from 'react';
import axios from 'axios';










const ProductFilter = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState([]);

 
  const [selectedCategory, setSelectedCategory] = useState('');
  console.log(selectedCategory)

  useEffect(() => {
    // Fetch product categories from your API here.
    // Replace 'YOUR_API_URL_FOR_CATEGORIES' with the actual URL.
    axios.get('https://fakestoreapi.com/products/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);



  const handleCategoryChange = (event) => {
    console.log(event)
    const selectedValue = event.target.value;
    console.log(selectedValue)
    setSelectedCategory(selectedValue);
    onCategoryChange(selectedValue); // Callback to parent component
  };

  return (
    <div className="mb-4">
      <label htmlFor="category">Filter by Category:</label>
      <select
        id="category"
        name="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="w-full p-2 rounded-md border"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilter;
