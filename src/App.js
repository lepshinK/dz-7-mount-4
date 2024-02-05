import React, { useState, useMemo, useCallback, useEffect } from "react";

const ExpensiveOperationComponent = ({ text, onClick }) => {
    const reversedText = useMemo(() => {
        console.log("Calculating reversedText");
        return text.split("").reverse().join("");
    }, [text]);

    useEffect(() => {
        console.log("Effect: Count has been updated");
    }, [text, onClick]);

    return (
        <div>
            <p>Исходный текст: {text}</p>
            <p>Реверс текста: {reversedText}</p>
            <button onClick={onClick}>Нажми меня</button>
        </div>
    );
};

const ExampleWithMemoAndCallback = () => {
    const [inputText, setInputText] = useState("");
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Обработка клика");
        setCount((prevCount) => prevCount + 1);
    }, []);

    useEffect(() => {
        // После каждого рендера, включая изменение счетчика
        console.log("Effect: Count has been updated");
    }, [count]);

    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <ExpensiveOperationComponent text={inputText} onClick={handleClick} />
            <p>Количество кликов: {count}</p>
        </div>
    );
};

export default ExampleWithMemoAndCallback;
