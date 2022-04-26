import React, { useState } from "react";
import FieldsContext, { initialFieldsState } from "./FieldsContext";

const FieldsProvider = ({ children }) => {

  const [fieldsForm, setFieldsForm] = useState(initialFieldsState);

  return (
    <FieldsContext.Provider value={{ fieldsForm, setFieldsForm }}>
      <div>{children}</div>
    </FieldsContext.Provider>
  );
};

export default FieldsProvider;