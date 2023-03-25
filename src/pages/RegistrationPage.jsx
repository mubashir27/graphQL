import { Auth } from 'aws-amplify';
import { Fragment, useEffect, useMemo, useState } from 'react';
import Registration from '../components/Registration/Registration';
import usePersonalInfoDetailHooks from '../hooks/usePersonalInfoDetailHooks';
import { useSelector, useDispatch } from 'react-redux';
import { signUp, verificationCode } from '../store/auth/authFunctions';

const RegistrationPage = () => {
    const [step, setStep] = useState(0);
    const [personalInfo, setPersonalInfo] = useState({});
    const [personalData, setPersonalData] = useState({});
    const { labels } = usePersonalInfoDetailHooks();

    const { signUpUser, isLoading, user } = useSelector((state) => state.auth);
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
    console.log('here is redux testing', signUpUser, isLoading, user);
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
        if (signUpUser) setStep(step + 1);
    }, [signUpUser]);
    console.log('change is clicked', personalInfo);

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
