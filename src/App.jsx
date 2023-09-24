import React,{ useState } from "react";
import Nav from "./components/Nav";
import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";
import "./App.css";

function App() {
  const [showAlert, setShowAlert] = useState(true);

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center text-center z-50 backdrop-blur-lg">
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-8 max-w-md mx-auto rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Welcome to Nike Landing Page</h2>
            <p className="text-[15px]">
              This stunning Nike Landing Page was created by Samrat. Feel free to connect with me by clicking on the "Creator" link in the navigation bar.
            </p>
            <button
              onClick={handleAlertClose}
              className="mt-4 justify-center items-center bg-white text-gray-800 hover:text-gray-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
