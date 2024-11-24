import React from "react";

interface MockupWindowProps {
    children: React.ReactNode;
    className?: string;
    contentClassName?: string;
}

export const MockupWindow: React.FC<MockupWindowProps> = ( {
    children,
    className = "",
    contentClassName = "",
} ) => {
    return (
        <div className={`mockup-window bg-base-300 border ${ className }`}>
            <div className={`bg-base-200 flex justify-center px-4 py-16 ${ contentClassName }`}>
                {children}
            </div>
        </div>
    );
};
