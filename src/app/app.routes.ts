import { Routes } from '@angular/router';
import {HeaderComponent} from "./Components/header/header.component";

export const routes: Routes = [
  {path: "/", component: HeaderComponent},
  {path: "clients", component: HeaderComponent},
  {path: "service", component: HeaderComponent},
  {path: "storage", component: HeaderComponent},
  {path: "nomenclature", component: HeaderComponent},
  {path: "staff", component: HeaderComponent},
  {path: "taxes", component: HeaderComponent},
  {path: "reports", component: HeaderComponent},
];
