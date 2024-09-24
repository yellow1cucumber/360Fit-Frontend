import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Date` scalar represents an ISO-8601 compliant date type. */
  Date: { input: any; output: any; }
};

export type BankRequisitesDtoInput = {
  bik: Scalars['String']['input'];
  iik: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type BankRequisitesFilterInput = {
  and?: InputMaybe<Array<BankRequisitesFilterInput>>;
  bik?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  iik?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<BankRequisitesFilterInput>>;
};

export type BankRequisitesInput = {
  bik: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  iik: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CardFilterInput = {
  and?: InputMaybe<Array<CardFilterInput>>;
  barcode?: InputMaybe<StringOperationFilterInput>;
  connectedServices?: InputMaybe<ListFilterInputTypeOfServiceFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<CardFilterInput>>;
  owner?: InputMaybe<UserFilterInput>;
};

export type CardSortInput = {
  barcode?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  owner?: InputMaybe<UserSortInput>;
};

export type CashRegisterDtoInput = {
  company: CompanyDtoInput;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CashRegisterFilterInput = {
  and?: InputMaybe<Array<CashRegisterFilterInput>>;
  company?: InputMaybe<CompanyFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<CashRegisterFilterInput>>;
};

export type CashRegisterInput = {
  company: CompanyInput;
  description: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type CashRegisterSortInput = {
  company?: InputMaybe<CompanySortInput>;
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
};

export type CategoryDtoInput = {
  childCategories?: InputMaybe<Array<CategoryDtoInput>>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  rootCategory?: InputMaybe<CategoryDtoInput>;
};

export type CategoryFilterInput = {
  and?: InputMaybe<Array<CategoryFilterInput>>;
  childCategories?: InputMaybe<ListFilterInputTypeOfCategoryFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<CategoryFilterInput>>;
  rootCategory?: InputMaybe<CategoryFilterInput>;
};

export type CategoryInput = {
  childCategories?: InputMaybe<Array<CategoryInput>>;
  description: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  rootCategory?: InputMaybe<CategoryInput>;
};

export type CategorySortInput = {
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  rootCategory?: InputMaybe<CategorySortInput>;
};

export enum CompanyCategory {
  Developer = 'DEVELOPER',
  FitnessCentre = 'FITNESS_CENTRE',
  SportsNutritionStore = 'SPORTS_NUTRITION_STORE',
  SportsNutritionSupplier = 'SPORTS_NUTRITION_SUPPLIER'
}

export type CompanyCategoryOperationFilterInput = {
  eq?: InputMaybe<CompanyCategory>;
  in?: InputMaybe<Array<CompanyCategory>>;
  neq?: InputMaybe<CompanyCategory>;
  nin?: InputMaybe<Array<CompanyCategory>>;
};

export type CompanyDtoInput = {
  cashRegisters: Array<CashRegisterDtoInput>;
  category: CompanyCategory;
  clients: Array<UserDtoInput>;
  contacts: ContactsDtoInput;
  description: Scalars['String']['input'];
  nomenclatures: Array<NomenclatureDtoInput>;
  payment: Array<PaymentDtoInput>;
  publicName: Scalars['String']['input'];
  requisites: RequisitesDtoInput;
  services: Array<ServiceDtoInput>;
  staff: Array<UserDtoInput>;
  storages: Array<StorageDtoInput>;
  suppliers: Array<SupplierDtoInput>;
};

export type CompanyFilterInput = {
  and?: InputMaybe<Array<CompanyFilterInput>>;
  cashRegisters?: InputMaybe<ListFilterInputTypeOfCashRegisterFilterInput>;
  category?: InputMaybe<CompanyCategoryOperationFilterInput>;
  clients?: InputMaybe<ListFilterInputTypeOfUserFilterInput>;
  contacts?: InputMaybe<ContactsFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  nomenclatures?: InputMaybe<ListFilterInputTypeOfNomenclatureFilterInput>;
  or?: InputMaybe<Array<CompanyFilterInput>>;
  payment?: InputMaybe<ListFilterInputTypeOfPaymentFilterInput>;
  publicName?: InputMaybe<StringOperationFilterInput>;
  requisites?: InputMaybe<RequisitesFilterInput>;
  services?: InputMaybe<ListFilterInputTypeOfServiceFilterInput>;
  staff?: InputMaybe<ListFilterInputTypeOfUserFilterInput>;
  storages?: InputMaybe<ListFilterInputTypeOfStorageFilterInput>;
  suppliers?: InputMaybe<ListFilterInputTypeOfSupplierFilterInput>;
};

export type CompanyInput = {
  cashRegisters: Array<CashRegisterInput>;
  category: CompanyCategory;
  clients: Array<UserInput>;
  contacts: ContactsInput;
  description: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  nomenclatures: Array<NomenclatureInput>;
  payment: Array<PaymentInput>;
  publicName: Scalars['String']['input'];
  requisites: RequisitesInput;
  services: Array<ServiceInput>;
  staff: Array<UserInput>;
  storages: Array<StorageInput>;
  suppliers: Array<SupplierInput>;
};

export type CompanySortInput = {
  category?: InputMaybe<SortEnumType>;
  contacts?: InputMaybe<ContactsSortInput>;
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  publicName?: InputMaybe<SortEnumType>;
  requisites?: InputMaybe<RequisitesSortInput>;
};

export type ContactsDtoInput = {
  emails: Array<Scalars['String']['input']>;
  instagram: Scalars['String']['input'];
  linkedIn: Scalars['String']['input'];
  phones: Array<PhoneNumberDtoInput>;
  webSite: Scalars['String']['input'];
};

export type ContactsFilterInput = {
  and?: InputMaybe<Array<ContactsFilterInput>>;
  emails?: InputMaybe<ListStringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  instagram?: InputMaybe<StringOperationFilterInput>;
  linkedIn?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ContactsFilterInput>>;
  phones?: InputMaybe<ListFilterInputTypeOfPhoneNumberFilterInput>;
  webSite?: InputMaybe<StringOperationFilterInput>;
};

export type ContactsInput = {
  emails: Array<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  instagram: Scalars['String']['input'];
  linkedIn: Scalars['String']['input'];
  phones: Array<PhoneNumberInput>;
  webSite: Scalars['String']['input'];
};

export type ContactsSortInput = {
  id?: InputMaybe<SortEnumType>;
  instagram?: InputMaybe<SortEnumType>;
  linkedIn?: InputMaybe<SortEnumType>;
  webSite?: InputMaybe<SortEnumType>;
};

export type DateOperationFilterInput = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
  ngt?: InputMaybe<Scalars['Date']['input']>;
  ngte?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  nlt?: InputMaybe<Scalars['Date']['input']>;
  nlte?: InputMaybe<Scalars['Date']['input']>;
};

export type FloatOperationFilterInput = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  ngt?: InputMaybe<Scalars['Float']['input']>;
  ngte?: InputMaybe<Scalars['Float']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  nlt?: InputMaybe<Scalars['Float']['input']>;
  nlte?: InputMaybe<Scalars['Float']['input']>;
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type ListFilterInputTypeOfBankRequisitesFilterInput = {
  all?: InputMaybe<BankRequisitesFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<BankRequisitesFilterInput>;
  some?: InputMaybe<BankRequisitesFilterInput>;
};

export type ListFilterInputTypeOfCashRegisterFilterInput = {
  all?: InputMaybe<CashRegisterFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<CashRegisterFilterInput>;
  some?: InputMaybe<CashRegisterFilterInput>;
};

export type ListFilterInputTypeOfCategoryFilterInput = {
  all?: InputMaybe<CategoryFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<CategoryFilterInput>;
  some?: InputMaybe<CategoryFilterInput>;
};

export type ListFilterInputTypeOfNomenclatureFilterInput = {
  all?: InputMaybe<NomenclatureFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<NomenclatureFilterInput>;
  some?: InputMaybe<NomenclatureFilterInput>;
};

export type ListFilterInputTypeOfPaymentDateFilterInput = {
  all?: InputMaybe<PaymentDateFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<PaymentDateFilterInput>;
  some?: InputMaybe<PaymentDateFilterInput>;
};

export type ListFilterInputTypeOfPaymentFilterInput = {
  all?: InputMaybe<PaymentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<PaymentFilterInput>;
  some?: InputMaybe<PaymentFilterInput>;
};

export type ListFilterInputTypeOfPhoneNumberFilterInput = {
  all?: InputMaybe<PhoneNumberFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<PhoneNumberFilterInput>;
  some?: InputMaybe<PhoneNumberFilterInput>;
};

export type ListFilterInputTypeOfProductFilterInput = {
  all?: InputMaybe<ProductFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ProductFilterInput>;
  some?: InputMaybe<ProductFilterInput>;
};

export type ListFilterInputTypeOfRoleFilterInput = {
  all?: InputMaybe<RoleFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<RoleFilterInput>;
  some?: InputMaybe<RoleFilterInput>;
};

export type ListFilterInputTypeOfSalableObjectFilterInput = {
  all?: InputMaybe<SalableObjectFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<SalableObjectFilterInput>;
  some?: InputMaybe<SalableObjectFilterInput>;
};

export type ListFilterInputTypeOfServiceFilterInput = {
  all?: InputMaybe<ServiceFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ServiceFilterInput>;
  some?: InputMaybe<ServiceFilterInput>;
};

export type ListFilterInputTypeOfStorageFilterInput = {
  all?: InputMaybe<StorageFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<StorageFilterInput>;
  some?: InputMaybe<StorageFilterInput>;
};

export type ListFilterInputTypeOfStoragedProductFilterInput = {
  all?: InputMaybe<StoragedProductFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<StoragedProductFilterInput>;
  some?: InputMaybe<StoragedProductFilterInput>;
};

export type ListFilterInputTypeOfSupplierFilterInput = {
  all?: InputMaybe<SupplierFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<SupplierFilterInput>;
  some?: InputMaybe<SupplierFilterInput>;
};

export type ListFilterInputTypeOfUserFilterInput = {
  all?: InputMaybe<UserFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<UserFilterInput>;
  some?: InputMaybe<UserFilterInput>;
};

export type ListStringOperationFilterInput = {
  all?: InputMaybe<StringOperationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<StringOperationFilterInput>;
  some?: InputMaybe<StringOperationFilterInput>;
};

export type NomenclatureDtoInput = {
  company: CompanyDtoInput;
  products: Array<ProductDtoInput>;
};

export type NomenclatureFilterInput = {
  and?: InputMaybe<Array<NomenclatureFilterInput>>;
  company?: InputMaybe<CompanyFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<NomenclatureFilterInput>>;
  products?: InputMaybe<ListFilterInputTypeOfProductFilterInput>;
};

export type NomenclatureInput = {
  company: CompanyInput;
  id: Scalars['Int']['input'];
  products: Array<ProductInput>;
};

export type NomenclatureSortInput = {
  company?: InputMaybe<CompanySortInput>;
  id?: InputMaybe<SortEnumType>;
};

export enum OrganizationTypes {
  Ie = 'IE',
  Jsc = 'JSC',
  Llp = 'LLP'
}

export type OrganizationTypesOperationFilterInput = {
  eq?: InputMaybe<OrganizationTypes>;
  in?: InputMaybe<Array<OrganizationTypes>>;
  neq?: InputMaybe<OrganizationTypes>;
  nin?: InputMaybe<Array<OrganizationTypes>>;
};

export type PaymentDtoInput = {
  cart: Array<SalableObjectDtoInput>;
  company: CompanyDtoInput;
  customer: UserDtoInput;
  isCompleted: Scalars['Boolean']['input'];
  provider: UserDtoInput;
  rule: PaymentRuleDtoInput;
};

export type PaymentDateDtoInput = {
  date: Scalars['Date']['input'];
  price: Scalars['Float']['input'];
};

export type PaymentDateFilterInput = {
  and?: InputMaybe<Array<PaymentDateFilterInput>>;
  date?: InputMaybe<DateOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<PaymentDateFilterInput>>;
  price?: InputMaybe<FloatOperationFilterInput>;
};

export type PaymentDateInput = {
  date: Scalars['Date']['input'];
  id: Scalars['Int']['input'];
  price: Scalars['Float']['input'];
};

export type PaymentDateSortInput = {
  date?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  price?: InputMaybe<SortEnumType>;
};

export type PaymentFilterInput = {
  and?: InputMaybe<Array<PaymentFilterInput>>;
  cart?: InputMaybe<ListFilterInputTypeOfSalableObjectFilterInput>;
  company?: InputMaybe<CompanyFilterInput>;
  customer?: InputMaybe<UserFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  isCompleted?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<PaymentFilterInput>>;
  provider?: InputMaybe<UserFilterInput>;
  rule?: InputMaybe<PaymentRuleFilterInput>;
};

export type PaymentInput = {
  cart: Array<SalableObjectInput>;
  company: CompanyInput;
  customer: UserInput;
  id: Scalars['Int']['input'];
  isCompleted: Scalars['Boolean']['input'];
  provider: UserInput;
  rule: PaymentRuleInput;
};

export type PaymentRuleDtoInput = {
  dates: Array<PaymentDateDtoInput>;
};

export type PaymentRuleFilterInput = {
  and?: InputMaybe<Array<PaymentRuleFilterInput>>;
  dates?: InputMaybe<ListFilterInputTypeOfPaymentDateFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<PaymentRuleFilterInput>>;
};

export type PaymentRuleInput = {
  dates: Array<PaymentDateInput>;
  id: Scalars['Int']['input'];
};

export type PaymentRuleSortInput = {
  id?: InputMaybe<SortEnumType>;
};

export type PaymentSortInput = {
  company?: InputMaybe<CompanySortInput>;
  customer?: InputMaybe<UserSortInput>;
  id?: InputMaybe<SortEnumType>;
  isCompleted?: InputMaybe<SortEnumType>;
  provider?: InputMaybe<UserSortInput>;
  rule?: InputMaybe<PaymentRuleSortInput>;
};

export type PhoneNumberDtoInput = {
  number: Scalars['String']['input'];
  whatsApp: Scalars['Boolean']['input'];
};

export type PhoneNumberFilterInput = {
  and?: InputMaybe<Array<PhoneNumberFilterInput>>;
  id?: InputMaybe<IntOperationFilterInput>;
  number?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PhoneNumberFilterInput>>;
  whatsApp?: InputMaybe<BooleanOperationFilterInput>;
};

export type PhoneNumberInput = {
  id: Scalars['Int']['input'];
  number: Scalars['String']['input'];
  whatsApp: Scalars['Boolean']['input'];
};

export type ProductDtoInput = {
  barCode: Scalars['String']['input'];
  category: CategoryDtoInput;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  priceBuy: Scalars['Float']['input'];
  priceSell: Scalars['Float']['input'];
};

export type ProductFilterInput = {
  and?: InputMaybe<Array<ProductFilterInput>>;
  barCode?: InputMaybe<StringOperationFilterInput>;
  category?: InputMaybe<CategoryFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ProductFilterInput>>;
  priceBuy?: InputMaybe<FloatOperationFilterInput>;
  priceSell?: InputMaybe<FloatOperationFilterInput>;
};

export type ProductInput = {
  barCode: Scalars['String']['input'];
  category: CategoryInput;
  description: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  priceBuy: Scalars['Float']['input'];
  priceSell: Scalars['Float']['input'];
};

export type ProductSortInput = {
  barCode?: InputMaybe<SortEnumType>;
  category?: InputMaybe<CategorySortInput>;
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  priceBuy?: InputMaybe<SortEnumType>;
  priceSell?: InputMaybe<SortEnumType>;
};

export type RequisitesDtoInput = {
  bankRequisites: Array<BankRequisitesDtoInput>;
  bin?: InputMaybe<Scalars['String']['input']>;
  director?: InputMaybe<UserDtoInput>;
  kbe?: InputMaybe<Scalars['String']['input']>;
  legalAddress?: InputMaybe<Scalars['String']['input']>;
  nameEN?: InputMaybe<Scalars['String']['input']>;
  nameKZ: Scalars['String']['input'];
  nameRU: Scalars['String']['input'];
  organizationType: OrganizationTypes;
  physicalAddress?: InputMaybe<Scalars['String']['input']>;
};

export type RequisitesFilterInput = {
  and?: InputMaybe<Array<RequisitesFilterInput>>;
  bankRequisites?: InputMaybe<ListFilterInputTypeOfBankRequisitesFilterInput>;
  bin?: InputMaybe<StringOperationFilterInput>;
  director?: InputMaybe<UserFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  kbe?: InputMaybe<StringOperationFilterInput>;
  legalAddress?: InputMaybe<StringOperationFilterInput>;
  nameEN?: InputMaybe<StringOperationFilterInput>;
  nameKZ?: InputMaybe<StringOperationFilterInput>;
  nameRU?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<RequisitesFilterInput>>;
  organizationType?: InputMaybe<OrganizationTypesOperationFilterInput>;
  physicalAddress?: InputMaybe<StringOperationFilterInput>;
};

export type RequisitesInput = {
  bankRequisites: Array<BankRequisitesInput>;
  bin?: InputMaybe<Scalars['String']['input']>;
  director?: InputMaybe<UserInput>;
  id: Scalars['Int']['input'];
  kbe?: InputMaybe<Scalars['String']['input']>;
  legalAddress?: InputMaybe<Scalars['String']['input']>;
  nameEN?: InputMaybe<Scalars['String']['input']>;
  nameKZ: Scalars['String']['input'];
  nameRU: Scalars['String']['input'];
  organizationType: OrganizationTypes;
  physicalAddress?: InputMaybe<Scalars['String']['input']>;
};

export type RequisitesSortInput = {
  bin?: InputMaybe<SortEnumType>;
  director?: InputMaybe<UserSortInput>;
  id?: InputMaybe<SortEnumType>;
  kbe?: InputMaybe<SortEnumType>;
  legalAddress?: InputMaybe<SortEnumType>;
  nameEN?: InputMaybe<SortEnumType>;
  nameKZ?: InputMaybe<SortEnumType>;
  nameRU?: InputMaybe<SortEnumType>;
  organizationType?: InputMaybe<SortEnumType>;
  physicalAddress?: InputMaybe<SortEnumType>;
};

export type RoleDtoInput = {
  company: CompanyInput;
  userType: Type;
};

export type RoleFilterInput = {
  and?: InputMaybe<Array<RoleFilterInput>>;
  company?: InputMaybe<CompanyFilterInput>;
  or?: InputMaybe<Array<RoleFilterInput>>;
  userType?: InputMaybe<TypeOperationFilterInput>;
};

export type RoleInput = {
  company: CompanyInput;
  userType: Type;
};

export type RoleSortInput = {
  company?: InputMaybe<CompanySortInput>;
  userType?: InputMaybe<SortEnumType>;
};

export type SalableObjectDtoInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  priceBuy: Scalars['Float']['input'];
  priceSell: Scalars['Float']['input'];
};

export type SalableObjectFilterInput = {
  and?: InputMaybe<Array<SalableObjectFilterInput>>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<SalableObjectFilterInput>>;
  priceBuy?: InputMaybe<FloatOperationFilterInput>;
  priceSell?: InputMaybe<FloatOperationFilterInput>;
};

export type SalableObjectInput = {
  description: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  priceBuy: Scalars['Float']['input'];
  priceSell: Scalars['Float']['input'];
};

export type ServiceDtoInput = {
  category: CategoryDtoInput;
  company: CompanyDtoInput;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  priceBuy: Scalars['Float']['input'];
  priceSell: Scalars['Float']['input'];
  providers: Array<UserDtoInput>;
};

export type ServiceFilterInput = {
  and?: InputMaybe<Array<ServiceFilterInput>>;
  category?: InputMaybe<CategoryFilterInput>;
  company?: InputMaybe<CompanyFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ServiceFilterInput>>;
  priceBuy?: InputMaybe<FloatOperationFilterInput>;
  priceSell?: InputMaybe<FloatOperationFilterInput>;
  providers?: InputMaybe<ListFilterInputTypeOfUserFilterInput>;
};

export type ServiceInput = {
  category: CategoryInput;
  company: CompanyInput;
  description: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  priceBuy: Scalars['Float']['input'];
  priceSell: Scalars['Float']['input'];
  providers: Array<UserInput>;
};

export type ServiceSortInput = {
  category?: InputMaybe<CategorySortInput>;
  company?: InputMaybe<CompanySortInput>;
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  priceBuy?: InputMaybe<SortEnumType>;
  priceSell?: InputMaybe<SortEnumType>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StorageDtoInput = {
  company: CompanyDtoInput;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  products: Array<StoragedProductDtoInput>;
};

export type StorageFilterInput = {
  and?: InputMaybe<Array<StorageFilterInput>>;
  company?: InputMaybe<CompanyFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<StorageFilterInput>>;
  products?: InputMaybe<ListFilterInputTypeOfStoragedProductFilterInput>;
};

export type StorageInput = {
  company: CompanyInput;
  description: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  products: Array<StoragedProductInput>;
};

export type StorageSortInput = {
  company?: InputMaybe<CompanySortInput>;
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
};

export type StoragedProductDtoInput = {
  product: ProductDtoInput;
  quantity: Scalars['Float']['input'];
};

export type StoragedProductFilterInput = {
  and?: InputMaybe<Array<StoragedProductFilterInput>>;
  id?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<StoragedProductFilterInput>>;
  product?: InputMaybe<ProductFilterInput>;
  quantity?: InputMaybe<FloatOperationFilterInput>;
};

export type StoragedProductInput = {
  id: Scalars['Int']['input'];
  product: ProductInput;
  quantity: Scalars['Float']['input'];
};

export type StoragedProductSortInput = {
  id?: InputMaybe<SortEnumType>;
  product?: InputMaybe<ProductSortInput>;
  quantity?: InputMaybe<SortEnumType>;
};

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type SupplierDtoInput = {
  company: CompanyDtoInput;
  nomenclature: NomenclatureDtoInput;
  requisites: RequisitesDtoInput;
};

export type SupplierFilterInput = {
  and?: InputMaybe<Array<SupplierFilterInput>>;
  company?: InputMaybe<CompanyFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  nomenclature?: InputMaybe<NomenclatureFilterInput>;
  or?: InputMaybe<Array<SupplierFilterInput>>;
  requisites?: InputMaybe<RequisitesFilterInput>;
};

export type SupplierInput = {
  company: CompanyInput;
  id: Scalars['Int']['input'];
  nomenclature: NomenclatureInput;
  requisites: RequisitesInput;
};

export type SupplierSortInput = {
  company?: InputMaybe<CompanySortInput>;
  id?: InputMaybe<SortEnumType>;
  nomenclature?: InputMaybe<NomenclatureSortInput>;
  requisites?: InputMaybe<RequisitesSortInput>;
};

export enum Type {
  Admin = 'ADMIN',
  Client = 'CLIENT',
  Owner = 'OWNER',
  Specialist = 'SPECIALIST'
}

export type TypeOperationFilterInput = {
  eq?: InputMaybe<Type>;
  in?: InputMaybe<Array<Type>>;
  neq?: InputMaybe<Type>;
  nin?: InputMaybe<Array<Type>>;
};

export type UserCredentialsDtoInput = {
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  role: RoleDtoInput;
  userId: Scalars['Int']['input'];
};

export type UserCredentialsFilterInput = {
  and?: InputMaybe<Array<UserCredentialsFilterInput>>;
  id?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<UserCredentialsFilterInput>>;
  password?: InputMaybe<StringOperationFilterInput>;
  phoneNumber?: InputMaybe<StringOperationFilterInput>;
  role?: InputMaybe<RoleFilterInput>;
  userId?: InputMaybe<IntOperationFilterInput>;
};

export type UserCredentialsInput = {
  id: Scalars['Int']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  role: RoleInput;
  userId: Scalars['Int']['input'];
};

export type UserCredentialsSortInput = {
  id?: InputMaybe<SortEnumType>;
  password?: InputMaybe<SortEnumType>;
  phoneNumber?: InputMaybe<SortEnumType>;
  role?: InputMaybe<RoleSortInput>;
  userId?: InputMaybe<SortEnumType>;
};

export type UserDtoInput = {
  credentials: UserCredentialsDtoInput;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  patronomic: Scalars['String']['input'];
  roles: Array<RoleInput>;
  surname: Scalars['String']['input'];
};

export type UserFilterInput = {
  and?: InputMaybe<Array<UserFilterInput>>;
  credentials?: InputMaybe<UserCredentialsFilterInput>;
  dateOfBirth?: InputMaybe<DateOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<UserFilterInput>>;
  patronomic?: InputMaybe<StringOperationFilterInput>;
  roles?: InputMaybe<ListFilterInputTypeOfRoleFilterInput>;
  surname?: InputMaybe<StringOperationFilterInput>;
};

export type UserInput = {
  credentials: UserCredentialsInput;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  patronomic: Scalars['String']['input'];
  roles: Array<RoleInput>;
  surname: Scalars['String']['input'];
};

export type UserSortInput = {
  credentials?: InputMaybe<UserCredentialsSortInput>;
  dateOfBirth?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  patronomic?: InputMaybe<SortEnumType>;
  surname?: InputMaybe<SortEnumType>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { readUsers: Array<{ dateOfBirth?: any | null, email?: string | null, id: number, name: string, patronomic: string, surname: string }> };

export type GetClientsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClientsQuery = { readUsers: Array<{ name: string, surname: string, credentials: { phoneNumber: string } }> };

export const GetUsersDocument = gql`
    query GetUsers {
  readUsers {
    dateOfBirth
    email
    id
    name
    patronomic
    surname
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUsersGQL extends Apollo.Query<GetUsersQuery, GetUsersQueryVariables> {
    document = GetUsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetClientsDocument = gql`
    query GetClients {
  readUsers(where: {credentials: {role: {userType: {eq: CLIENT}}}}) {
    name
    surname
    credentials {
      phoneNumber
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetClientsGQL extends Apollo.Query<GetClientsQuery, GetClientsQueryVariables> {
    document = GetClientsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }