import { Component, OnInit } from '@angular/core';
import { GestionService, Produit } from '../gestion.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})


export class PanierComponent implements OnInit {
  panier: { produit: Produit; quantity: number }[] = [];

  constructor(private gestionService: GestionService) {}

  ngOnInit(): void {
    this.panier = this.gestionService.getPanier();
  }

  retirerDuPanier(index: number): void {
    this.gestionService.retirerDuPanier(index);
    this.panier = this.gestionService.getPanier(); 
  }

  getTotal(): number {
    return this.panier.reduce(
      (total, item) => total + item.produit.prix * item.quantity,
      0
    );
  }
}
