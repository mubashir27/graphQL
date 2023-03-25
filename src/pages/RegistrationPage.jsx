import { Auth } from 'aws-amplify';
import { Fragment, useMemo, useState } from 'react';
import Registration from '../components/Registration/Registration';
import usePersonalInfoDetailHooks from '../hooks/usePersonalInfoDetailHooks';
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from '../store/auth/authFunctions';

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
    };
    console.log('here is redux testing', signUpUser, isLoading, user);
    const handleClick = async () => {
        if (step === 0) {
            dispatch(signUp(userData));
            if (signUpUser) setStep(step + 1);
            setPersonalInfo({
                ...personalInfo,
                verificationCode: '',
            });
            //
        } else if (step === 1) {
            try {
                await Auth.confirmSignUp(personalInfo?.email, personalInfo?.verificationCode);
                //   signIn();
                console.log('U R SIGNED IN!!');
            } catch (err) {
                console.log('error in verification in', { err });
            }
        } else {
            return;
        }
    };

    useMemo(() => {
        setPersonalData(labels[step]);
    }, [step]);
    console.log('change is clicked', personalData, personalInfo);

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
