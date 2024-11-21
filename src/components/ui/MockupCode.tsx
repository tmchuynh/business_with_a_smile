import React from "react";

interface Line {
    prefix?: string;
    content: string;
    className?: string; // For optional styling of individual lines
}

interface MockupCodeProps {
    lines: Line[]; // Array of lines to display in the mockup
    className?: string; // Optional additional styling for the wrapper
}

export const MockupCode: React.FC<MockupCodeProps> = ( { lines, className = "" } ) => {
    return (
        <div className={`mockup-code ${ className }`}>
            {lines.map( ( line, index ) => (
                <pre key={index} data-prefix={line.prefix} className={line.className}>
                    <code>{line.content}</code>
                </pre>
            ) )}
        </div>
    );
};
