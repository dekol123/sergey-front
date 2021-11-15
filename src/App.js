import * as React from "react";
import { Admin, Resource, ShowGuesser, AppBar } from 'react-admin';
import crudProvider from 'ra-data-nestjsx-crud'
import { PatientsList, PatientsEdit, PatientsCreate } from "./components/patients";
import { BrigadeMedicalPersonnelList, BrigadeMedicalPersonnelEdit, BrigadeMedicalPersonnelCreate } from './components/brigade-medical-personnel';
import { NewsList, NewsEdit, NewsCreate } from "./components/news";
import { RegisterOfCardsCreate, RegisterOfCardsEdit, RegisterOfCardsList } from "./components/register-of-cards";
import { BrigadeList, BrigadeEdit, BrigadeCreate } from "./components/brigade";
import { ArrivalsList, ArrivalsEdit, ArrivalsCreate } from "./components/arrivals";
import { CardList, CardEdit, CardCreate } from "./components/cards";
import { ComplainsSuggestionsEdit, ComplainsSuggestionsList, ComplainsSuggestionsCreate } from "./components/complains-suggestions/complains-suggestions";
import { CatalogueOfServicesList, CatalogueOfServicesEdit, CatalogueOfServicesCreate } from "./components/catalogue-of-services";
import { ComplexOfServicesList, ComplexOfServicesCreate, ComplexOfServicesEdit } from './components/complex-of-services';
import { DepartmentsList, DepartmentsCreate, DepartmentsEdit } from "./components/departments";
import { MedicalPersonnelList, MedicalPersonnelEdit, MedicalPersonnelCreate } from './components/medical-personnel';
import { CustomTheme } from './components/theme/theme';

const dataProvider = crudProvider('http://localhost:3000');
const App = () => (
    <Admin theme={CustomTheme} dataProvider={dataProvider}>
      <Resource name="sport_patients" list={PatientsList} show={ShowGuesser} edit={PatientsEdit} create={PatientsCreate}/>
      <Resource name="sport_brigade_medical_personnel" list={BrigadeMedicalPersonnelList} show={ShowGuesser} edit={BrigadeMedicalPersonnelEdit} create={BrigadeMedicalPersonnelCreate}/>
      <Resource name="sport_cards_reestr" list={RegisterOfCardsList} show={ShowGuesser} create={RegisterOfCardsCreate} edit={RegisterOfCardsEdit} />
      <Resource name="sport_brigade" list={BrigadeList} show={ShowGuesser} edit={BrigadeEdit} create={BrigadeCreate}/>
      <Resource name="sport_arrivals" list={ArrivalsList} show={ShowGuesser} edit={ArrivalsEdit} create={ArrivalsCreate} />
      <Resource name="sport_cards" list={CardList} show={ShowGuesser} edit={CardEdit} create={CardCreate}/>
      <Resource name="sport_catalogue_of_services" list={CatalogueOfServicesList} show={ShowGuesser} edit={CatalogueOfServicesEdit} create={CatalogueOfServicesCreate} /> 
      <Resource name="sport_complex_of_services" list={ComplexOfServicesList} show={ShowGuesser} edit={ComplexOfServicesEdit} create={ComplexOfServicesCreate} />
      <Resource name="sport_medical_personnel" list={MedicalPersonnelList} show={ShowGuesser} edit={MedicalPersonnelEdit} create={MedicalPersonnelCreate}/>
      <Resource name="sport_departments" list={DepartmentsList} show={ShowGuesser} edit={DepartmentsEdit} create={DepartmentsCreate}/>
      <Resource name="complains_suggestions" list={ComplainsSuggestionsList} show={ShowGuesser} edit={ComplainsSuggestionsEdit} create={ComplainsSuggestionsCreate}/>
      <Resource name="news" list={NewsList} show={ShowGuesser} edit={NewsEdit} create={NewsCreate} /> 
    </Admin>
  );

export default App;