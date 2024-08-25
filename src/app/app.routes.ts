import { Routes } from '@angular/router';
import {HeaderComponent} from "./Components/header/header.component";
import {LoginViewComponent} from "./Views/login-view/login-view.component";
import {ClientsViewComponent} from "./Views/clients-view/clients-view.component";

export const routes: Routes = [
  {path: "main", pathMatch: "prefix", children: [
      {title: "Главная",      path: "",              component: HeaderComponent},
      {title: "Клиенты",      path: "clients",      component: ClientsViewComponent},
      {title: "Услуги",       path: "service",      component: HeaderComponent},
      {title: "Склад",        path: "storage",      component: HeaderComponent},
      {title: "Номенклатура", path: "nomenclature", component: HeaderComponent},
      {title: "Сотрудники",   path: "staff",        component: HeaderComponent},
      {title: "Расходы",      path: "taxes",        component: HeaderComponent},
      {title: "Отчеты",       path: "reports",      component: HeaderComponent},
    ]},
  {title: "Авторизация",    path: "login",      component: LoginViewComponent},
  ];
