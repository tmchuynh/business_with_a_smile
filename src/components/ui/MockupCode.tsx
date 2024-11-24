import React from "react";

interface Line {
    prefix?: string;
    content: string;
    className?: string;
}

interface MockupCodeProps {
    lines: Line[];
    className?: string;
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
