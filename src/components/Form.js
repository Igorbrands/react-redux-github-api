import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Formu } from '../styles/global';

const Form = (props) => {

    const { handleSubmit, init, submitting } = props

    return (
      <Formu>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <div>
                    <Field
                        name="username"
                        component="input"
                        type="text"
                        placeholder="ex: igorbrands"
                       />
                       <button
                        type="submit"                      
                        disabled={init || submitting}>Send
                    </button>
                </div>
            </div>
        </form>
        </Formu>
    )

}

export default reduxForm({
  form: 'searchForm'
})(Form);
