import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = ({ signOut, user }) => {

  return (
    <div >
      {/* <form>
        graphQL basic concepts
      </form> */}
    </div>
  )
}

export default withAuthenticator(App);