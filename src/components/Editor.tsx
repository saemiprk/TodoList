import { useState } from "react";

interface Props {
    onClickAdd: (text: string) => void;
}

export default function Editor(props: Props) {
    const [text, setText] = useState('');

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const onClickButton = () => {
        props.onClickAdd(text);
        setText('');
    }

    return (
        <div>
           <input className="border m-2 w-[300px] py-1 px-2 rounded-sm" placeholder="New Todo" value={text} onChange={onChangeInput} />
           <button className="p-2 rounded-md text-white bg-blue-400 text-sm" onClick={onClickButton}>추가</button> 
        </div>
    )
}