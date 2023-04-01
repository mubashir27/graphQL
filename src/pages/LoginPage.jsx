import { Fragment, useContext, useEffect, useMemo, useState } from 'react';
import Registration from '../components/Registration/Registration';
import usePersonalInfoDetailHooks from '../hooks/usePersonalInfoDetailHooks';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, resendSignInVerificationCode, verificationCode } from '../store/auth/authFunctions';
import { ContextAuth } from '../context/ContextAuth';
const RegistrationPage = () => {
    // dispatch redux functions
    const dispatch = useDispatch();
    // declares local veriables
    const [loginData, setLoginData] = useState({});
    const [personalInfo, setPersonalInfo] = useState({});

    // calling Hooks
    const { loginLabels } = usePersonalInfoDetailHooks();

    // calling context functions and global variables
    const { step, setStep, resetStep } = useContext(ContextAuth);
    // calling redux variables
    const { signUpUser, verifiedUser } = useSelector((state) => state.auth);
    // initializing objects
    const userData = {
        password: personalInfo?.password,
        email: personalInfo?.email,
        verificationCode: personalInfo?.verificationCode,
    };

    // declaring functions
    const handleChange = (event) => {
        setPersonalInfo({
            ...personalInfo,
            [event.target.id]: event.target.value,
        });
    };

    // console.log('here is redux testing', signUpUser, isLoading, user);
    const handleClick = () => {
        if (step === 0) {
            dispatch(signIn(userData));
            setPersonalInfo({
                ...personalInfo,
                verificationCode: '',
            });
            return;
        } else if (step === 1) {
            dispatch(verificationCode(userData));
        } else {
            return;
        }
    };

    useMemo(() => {
        setLoginData(loginLabels[step]);
    }, [step]);

    useEffect(() => {
        if (signUpUser && !verifiedUser) {
            console.log('isRuned');
            setStep(step + 1);
            dispatch(resendSignInVerificationCode(userData));
        }
        if (verifiedUser) dispatch(signIn(userData));
    }, [verifiedUser, signUpUser]);

    console.log('change is clicked', personalInfo);

    return (
        <Fragment>
            <Registration
                personalInfo={personalInfo}
                personalData={loginData}
                handleChange={handleChange}
                handleClick={handleClick}
                setPersonalInfo={setPersonalInfo}
            />
        </Fragment>
    );
};

export default RegistrationPage;
