import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  RiSearch2Line,
  RiPencilFill,
  RiDeleteBin7Fill,
  RiMoreFill,
} from "react-icons/ri";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "../asset/css/service.css";

const Service = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const services = [
    {
      id: 1,
      name: "Digital Marketing",
      customers: 400,
      rating: "4.9/5",
      price: "5$/Hr",
      image: require("../asset/images/services/digitalMarketing.png"),
    },
    {
      id: 2,
      name: "Brand Marketing",
      customers: 400,
      rating: "4.9/5",
      price: "5$/Hr",
      image: require("../asset/images/services/brandMarketing.png"),
    },
    {
      id: 3,
      name: "Content Creator",
      customers: 400,
      rating: "4.9/5",
      price: "5$/Hr",
      image: require("../asset/images/services/contentcreater.png"),
    },
    {
      id: 4,
      name: "E-Mail Marketing",
      customers: 400,
      rating: "4.9/5",
      price: "5$/Hr",
      image: require("../asset/images/services/e_mailMarketing.png"),
    },
    {
      id: 5,
      name: "Fiver",
      customers: 400,
      rating: "4.9/5",
      price: "5$/Hr",
      image: require("../asset/images/services//fiverr.png"),
    },
    {
      id: 6,
      name: "Google Ads",
      customers: 400,
      rating: "4.9/5",
      price: "5$/Hr",
      image: require("../asset/images/services/googlAds.png"),
    },
    {
      id: 7,
      name: "Our Team",
      customers: 400,
      rating: "4.9/5",
      price: "5$/Hr",
      image: require("../asset/images/services/ourTeam.png"),
    },
    {
      id: 8,
      name: "Popularity",
      customers: 400,
      rating: "4.9/5",
      price: "5$/Hr",
      image: require("../asset/images/services/popular.png"),
    },
    {
      id: 9,
      name: "Up Work",
      customers: 400,
      rating: "4.9/5",
      price: "5$/Hr",
      image: require("../asset/images/services/upwork.png"),
    },
    {
      id: 10,
      name: "Youtube",
      customers: 400,
      rating: "4.9/5",
      price: "5$/Hr",
      image: require("../asset/images/services/youtube.png"),
    },
  ];

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;
  const currentServices = filteredServices.slice(startIndex, endIndex);

  return (
    <>
      <div className="page-content--bgf7">
        <section className="au-breadcrumb2">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="au-breadcrumb-content">
                  <div className="au-breadcrumb-left">
                    <span className="au-breadcrumb-span">You are here:</span>
                    <ul className="list-unstyled list-inline au-breadcrumb__list">
                      <li className="list-inline-item active">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="list-inline-item seprate">
                        <span>/</span>
                      </li>
                      <li className="list-inline-item">
                        Swirl Marketing Dashboard
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="search-main-container">
              <form
                role="search"
                className="au-form-icon--sm "
                action=""
                method="post"
              >
                <input
                  className="au-input--w300 au-input-with-icon"
                  type="text"
                  placeholder="Search for Services.."
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  className="au-btn--submit2"
                  type="submit"
                  aria-label="Search"
                >
                  <RiSearch2Line />
                </button>
              </form>
            </div>
          </div>
        </section>

        <section class="welcome p-t-10">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 class="title-4">Services</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentServices.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="card"
              >
                <img
                  src={service.image}
                  className="card-img-top"
                  alt="Service"
                />
                <div className="card-body">
                  <h5 className="card-title">{service.name}</h5>
                  <p className="card-text">Customers: {service.customers}</p>
                  <p className="card-text">Rating: {service.rating}</p>
                  <p className="card-text">Price: {service.price}</p>
                  <div className="flex-container">
                    <span
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Edit"
                    >
                      <RiPencilFill className="edit-icon" />
                    </span>
                    <span
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete"
                    >
                      <RiDeleteBin7Fill className="delete-icon" />
                    </span>
                    <span
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="More"
                    >
                      <RiMoreFill className="more-icon" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PAGINATION */}
        <section className="container">
          <nav aria-label="Page navigation example" id="custom-page">
            <ul className="pagination flex justify-center">
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  <AiOutlineArrowLeft className="w-6 h-6" />
                </button>
              </li>
              {[1, 2, 3].map((pageNumber) => (
                <li key={pageNumber} className="page-item">
                  <button
                    className={`page-link ${
                      pageNumber === currentPage
                        ? "text-blue-900 font-bold"
                        : ""
                    }`}
                    onClick={() => setCurrentPage(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                </li>
              ))}
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                  <AiOutlineArrowRight className="w-6 h-6" />
                </button>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </>
  );
};

export default Service;
