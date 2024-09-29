import { Injectable } from '@angular/core';
import {Apollo} from "apollo-angular";
import {
  CreateClientDocument,
  CreateClientGQL, CreateClientMutation, CreateClientMutationVariables,
  GetClientsDocument,
  GetClientsGQL,
  GetClientsQuery, GetClientsQueryVariables, UserDtoInput
} from "../../graphql/types";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  constructor(private apollo: Apollo, private getClientsQuery: GetClientsGQL,
                                      private createClientMutation: CreateClientGQL) { }

  public GetClients(companyId: number) {
    return this.apollo.watchQuery<GetClientsQuery, GetClientsQueryVariables>(
      {
        query: GetClientsDocument,
        variables: {
          CompanyID: companyId
        }
      }
    ).valueChanges;
  }

  public CreateClient(client: UserDtoInput) {
    return this.apollo.mutate<CreateClientMutation, CreateClientMutationVariables>(
      {
        mutation: CreateClientDocument,
        variables:{
          payload: client,
        },
      }
    );
  }
}
