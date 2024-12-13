import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="navbar-logo">
            <img src="/logo.svg" alt="Food Wagon Logo" />
            <h1>Food Wagon</h1>
          </div>
          <div className="navbar-links">
            <a href="#search">Search Food</a>
            <a href="#login">Login</a>
          </div>
        </nav>
      </header>
      <main className="App-main">
        <section className="hero">
          <h2>Are you starving?</h2>
          <p>Within a few clicks, find meals that are accessible near you</p>
          <div className="search-bar">
            <input type="text" placeholder="Enter Your Address" />
            <button>Find Food</button>
          </div>
        </section>

        {/* ส่วนเพิ่มภาพอาหาร */}
        <section className="food-gallery">
          <h3>Popular Dishes</h3>
          <div className="gallery">
            <img src="/images/food1.jpg" alt="Food 1" />
            <img src="/images/food2.jpg" alt="Food 2" />
            <img src="/images/food3.jpg" alt="Food 3" />
            <img src="/images/food4.jpg" alt="Food 4" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
