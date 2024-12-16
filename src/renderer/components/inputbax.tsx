import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { X } from 'react-bootstrap-icons';
// import '../pages/editRecipe/editRecipe.css';

function InputWithClear() {
  const [value, setValue] = useState<string>('');

  const clearInput = () => setValue('');

  return (
    <div className='croos-input'>
      <InputGroup className="">
        <Form.Control
          type="text"
          placeholder="Enter text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="custom-input"
        />
        {value && (
          <Button variant="close-icon" onClick={clearInput}>
            <X />
          </Button>
        )}
      </InputGroup>
    </div>
  );
}

export default InputWithClear;
