import { Fragment, useContext, useEffect, useMemo, useState } from 'react';
import Registration from '../components/Registration/Registration';
import usePersonalInfoDetailHooks from '../hooks/usePersonalInfoDetailHooks';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, signUp, verificationCode } from '../store/auth/authFunctions';
import { ContextAuth } from '../context/ContextAuth';

const RegistrationPage = () => {
    // declaring local variables
    const [personalData, setPersonalData] = useState({});
    const [personalInfo, setPersonalInfo] = useState({});

    const { step, setStep, resetStep } = useContext(ContextAuth);
    const { labels } = usePersonalInfoDetailHooks();

    const { signUpUser, verifiedUser, user, message } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setPersonalInfo({
            ...personalInfo,
            [event.target.id]: event.target.value,
        });
    };
    const userData = {
        userName: personalInfo?.name,
        password: personalInfo?.password,
        email: personalInfo?.email,
        verificationCode: personalInfo?.verificationCode,
    };
    console.log('here is redux testing', message);
    const handleClick = async () => {
        if (step === 0) {
            dispatch(signUp(userData));
            setPersonalInfo({
                ...personalInfo,
                verificationCode: '',
            });
            //
        } else if (step === 1) {
            dispatch(verificationCode(userData));
        } else {
            return;
        }
    };

    useMemo(() => {
        setPersonalData(labels[step]);
    }, [step]);

    useEffect(() => {
        if (signUpUser) setStep(step + 1); // giving error

        if (verifiedUser) dispatch(signIn(userData));
    }, [signUpUser, verifiedUser]);
    console.log('change is clicked', personalInfo);

    useEffect(() => resetStep, []);

    return (
        <Fragment>
            <Registration
                personalInfo={personalInfo}
                personalData={personalData}
                handleChange={handleChange}
                handleClick={handleClick}
            />
        </Fragment>
    );
};

export default RegistrationPage;
