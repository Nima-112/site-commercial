import { Injectable } from '@angular/core';
export class Produit {
  constructor(public image : string , public nom: string, public prix: number , public rating : number) {}
}

@Injectable({
  providedIn: 'root'
})



export class GestionService {
  produits: Produit[] = [
    { nom: 'Camera 1', image: 'product1.png', prix: 2200, rating: 4 },
    { nom: 'Camera 2', image: 'product2.png', prix: 7860, rating: 4 },
    { nom: 'Camera 3', image: 'product3.png', prix: 6000, rating: 3 },
    { nom: 'Laptop 1 ', image: 'product4.png', prix: 15000, rating: 4 },
    { nom: 'Laptop 2', image: 'product5.png', prix: 11500, rating: 4 },
    { nom: 'Laptop 3', image: 'product6.png', prix: 9990, rating: 3 },
    { nom: 'Phone 1', image: 'product7.png', prix: 9500, rating: 4 },
    { nom: 'Phone 2', image: 'product8.png', prix: 10500, rating: 4 },
    { nom: 'Phone 3', image: 'product9.png', prix: 10999, rating: 3 },
  ];

  panier: { produit: Produit; quantity: number }[] = [];


  ajouterAuPanier(produit: Produit): void {
    const existingProduct = this.panier.find(
      (p) => p.produit.nom === produit.nom
    );

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.panier.push({ produit, quantity: 1 });
    }
  }


  getPanier(): { produit: Produit; quantity: number }[] {
    return this.panier;
  }
  retirerDuPanier(index: number): void {
    const produit = this.panier[index];
    if (produit.quantity > 1) {
      produit.quantity--;
    } else {
      this.panier.splice(index, 1);
    }
  }
}