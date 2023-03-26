import { Auth } from 'aws-amplify';

const signUp = async (userData) => {
    const { userName, password, email } = userData;
    const user = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
            email: email,
            name: userName,
        },
    });
    return user;
};
const verificationCode = async (userData) => {
    const { verificationCode, email } = userData;
    console.log('U R SIGNED IN from verification!!', verificationCode, email);
    const user = await Auth.confirmSignUp(email, verificationCode);
    return user;
};

const signIn = async (userData) => {
    const { email, password } = userData;
    const user = await Auth.signIn(email, password);
    return user;
};

const authService = {
    signUp,
    verificationCode,
    signIn,
    // resentVerificationLink,
    // sendConfrimationCode,
    // updatePassword,
    // logout,
};

export default authService;