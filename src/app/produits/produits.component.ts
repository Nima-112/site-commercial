import { Component, OnInit } from '@angular/core';
import { GestionService, Produit } from '../gestion.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})




export class ProduitsComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private gestionService: GestionService) {}

  ngOnInit(): void {
    this.produits = this.gestionService.produits;
  }

  ajouterAuPanier(produit: Produit): void {
    this.gestionService.ajouterAuPanier(produit); 
  }
}