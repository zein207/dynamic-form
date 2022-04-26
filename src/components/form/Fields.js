import React, { useContext } from 'react'
import FieldsContext from '../../contexts/FieldsContext'
import { FormItem } from '../ui/FormItem';

export const Fields = () => {

    const { fieldsForm } = useContext(FieldsContext);

    const fieldsList = fieldsForm.fieldsForm || fieldsForm

    return (
        <div className="col-md-6 login-form-1">
            <h3>Select a field to add</h3>
            <form>
                {
                    fieldsList.map((field, index) => {
                        if(field.isActive === true) {
                            return
                        } else {
                            return (<FormItem key={index} {...field}/>)
                        }
                    }
                    )
                }
            </form>
        </div>
    )
}
