import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";

export default function App() {
  const [image, setImage] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    fetch("/home.json")
      .then((res) => res.json())
      .then((data) => setImage(data));
  }, []);

  return (
    <div className="wrapper">
      <header className="header">
        <input
          className="header__searchBar"
          placeholder="Search..."
          type="search"
        />
      </header>
      <main className="main">
        <nav className="main__nav">
          <Link to="/">
            <h1>Explore</h1>
          </Link>
          <ul className="main__ul">
            <li>
              <Link to="/lifestyle">Lifestyle</Link>
            </li>
            <li>
              <Link to="/food">Food</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/travel">Travel</Link>
            </li>
            <li>
              <select name="" id="">
                <option value="skibidi">More</option>
              </select>
            </li>
          </ul>
          <select
            className="main__selectPhone"
            onChange={(e) => {
              const value = e.target.value;
              if (value) navigate(value);
            }}
          >
            <option value="">Select category</option>
            <option value="/lifestyle">Lifestyle</option>
            <option value="/food">Food</option>
            <option value="/home">Home</option>
            <option value="/travel">Travel</option>
          </select>
        </nav>
        <div className="grid">
          {image.map((data) => {
            return (
              <figure>
                <img src={data} alt="" />
              </figure>
            );
          })}
        </div>
      </main>
    </div>
  );
}
