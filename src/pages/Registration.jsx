import { Fragment, useState } from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    const handleChange = () => {
        console.log('change is clicked');
    };

    return (
        <Fragment>
            <div className=" relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full m-auto rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-2xl mb-3 font-semibold text-center text-white font-merri">
                        Hi Mubashir here Please feel free to sign up
                    </h1>
                    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                        <h1 className="text-2xl font-semibold text-center text-gray-700">Create an account</h1>
                        <div className="mt-6">
                            <div className="mb-2">
                                <Input id="name" setData={setUserName} data={userName} title={'Enter Your Name'} />
                            </div>
                            <div className="mb-2">
                                <Input id="email" setData={setEmail} data={email} title={'Enter Your Email'} />
                            </div>
                            <div className="mb-2">
                                <Input
                                    id="password"
                                    setData={setPassword}
                                    data={password}
                                    title={'Enter Your Password'}
                                    type={'password'}
                                />
                            </div>
                            <p className="text-xs text-gray-800 font-bold">
                                Password must be at least 8 characters long
                            </p>
                            <div className="mt-6">
                                <Button title="Sign Up" onClick={handleChange} />
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

export default Registration;
