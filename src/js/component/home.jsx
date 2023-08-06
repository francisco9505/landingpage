import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
        <div
          class="collapse navbar-collapse d-flex justify-content-around"
          id="navbarNav"
        >
          <a class="navbar-brand text-white" href="#">
            Start Bootstrap
          </a>
          <ul class="navbar-nav ">
            <li class="nav-item active">
              <a class="nav-link text-white" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="#">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

const Body = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div class="jumbotron w-75 p-3 bg-">
          <h1 class="display">A Warm Welcome</h1>
          <p class="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            gravida nunc. Pellentesque et erat id felis accumsan hendrerit.
            Pellentesque ultricies pharetra urna et ultrices.
          </p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

const Card = (props) => {
  return (
    <>
      <div className="d-flex gap-5 justify-content-center mt-3">
        <div class="card">
          <img
            class="card-img-top"
            src="https://www.zooplus.es/magazine/wp-content/uploads/2021/06/Lombrices-en-gatitos.jpg"
            alt="Card image cap"
          />
          <div class="card-body ">
            <h5 class="card-title text-center">{props.title}</h5>
            <p class="card-text">{props.description}</p>
            <hr />
            <a href="#" class="btn btn-primary text-center">
              Go somewhere
            </a>
          </div>
        </div>

        <div class="card">
          <img
            class="card-img-top"
            src="https://www.zooplus.es/magazine/wp-content/uploads/2021/06/Lombrices-en-gatitos.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title text-center">{props.title}</h5>
            <p class="card-text">{props.description}</p>
            <hr />
            <a href="#" class="losA  btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        <div class="card">
          <img
            class="card-img-top"
            src="https://www.zooplus.es/magazine/wp-content/uploads/2021/06/Lombrices-en-gatitos.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title text-center">{props.title}</h5>
            <p class="card-text">{props.description}</p>
            <hr />
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        <div class="card">
          <img
            class="card-img-top"
            src="https://www.zooplus.es/magazine/wp-content/uploads/2021/06/Lombrices-en-gatitos.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title text-center">{props.title}</h5>
            <p class="card-text">{props.description}</p>
            <hr />
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <footer className="bg-light text-center text-lg-start mt-4">
        <div className="text-center text-white p-4 bg-dark">
          Copyright © Your Website 2018
          <a className="text-dark" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </>
  );
};

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Body />
        <Card
          title="Card title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac gravida nunc. Pellentesque ."
        />
        <Footer />
      </div>
    </>
  );
};

export default Home;
