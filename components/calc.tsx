import React, {useState} from "react";
import usePersist from "./persist";
import funcData, {funcDataType} from './func';
import useSWR from 'swr';



const Calc = () => {
    const [message, setMessage] = useState('');
    const [input, setInput] = useState('');
    const [data, setData] = usePersist<string[]>('calc-history', []);

    const fetcher = async (url: string) => {
        const response = await fetch(url)
        return await response.json() as funcDataType
    }

    const { data: func, error } = useSWR("/api/func", fetcher);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            doAction();
        }
    };

    const doAction = () => {
        const res = eval(input);
        if (typeof res === 'string') {
            setMessage(res);
            data.unshift(input + ' = ' + res);
            setData(data)
            setInput('');
        }
    };

    const clear = () => {
        setData([]);
        setMessage('Clear history.');
    };

    const doFunc = (value: string) => {
        const arr = input.split(',').map((k) => parseInt(k));
        console.log(arr);
        if (isFuncData(func)) {
            const fid = value as keyof typeof func.func;
            const f = func.func[fid]
            const fe = eval(f.function);
            const res = fe(...arr);
            setMessage(res);
            data.unshift(fid + ' = ' + res);
            setData(data);
            setInput('');
        }
    };

    return (
        <div>
            <div className="alert alert-primary">
                <h5>Result: {message}</h5>
                <div className="form-group">
                    <input type="text" value={input} className="form-control"
                    onChange={onChange} onKeyPress={onKeyPress} />
                </div>
                {isFuncData(func) && Object.entries(func.func).map((value, key) => (
                    <button className="btn btn-secondary m-1" key={key}
                    title={value[1].caption} id={value[0]}
                    onClick={() => doFunc(value[0])} >{value[0]}</button>
                ))}
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Hhisotry</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value, key) => (
                        <tr key={key}>
                            <td>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={clear} className="btn btn-warning">
                Clear History
            </button>
        </div>
    )
}

function isFuncData(arg: any): arg is funcDataType {
    return arg !== undefined;
}


export default Calc;
