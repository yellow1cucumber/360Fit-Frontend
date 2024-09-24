import { Injectable } from '@angular/core';
import {Apollo} from "apollo-angular";
import {map, Observable} from "rxjs";
import {GetClientsDocument, GetClientsGQL, GetClientsQuery} from "../../graphql/types";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  constructor(private apollo: Apollo, private clientsQuery: GetClientsGQL) { }

  public GetClients() : Observable<GetClientsQuery> {
    return this.apollo.watchQuery<GetClientsQuery>({query: GetClientsDocument}).valueChanges
      .pipe(map(result => result.data));
  }
}
