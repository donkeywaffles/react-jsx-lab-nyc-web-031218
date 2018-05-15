import React from 'react';

class RegistrationForm extends React.Component {
  render() {
    return (
        <form>
          <p>Name</p>
          <input type="text" />
          <p>Password</p>
          <input type="password" name="password" /><br/>
          <button type="submit">Push Me</button>
        </form>
    )
  }
}

export default RegistrationForm;
