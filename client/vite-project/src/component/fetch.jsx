const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/users');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  export default fetchData;