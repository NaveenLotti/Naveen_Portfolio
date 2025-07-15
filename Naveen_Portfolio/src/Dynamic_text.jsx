import React, { useState, useEffect } from 'react';

const InfiniteScrollingText = ({ texts, speed = 50 }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState(texts[0]);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setOffset(prevOffset => {
                if (prevOffset <= -displayText.length * 10) {
                    setCurrentTextIndex(prev => (prev + 1) % texts.length);
                    setDisplayText(texts[(currentTextIndex + 1) % texts.length]);
                    return 0;
                }
                return prevOffset - 1;
            });
        }, speed);

        return () => clearInterval(interval);
    }, [currentTextIndex, texts, speed, displayText]);

    return (
        <div style={{
            width: '300px',
            height: '50px',
            border: '1px solid #ccc',
            overflow: 'hidden',
            position: 'relative',
            whiteSpace: 'nowrap'
        }}>
            <div style={{
                position: 'absolute',
                left: `${offset}px`,
                transition: 'left 0.1s linear',
                lineHeight: '50px',
                padding: '0 10px'
            }}>
                {displayText}
                {'FullStack Developer'}
                {offset < 0 && (
                    <span style={{ marginLeft: '300px' }}>
                        {texts[(currentTextIndex + 1) % texts.length]}
                    </span>
                )}
            </div>
        </div>
    );
};


const Dynamic_text = () => {
    const textArray = [
        "FullStack Developer",
        "Machine Learning Enthusiast",
        "Android Developer",
        "Web Developer",
        "UI/UX Designer",
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h1>Infinite Scrolling Text</h1>
            <InfiniteScrollingText texts={textArray} speed={30} />
        </div>
    );
};

export default Dynamic_text;