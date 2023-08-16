import { useState, useEffect } from 'react';

const useCustomSearch = (searchTerm) => {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/tovars');

        if (!response.ok) {
          throw new Error('Server Error!');
        }

        const data = await response.json();
        const filteredItems = data.data.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredItems(filteredItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return filteredItems;
};

export default useCustomSearch;
