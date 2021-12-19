import React, { useState, useEffect } from "react";
import { useMediaQuery } from '@material-ui/core';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    EditButton,
    TextInput,
    SimpleForm,
    Create,
    Edit,
    ReferenceInput,
    SelectInput,
    SimpleList,
    useQuery,
    AutocompleteArrayInput,
    useRefresh,
    useRedirect,
} from 'react-admin';

const catalogueOfServicesFilters = [
    <TextInput source="serviceDescription" label="Search by service description" alwaysOn />,
]

export const CatalogueOfServicesList = props => {
    
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (<List {...props} filters={catalogueOfServicesFilters}>
        {isSmall ? (
            <SimpleList
            primaryText={record => record.serviceDescription}
            secondaryText={record => `${record.price}`}
            tertiaryText={record => ""}
        />) : (
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="price" />
            <TextField source="serviceDescription" />
            {/* <ReferenceArrayField label="Medical personnel" reference="medical-personnel" source="">
                <SingleFieldList>
                    <ChipField source="firstName" />
                </SingleFieldList>
            </ReferenceArrayField> */}            
            <EditButton />
        </Datagrid>
        )}
    </List>
)};

export const CatalogueOfServicesEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="price" />
            <TextInput source="serviceDescription" />
        </SimpleForm>
    </Edit>
)

export const CatalogueOfServicesCreate = props => {
    // const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = ({ data }) => {
        redirect(`/sport_catalogue_of_services`);
        refresh();
    };

    const [medicalPersonnels, setMedicalPersonnels] = useState([]);
    const { data: medicalPersonnelsChoices } = useQuery({
        type:'getList',
        resource: 'sport_medical_personnel',
        payload: {
            pagination: { page: 1, perPage: 600 },
            sort: { field: 'firstName', order: 'ASC' },
            filter: {},
          },
    })

    const [complexOfServices, setComplexOfServices] = useState([]);
    const { data: complexOfServicesChoices } = useQuery({
        type:'getList',
        resource: 'sport_complex_of_services',
        payload: {
            pagination: { page: 1, perPage: 600 },
            sort: { field: 'description', order: 'ASC' },
            filter: {},
          },
    })

    useEffect(() => {
        if(medicalPersonnelsChoices) setMedicalPersonnels(medicalPersonnelsChoices.map((item) => ({ id:item.id, name:item.firstName })))
        if(complexOfServicesChoices) setComplexOfServices(complexOfServicesChoices.map((item) => ({ id:item.id, name:item.description })))
    }, [medicalPersonnelsChoices, complexOfServicesChoices])

    return (
    <Create {...props} title='Create new catalogue of services' onSuccess={onSuccess}>
        <SimpleForm>             
            <TextInput source="price" />
            <TextInput source="serviceDescription" />
            <AutocompleteArrayInput 
            parse={value =>
                value && value.map(v => ({ id: v }))
            }
            format={value => value && value.map(v => v.id)}
            source="sport_medical_personnel" choices={medicalPersonnels} />
            <AutocompleteArrayInput 
            parse={value =>
                value && value.map(v => ({ id: v }))
            }
            format={value => value && value.map(v => v.id)}
            source="sport_complex_of_services" choices={complexOfServices} />
        </SimpleForm>
    </Create>
)}