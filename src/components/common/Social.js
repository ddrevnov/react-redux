import React from 'react';
import GoogleLogin from 'react-google-login';
import socialConfig from '../../config/social';
import { Button, Segment } from 'semantic-ui-react';

const Social = ({ signinUser }) => {

  const responseGoogle = (response) => {
    let { name, email, googleId } = response.profileObj;
    signinUser({
      type: 'google',
      id: googleId,
      name,
      email
    });
  };

  return (
    <Segment>
      <Button
        as={GoogleLogin}
        clientId={socialConfig.google.clientId}
        buttonText="Google"
        color='red'
        onSuccess={responseGoogle}
        onFailure={responseGoogle} />
    </Segment>
  );
};

export default Social;