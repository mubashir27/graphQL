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
                type: ['text', 'text', 'password'],
                HaveAnAccount: 'Have an Account?',
                to: '/login',
                routingPage: 'Sign In',
            },
            {
                title: 'Check your mail!',
                label: 'Verification Code',
                type: ['text'],
                description: 'Verify your Account',
                buttonText: 'Verify',
                textFieldID: ['verificationCode'],
            },
        ];
        // for login
        const loginLabels = [
            {
                title: 'Login to your Customize Shoping Platform',
                label: 'Email Address',
                labelSecondField: 'Password',
                description: 'Login an Account',
                buttonText: 'Sign In',
                type: ['text', 'password'],
                textFieldID: ['email', 'password'],
                HaveAnAccount: "Don't have an Account?",
                to: '/',
                routingPage: 'Sign Up',
            },
            {
                title: 'Check your mail!',
                label: 'Verification Code',
                type: ['text'],
                description: 'Verify your Account',
                buttonText: 'Verify',
                textFieldID: ['verificationCode'],
            },
        ];

        return { labels, loginLabels };
    }, []);

export default usePersonalInfoDetailHooks;
