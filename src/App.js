import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Loading from './components/loading spinner/Loading'
function App() {


  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)


  // useEffect(() => {
  //   console.log(`Loading: ${loading}`);
  //   console.log(`Data: ${JSON.stringify(data)}`);
  // }, [loading, data]);


  const handleClick = async () => {
    setLoading(true)
    try {
      const response = await axios.get("https://reqres.in/api/users?page=1")
      console.log(response.data)
      setData(response.data)

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }


  return (
    <>

      <nav>
        <div className="brand-name">MyUsers</div>
        <button onClick={handleClick}>Get Users</button>
      </nav>


      {loading && <Loading />}


      <div className="container">
        {Array.isArray(data.data) && data.data.map((item) => (
          <div className="card" key={item.id}>
            <div className="email">{item.email}</div>
            <div className="name">{item.first_name}</div>
            <img src={item.avatar} alt="avatar" />
          </div>
        ))}
      </div>


    </>
  );
}

export default App;
