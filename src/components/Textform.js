import React, { useState } from 'react';

export default function Textform(props) {
    const [text, settext] = useState('enter text here');

    const handleclick = () => {
        let newtext = text.toUpperCase();
        settext(newtext);
    };

    const handleclick2 = () => {
        let newtext = text.toLowerCase();
        settext(newtext);
    };

    const handleclick3 = () => {
        settext('');
    };

    const handleclick4 = () => {
        const words = text.trim().split(/\s+/);
        const wordCount = words.length;
        const avgWordLength =
            wordCount > 0
                ? words.reduce((sum, w) => sum + w.length, 0) / wordCount
                : 0;

        let score = 0;

        // Simulated detection scoring
        if (avgWordLength > 5) score += 30;
        if (text.match(/[;,:-]{2,}/)) score += 20;
        if (text.match(/\b(however|therefore|moreover|in conclusion|consequently)\b/i)) score +=
        
        
        
        20;
        if (text.length > 500) score += 20;

        if (score >= 50) {
            alert(`⚠️ Potential AI-generated content detected (${score}%)`);
        } else {
            alert(`✅  AI content detected (${score}%)`);
        }
    };

    const handleonchange = (event) => {
        settext(event.target.value);
    };

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleonchange}
                        id="mybox"
                        rows="8"
                    ></textarea>
                </div>
                <button className='btn-primary mx-1' onClick={handleclick}>Convert to Uppercase</button>
                <button className='btn-primary mx-1' onClick={handleclick2}>Convert to Lowercase</button>
                <button className='btn-primary mx-1' onClick={handleclick3}>Clear</button>
                <button className='btn-primary mx-1' onClick={handleclick4}>Detect AI Plagiarism</button>
            </div>
            <div className='container my-2'>
                <h2>Your text summary</h2>
                <p>Words: {text.trim().length > 0 ? text.trim().split(/\s+/).length : 0}, Characters: {text.length}</p>
                <p>Minutes taken to read: {0.008 * text.trim().split(/\s+/).length}</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
