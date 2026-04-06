import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Produit = ({ nom, prix, description, image }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm d-flex align-items-center">
        <img
          src={image}
          className="card-img-top img-fluid"
          alt={nom}
          style={{ objectFit: "cover", maxHeight: "auto" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{nom}</h5>
          <p className="card-text">{description}</p>
          <p className="fw-bold text-primary">{prix} dt</p>
          <button className="btn btn-success mt-auto shadow-sm">
            <i className="bi bi-cart-plus me-2"></i> {/* Bootstrap Icon */}
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default Produit;
