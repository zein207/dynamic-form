import React from 'react'
import { Fields } from './components/form/Fields'
import { SelectedFields } from './components/form/SelectedFields'

export const DynamicFormApp = () => {
  return (
      <div>
          <h1 className='text-center mt-3'>Dynamic Form</h1>

            <div className="container login-container">
                <div className="row">

                    <Fields />

                    <SelectedFields />

                </div>
            </div>

      </div>
  )
}
