import { Routes } from '@angular/router';
import {HeaderComponent} from "./Components/header/header.component";
import {LoginViewComponent} from "./Views/login-view/login-view.component";

export const routes: Routes = [
  {title: "Главная",      path: "",             component: HeaderComponent},
  {title: "Клиенты",      path: "clients",      component: HeaderComponent},
  {title: "Услуги",       path: "service",      component: HeaderComponent},
  {title: "Склад",        path: "storage",      component: HeaderComponent},
  {title: "Номенклатура", path: "nomenclature", component: HeaderComponent},
  {title: "Сотрудники",   path: "staff",        component: HeaderComponent},
  {title: "Расходы",      path: "taxes",        component: HeaderComponent},
  {title: "Отчеты",       path: "reports",      component: HeaderComponent},
];
