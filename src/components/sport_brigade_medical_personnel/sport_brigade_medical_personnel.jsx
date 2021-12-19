import * as React from "react";
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
    ReferenceField,
    useRedirect,
    useRefresh
} from 'react-admin';

const brigadeMedicalPersonnelFilters = [
    <TextInput source="firstName" label="Search" alwaysOn />,
]

export const BrigadeMedicalPersonnelList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (<List {...props} filters={brigadeMedicalPersonnelFilters}>
        {isSmall ? (
            <SimpleList
            primaryText={record => record.firstName}
            secondaryText={record => `${record.lastName}`}
            tertiaryText={record => record.position}
        />) : (
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <ReferenceField source="brigadeId" reference="sport_brigade">
                <TextField source="nickName" />
            </ReferenceField>
            <TextField source="firstName" />
            <TextField source="surname" />
            <TextField source="lastName" />
            <TextField source="position" />
            <EditButton />
        </Datagrid>
        )}
    </List>
)};

export const BrigadeMedicalPersonnelEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="brigadeId" reference="sport_brigade">
                <SelectInput optionText="nickName" />
            </ReferenceInput>
            <TextInput source="firstName" />
            <TextInput source="surname" />
            <TextInput source="lastName" />
            <TextInput source="position" />
        </SimpleForm>
    </Edit>
)

export const BrigadeMedicalPersonnelCreate = props => {
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = ({ data }) => {
        redirect(`/sport_brigade_medical_personnel`);
        refresh();
    };

    return (<Create onSuccess={onSuccess} {...props}>
        <SimpleForm>             
            <TextInput source="firstName" />
            <TextInput source="surname" />
            <TextInput source="lastName" />
            <TextInput source="position" />
            <ReferenceInput source="brigadeId" reference="sport_brigade">
                <SelectInput optionText="nickName" />
            </ReferenceInput>   
        </SimpleForm>
    </Create>)
}