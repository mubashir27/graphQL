import { memo } from 'react';

const Button = (props) => {
    const { title, onClick } = props;
    return (
        <button
            onClick={() => onClick()}
            className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:outline-none focus:bg-gray-600"
        >
            {title}
        </button>
    );
};

export default memo(Button);
