import { useMemo } from 'react';

const usePersonalInfoDetailHooks = () =>
    useMemo(() => {
        const labels = [
            {
                title: 'Feel Free to Sign Up',
                label: 'User Name',
                labelSecondField: 'Email Address',
                labelThirdField: 'Password',
                description: 'Register an Accout',
                buttonText: 'Sign Up',
                textFieldID: ['name', 'email', 'password'],
            },
            {
                title: 'Check your mail!',
                label: 'Verification Code',
                description: 'Verify your Account',
                buttonText: 'Verify',
                textFieldID: ['verificationCode'],
            },
        ];
        return { labels };
    }, []);

export default usePersonalInfoDetailHooks;
