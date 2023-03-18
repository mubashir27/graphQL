const Input = (props) => {
    const { onChange, data, title, type, id } = props;
    return (
        <div className="">
            <label name={id} className="block text-sm font-semibold text-gray-800">
                {title}
            </label>
            <input
                id={id}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-600 rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 "
                value={data}
                type={type}
                onChange={(event) => onChange(event)}
            />
        </div>
    );
};

export default Input;
