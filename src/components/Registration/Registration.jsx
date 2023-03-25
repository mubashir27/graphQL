import { Fragment, memo } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Registration = (props) => {
    const { personalData, personalInfo, handleChange, handleClick } = props;
    const { title, label, labelSecondField, labelThirdField, description, buttonText, textFieldID } = personalData;
    return (
        <Fragment>
            <div className=" relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full m-auto rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-2xl mb-3 font-semibold text-center text-white font-merri">{title}</h1>
                    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                        <h1 className="text-2xl font-semibold text-center text-gray-700">{description}</h1>
                        <div className="mt-6">
                            {label && (
                                <div className="mb-2">
                                    <Input
                                        id={textFieldID[0]}
                                        onChange={handleChange}
                                        data={personalInfo?.userName}
                                        title={label}
                                    />
                                </div>
                            )}
                            {labelSecondField && (
                                <div className="mb-2">
                                    <Input
                                        id={textFieldID[1]}
                                        onChange={handleChange}
                                        data={personalInfo?.email}
                                        title={labelSecondField}
                                    />
                                </div>
                            )}
                            {labelThirdField && (
                                <div className="mb-2">
                                    <Input
                                        id={textFieldID[2]}
                                        onChange={handleChange}
                                        data={personalInfo?.password}
                                        title={labelThirdField}
                                        type={'password'}
                                    />
                                </div>
                            )}
                            {textFieldID.includes('password') && (
                                <p className="text-xs text-gray-800 font-bold">
                                    Password must be at least 8 characters long
                                </p>
                            )}
                            <div className="mt-6">
                                <Button title={buttonText} onClick={handleClick} />
                            </div>
                        </div>

                        <p className="mt-2 text-xs text-center text-gray-700">
                            {' '}
                            Already a member?{' '}
                            <a href="#" className="font-medium text-gray-600 hover:underline">
                                Sign in
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default memo(Registration);
