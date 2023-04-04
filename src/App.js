import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://randomuser.me/api/?results=1");
      const data = await response.json();
      setData(data.results[0]);
      console.log(data);
    }
    fetchData();
  }, []);

  function handleRefresh() {
    window.location.reload();
  }

  return (
    <div className="App">
      <div className="flex">
        {data && (
          <div>
            <div class="container">
              <header>
                <img src={data.picture.large} alt="user" />
                <h1>
                  {data.name.first} {data.name.last}
                </h1>
                <p>
                  {data.location.city}, {data.location.country}
                </p>
              </header>

              <section class="section">
                <h2 class="section-title">Contact Information</h2>
                <div class="item">
                  <span class="item-label">Email:</span>
                  <span>{data.email}</span>
                </div>
                <div class="item">
                  <span class="item-label">Phone:</span>
                  <span>{data.phone}</span>
                </div>
                <div class="item">
                  <span class="item-label">Cell:</span>
                  <span>{data.cell}</span>
                </div>
              </section>

              <section class="section">
                <h2 class="section-title">Personal Information</h2>
                <div class="item">
                  <span class="item-label">Gender:</span>
                  <span>{data.gender}</span>
                </div>
                <div class="item">
                  <span class="item-label">Date of Birth:</span>
                  <span>{new Date(data.dob.date).toLocaleDateString()}</span>
                </div>
                <div class="item">
                  <span class="item-label">Age:</span>
                  <span>{data.dob.age}</span>
                </div>
                <div class="item">
                  <span class="item-label">Nationality:</span>
                  <span>{data.nat}</span>
                </div>
                <div className="item">
                  <span class="item-label">Address:</span>
                  <span>
                    {data.location.street.number} {data.location.street.name},{" "}
                    {data.location.city}, {data.location.state}{" "}
                    {data.location.postcode}, {data.location.country}
                  </span>
                </div>
              </section>
            </div>
            <button onClick={handleRefresh} className="refresh-button">
              Refresh Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
