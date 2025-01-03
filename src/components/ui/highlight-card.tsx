"use client";
import { useTheme } from 'next-themes';
import React, { ForwardRefExoticComponent, RefAttributes, useEffect, useState } from 'react';
import { Button } from './button';
import { LucideProps } from 'lucide-react';

interface HighlightedCardProps {
    title: string;
    description: string;
    actionText?: string;
    Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    onActionClick?: () => void;
    stats?: {
        label: string;
        value: string;
    }[];
}

const HighlightedCard: React.FC<HighlightedCardProps> = ( {
    title,
    description,
    actionText,
    Icon,
    onActionClick,
    stats,
} ) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState( false );
    useEffect( () => {
        setMounted( true );
    }, [] );

    const isDarkMode = theme === 'dark';

    return (
        <div className="relative border-2 border-neutral-100 shadow-lg rounded-lg mt-16 mx-7 pt-10 pb-4 transition-all duration-200 ease-in-out hover:shadow-xl">
            {Icon && (
                <div className="flex justify-center items-center bg-white dark:bg-softGray-900 -mt-20 mx-auto w-24 h-24 rounded-full border-4 border-deepTeal-400 dark:border-deepBlue-500 shadow-lg">
                    <Icon className="h-10 w-10 text-deepTeal-800 dark:text-deepBlue-200" />
                </div>
            )}
            <div className="profile__info text-center mt-6 px-6">
                <h3>{title}</h3>
                <p className='w-11/12 mx-auto'>{description}</p>
            </div>
            {stats ? (
                <div className="profile__stats mt-6 flex justify-around align-top gap-4 px-6">
                    {stats.map( ( stat, index ) => (
                        <div key={index} className="profile__stats__item text-center">
                            <h6>{stat.label}</h6>
                            <h5>{stat.value}</h5>
                        </div>
                    ) )}
                </div> ) : ''}
            {actionText ? (
                <div className="profile__cta mt-6 px-6">
                    {mounted && (
                        <Button
                            onClick={onActionClick}
                            className="w-1/4 mx-auto"
                            variant={isDarkMode ? "secondary" : "outline"}
                        >
                            {actionText}
                        </Button>
                    )}
                </div>
            ) : ''}
        </div>
    );
};

export default HighlightedCard;
