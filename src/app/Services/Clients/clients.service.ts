import { Injectable } from '@angular/core';
import {Apollo} from "apollo-angular";
import {
  CreateClientDocument,
  CreateClientGQL, CreateClientMutation, CreateClientMutationVariables,
  GetClientsDocument,
  GetClientsGQL,
  GetClientsQuery, GetClientsQueryVariables, UpdateClientDocument, UpdateClientGQL, UserDtoInput, UserInput
} from "../../graphql/types";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  constructor(private apollo: Apollo, private getClientsQuery: GetClientsGQL,
                                      private createClientMutation: CreateClientGQL,
                                      private updateClientMutation: UpdateClientGQL) { }

  private selectedClientSubject: BehaviorSubject<UserInput | UserDtoInput | null>
    = new BehaviorSubject<UserInput | UserDtoInput | null>(null);
  public SelectedClient$: Observable<UserInput | UserDtoInput | null>
    = this.selectedClientSubject.asObservable();

  public SetSelectedClient(client: UserInput | UserDtoInput ): void {
    this.selectedClientSubject.next(client);
  }

  public GetClients(companyId: number) : Observable<UserInput[]> {
    return this.getClientsQuery.watch({CompanyID: companyId}).valueChanges.pipe(
      map(result => result.data.readUsers as UserInput[] || []),
    );
  }

  public CreateClient(client: UserDtoInput) {
    return this.createClientMutation.mutate({payload: client});
  }

  public UpdateClient(client: UserInput) {
    return this.updateClientMutation.mutate({payload: client});
  }
}
