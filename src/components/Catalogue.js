import React from "react";
import Produit from "./Produit";

const Catalogue = () => {

  const produits = [
    {
      id: 1,
      nom: "Laptop Dell Inspiron 15",
      prix: 850,
      description: "Ordinateur portable performant avec processeur Intel Core i7 et 16GB RAM.",
      image: "/images/laptop.jpg"
    },
    {
      id: 2,
      nom: "Smartphone Samsung Galaxy S23",
      prix: 999,
      description: "Smartphone haut de gamme avec écran AMOLED et appareil photo 50MP.",
      image: "/images/smartphone.jpg"
    },
    {
      id: 3,
      nom: "Casque Bluetooth Sony",
      prix: 120,
      description: "Casque sans fil avec réduction de bruit active.",
      image: "/images/casque.jpg"
    },
    {
      id: 4,
      nom: "Montre Connectée",
      prix: 199,
      description: "Montre intelligente avec suivi d’activité et notifications.",
      image: "/images/montre.jpg"
    },
    {
      id: 5,
      nom: "Clavier Mécanique RGB",
      prix: 75,
      description: "Clavier gaming rétroéclairé avec switches mécaniques.",
      image: "/images/clavier.jpg"
    },
    {
      id: 6,
      nom: "Souris Gaming Logitech",
      prix: 60,
      description: "Souris ergonomique haute précision pour gamers.",
      image: "/images/souris.jpg"
    }
  ];

  return (
    <div className="container mt-5">
      
      <h2 className="text-center mb-4">Catalogue de Produits</h2>

      <div className="row">
        {produits.map((produit) => (
            
            <Produit
              key={produit.id}
              nom={produit.nom}
              prix={produit.prix}
              description={produit.description}
              image={produit.image}
            />


        ))}
      </div>

    </div>
  );
}

export default Catalogue;