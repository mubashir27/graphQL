import { Auth } from 'aws-amplify';
import { Fragment, useMemo, useState } from 'react';
import Registration from '../components/Registration/Registration';
import usePersonalInfoDetailHooks from '../hooks/usePersonalInfoDetailHooks';

const RegistrationPage = () => {
    const [step, setStep] = useState(0);
    const [personalInfo, setPersonalInfo] = useState({});
    const [personalData, setPersonalData] = useState({});
    const { labels } = usePersonalInfoDetailHooks();

    const handleChange = (event) => {
        setPersonalInfo({
            ...personalInfo,
            [event.target.id]: event.target.value,
        });
    };

    const handleClick = async () => {
        if (step === 0) {
            try {
                await Auth.signUp({
                    username: personalInfo?.email,
                    password: personalInfo?.password,
                    attributes: {
                        email: personalInfo?.email,
                        name: personalInfo?.userName,
                    },
                });
                setStep(step + 1);
                setPersonalInfo({
                    ...personalInfo,
                    verificationCode: '',
                });
            } catch (err) {
                console.log('error in sign up', { err });
            }
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
