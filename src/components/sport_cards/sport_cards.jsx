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
    useRefresh,
    useRedirect
} from 'react-admin';

const cardFilters = [
    <TextInput source="cardContent" label="Search by card content" alwaysOn />,
]

export const CardList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (<List {...props} filters={cardFilters}>
        {isSmall ? (
            <SimpleList
            primaryText={record => record.id}
            secondaryText={record => record.cardContent}
            tertiaryText={record => {}}
        />) : (
        <Datagrid rowClick="edit">                        
            <NumberField source="id" />            
            <TextField source="cardContent" />
            <ReferenceField source="registerOfCardId" reference="sport_cards_reestr">
                <TextField source="firstName" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
        )}
    </List>
)};

export const CardEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />            
            <TextInput source="cardContent" />
            <ReferenceInput source="registerOfCardId" reference="sport_cards_reestr">
                <SelectInput optionText="firstName" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
)

export const CardCreate = props => {
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = ({ data }) => {
        redirect(`/sport_cards`);
        refresh();
    };

    return (<Create onSuccess={onSuccess} {...props}>
        <SimpleForm>             
            <TextInput source="cardContent" />
            <ReferenceInput source="registerOfCardId" reference="sport_cards_reestr">
                <SelectInput optionText="firstName" />
            </ReferenceInput>  
        </SimpleForm>
    </Create>)
}