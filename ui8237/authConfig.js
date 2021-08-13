export default {
  usernameAttributes: 'email',
  signUpConfig: {
    signUpFields: [
      {
        label: 'First Name',
        key: 'given_name',
        required: true,
        displayOrder: 1,
        type: 'string',
      },
      {
        label: 'Last Name',
        key: 'family_name',
        required: true,
        displayOrder: 2,
        type: 'string',
      },
      {
        label: 'Phone Number (Scroll on prefix)',
        key: 'phone_number',
        dialCode: '+44',
        required: true,
        displayOrder: 3,
        type: 'phone_number',
      },
      {
        label: 'Email',
        key: 'email',
        required: true,
        displayOrder: 4,
        type: 'string',
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 5,
        type: 'password',
      },
    ],
  },
};
