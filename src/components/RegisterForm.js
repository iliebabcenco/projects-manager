import React from 'react';
import Userfront from '@userfront/react';

Userfront.init('rbv8rwbd');

const SignupForm = Userfront.build({
  toolId: 'oaobrr',
});

const RegisterForm = () => (
  <div>
    <SignupForm />
  </div>
);

export default RegisterForm;
