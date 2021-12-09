import { useEffect, useState } from "react";

const App = () => {
  const [loading,setLoading]= useState(true);
  const [coins,setCoins] = useState([]);
  const [cost,setCost]= useState(1);
  const [price,setPrice] = useState(0);
  const onChange= (event) => {
    setCost(event.target.value);
    setPrice(0);
  };
  const inputChange = (event) => 
    {setPrice(event.target.value)
    };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
return(
  
  <>
  <h1>코인정보</h1>
  {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <h4>코인 갯수 : {coins.length}</h4>
          
          <select onChange={onChange}>
            {coins.map((coin,index) => (
              <option
              key={index} 
              value={coin.quotes.USD.price} 
              id={coin.symbol}
              symbol = {coin.symbol} >{coin.name}: {coin.quotes.USD.price}</option>
            ))}
          </select>
          <div>
          <input 
          type="number"
          onChange={inputChange}
          value={price}
          />
          <p>구매 가능한 갯수: {price/cost}</p>
          </div>
        </div>
      )}
  
  </>
  )
}

export default App;
