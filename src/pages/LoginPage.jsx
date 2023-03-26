import { Fragment, useEffect, useMemo, useState } from 'react';
import Registration from '../components/Registration/Registration';
import usePersonalInfoDetailHooks from '../hooks/usePersonalInfoDetailHooks';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, verificationCode } from '../store/auth/authFunctions';

const RegistrationPage = () => {
    const [step, setStep] = useState(0);
    const [loginDetails, setLoginDetails] = useState({});
    const [loginData, setLoginData] = useState({});
    const { loginLabels } = usePersonalInfoDetailHooks();

    const { signUpUser, isLoading, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setLoginDetails({
            ...loginDetails,
            [event.target.id]: event.target.value,
        });
    };
    const userData = {
        password: loginDetails?.password,
        email: loginDetails?.email,
        // verificationCode: loginDetails?.verificationCode,
    };
    // console.log('here is redux testing', signUpUser, isLoading, user);
    const handleClick = async () => {
        if (step === 0) {
            dispatch(signIn(userData));
            setLoginDetails({
                ...loginDetails,
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

    // useEffect(() => {
    //     if (signUpUser) setStep(step + 1);
    // }, [signUpUser]);
    console.log('change is clicked', loginDetails);

    return (
        <Fragment>
            <Registration
                personalInfo={loginDetails}
                personalData={loginData}
                handleChange={handleChange}
                handleClick={handleClick}
            />
        </Fragment>
    );
};

export default RegistrationPage;
