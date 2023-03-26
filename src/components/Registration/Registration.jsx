import { Fragment, memo } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Registration = (props) => {
    const { personalData, personalInfo, handleChange, handleClick } = props;
    const {
        title,
        label,
        labelSecondField,
        labelThirdField,
        description,
        buttonText,
        textFieldID,
        HaveAnAccount,
        to,
        routingPage,
        type,
    } = personalData;
    return (
        <Fragment>
            <div className=" relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full m-auto rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-2xl mb-3 font-semibold text-center text-white font-merri">{title}</h1>
                    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl md:max-w-xl">
                        <h1 className="text-2xl font-semibold text-center text-gray-700">{description}</h1>
                        <div className="mt-6">
                            {label && (
                                <div className="mb-2">
                                    {console.log('textFieldID', personalInfo[textFieldID[0]])}
                                    <Input
                                        id={textFieldID[0]}
                                        onChange={handleChange}
                                        data={personalInfo[textFieldID[0]]}
                                        title={label}
                                        type={type[0]}
                                    />
                                </div>
                            )}
                            {labelSecondField && (
                                <div className="mb-2">
                                    {console.log('textFieldID', textFieldID[1])}
                                    <Input
                                        id={textFieldID[1]}
                                        onChange={handleChange}
                                        data={personalInfo[textFieldID[1]]}
                                        type={type[1]}
                                        title={labelSecondField}
                                    />
                                </div>
                            )}
                            {labelThirdField && (
                                <div className="mb-2">
                                    {console.log('textFieldID', textFieldID[2])}
                                    <Input
                                        id={textFieldID[2]}
                                        onChange={handleChange}
                                        data={personalInfo[textFieldID[2]]}
                                        title={labelThirdField}
                                        type={type[2]}
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

                        {textFieldID.includes('password') && (
                            <p className="mt-2 text-xs text-center text-gray-700">
                                {' '}
                                {HaveAnAccount}{' '}
                                <Link to={to} className="font-medium text-gray-600 hover:underline">
                                    {routingPage}
                                </Link>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default memo(Registration);
