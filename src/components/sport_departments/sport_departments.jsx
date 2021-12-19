import * as React from "react";
import { useMediaQuery } from '@material-ui/core';
import {
    List,
    Datagrid,
    TextField,
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

const departmentsFilters = [
    <TextInput source="reason" label="Search by description" alwaysOn />,
]

export const DepartmentsList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (<List {...props} filters={departmentsFilters}>
        {isSmall ? (
            <SimpleList
            primaryText={record => record.id}
            secondaryText={record => record.description}
            tertiaryText={record => record.contacts}
        />) : (
        <Datagrid rowClick="edit">
            <TextField source="contacts" />
            <TextField source="description" />
            <ReferenceField source="id" reference="sport_medical_personnel">
                <TextField source="firstName" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
        )}
    </List>
)};

export const DepartmentsEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />            
            <TextInput source="contacts" />
            <TextInput source="description" />
            <ReferenceInput source="id" reference="sport_medical_personnel">
                <SelectInput optionText="firstName" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
)

export const DepartmentsCreate = props => {
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = ({ data }) => {
        redirect(`/sport_departments`);
        refresh();
    };
    return (<Create onSuccess={onSuccess} {...props}>
        <SimpleForm>             
            <TextInput source="contacts" />
            <TextInput source="description" />
            <ReferenceInput source="id" reference="sport_medical_personnel">
                <SelectInput optionText="firstName" />
            </ReferenceInput>
        </SimpleForm>
    </Create>)
}