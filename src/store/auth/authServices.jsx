import { Auth } from 'aws-amplify';

const signUp = async (userData) => {
    const { userName, password, email } = userData;
    try {
        const user = await Auth.signUp({
            username: email,
            password: password,
            attributes: {
                email: email,
                name: userName,
            },
        });
        return user;
    } catch (err) {
        console.log('error in sign up', { err });
    }
    // console.debug('userData before', userData);
    // const user = await Auth.signUp({
    //     username,
    //     password,
    //     autoSignIn: {
    //         enabled: false,
    //     },
    // });
};
const authService = {
    signUp,
    // login,
    // resentVerificationLink,
    // sendConfrimationCode,
    // updatePassword,
    // logout,
};

export default authService;
