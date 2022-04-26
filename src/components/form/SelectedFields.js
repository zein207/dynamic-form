import React, { useContext } from 'react'
import FieldsContext from '../../contexts/FieldsContext';
import { FormItem } from '../ui/FormItem';

export const SelectedFields = () => {

    const { fieldsForm } = useContext(FieldsContext);

    const fieldsList = fieldsForm.fieldsForm || fieldsForm

    const activeFields = fieldsList.filter(field => field.isActive)

    return (
        <div className="col-md-6 login-form-2">
            <form>

                {
                    activeFields.map((field, index) => (
                        <FormItem key={index} {...field}/>
                    ))
                }

            </form>
        </div>
    )
}
