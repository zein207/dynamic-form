import React from "react";
import fields from '../data/fields.json'

const fieldsForm = fields.fields
export const initialFieldsState = { fieldsForm };

const FieldsContext = React.createContext(initialFieldsState);
export default FieldsContext;