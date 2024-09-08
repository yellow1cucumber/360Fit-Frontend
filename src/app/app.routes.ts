import { Routes } from '@angular/router';
import {HeaderComponent} from "./Components/header/header.component";
import {ClientsViewComponent} from "./Views/clients-view/clients-view.component";
import {AuthGuard} from "./authguard";

export const routes: Routes = [
      {title: "Главная",      path: "",             component: HeaderComponent, canActivate: [AuthGuard]},
      {title: "Клиенты",      path: "clients",      component: ClientsViewComponent, canActivate: [AuthGuard]},
      {title: "Услуги",       path: "service",      component: HeaderComponent},
      {title: "Склад",        path: "storage",      component: HeaderComponent},
      {title: "Номенклатура", path: "nomenclature", component: HeaderComponent},
      {title: "Сотрудники",   path: "staff",        component: HeaderComponent},
      {title: "Расходы",      path: "taxes",        component: HeaderComponent},
      {title: "Отчеты",       path: "reports",      component: HeaderComponent},
];
