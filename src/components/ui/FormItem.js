import React, { useContext } from 'react'
import FieldsContext from '../../contexts/FieldsContext';

export const FormItem = ({name, label, value, text, type, isActive}) => {

    const { fieldsForm, setFieldsForm } = useContext(FieldsContext);

    const fieldsList = fieldsForm.fieldsForm || fieldsForm

    const handleToggleItem = (e) => {
        e.preventDefault();

        const newFields = fieldsList.map(field => {
            if( field.name === name ) {
                return {
                    ...field,
                    isActive: true
                } 
            } else {
                return field
            }
        })

        setFieldsForm(newFields)
    }

    return (
        <div className="form-group">
            <label>{label}</label>
            <input
                type={type}
                className="form-control"
            />
                {
                    ( ! isActive) && 
                    <button className='btn btn-primary' onClick={handleToggleItem}>
                        <i className='fas fa-plus'></i>
                    </button>
                }
        </div>

    )
}
