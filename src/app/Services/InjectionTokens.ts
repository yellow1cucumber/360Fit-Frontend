import {InjectionToken} from "@angular/core";
import {IUsersService} from "./Users/i-users.service";

export const USERS_SERVICE_TOKEN = new InjectionToken<IUsersService>("USERS_SERVICE_TOKEN");
export const CLIENTS_SERVICE_TOKEN = new InjectionToken("CLIENTS_SERVICE_TOKEN");
