import React from 'react'



const API = "https://api.edamam.com/api/recipes/v2";
const API_ID = "0d2dab7c";
const API_KEY = "91f1bd027a8a04dc52a7810b4657d595";



function HomePage() {

    const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);

  const onSearch = async () => {
    const data = await axios
      .get(API, {
        params: {
          app_key: API_KEY,
          app_id: API_ID,
          page: 1,
          q: searchValue,
        },
      })
      .then((res) => res.data);
    setResults(data.results);
  };


  return (
    <div>
    <h2>Suggested Meals for You</h2>


    </div>
  )
}

export default HomePage