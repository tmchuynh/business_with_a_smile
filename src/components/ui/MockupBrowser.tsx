import React from "react";

interface MockupBrowserProps {
    url: string;
    children: React.ReactNode;
    className?: string;
}

export const MockupBrowser: React.FC<MockupBrowserProps> = ( { url, children, className = "" } ) => {
    return (
        <div className={`mockup-browser bg-base-300 border ${ className }`}>
            <div className="mockup-browser-toolbar">
                <div className="input">{url}</div>
            </div>
            <div className="bg-base-200 flex justify-center px-4 py-16">{children}</div>
        </div>
    );
};
