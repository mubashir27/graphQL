import { createContext, useState } from 'react';

export const ContextAuth = createContext();
export const ContextAuthProvider = (props) => {
    const [step, setStep] = useState(0);
    const resetStep = () => {
        setStep(0);
    };
    return (
        <ContextAuth.Provider
            value={{
                step,
                setStep,
                resetStep,
            }}
        >
            {props.children}
        </ContextAuth.Provider>
    );
};
