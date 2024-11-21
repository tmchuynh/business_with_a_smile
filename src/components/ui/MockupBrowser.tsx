import React from "react";

interface MockupBrowserProps {
    url: string; // The URL to display in the toolbar
    children: React.ReactNode; // The content to display inside the browser window
    className?: string; // Optional additional styling for the wrapper
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
