import { useEffect, useState } from "react"


export default function Homescreen() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


  
   
    useEffect(() => {
        // Define the API URL you want to fetch data from
        const apiUrl = 'http://localhost:5000/user'; // Replace with your API URL
    
        // Use the fetch API to make the GET request
        fetch(apiUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            setData(data);
            setLoading(false);
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
      }, []); // The empty array ensures this effect runs once, similar to componentDidMount
    
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }


  


  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name} {item.businessName} {item.number}{item.email}</li>
        ))}
      </ul>
    </div>
  )
}
