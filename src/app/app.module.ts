import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AccueilComponent } from "./pages/accueil/accueil.component";
import { HeaderComponent } from "./components/header/header.component";
import { ProduitJourComponent } from "./components/produit-jour/produit-jour.component";
import { ProduitsComponent } from "./components/produits/produits.component";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    ProduitJourComponent,
    ProduitsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
