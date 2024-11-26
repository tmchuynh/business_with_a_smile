"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayPicker } from "react-day-picker";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const defaultMonth = new Date();
defaultMonth.setMonth( defaultMonth.getMonth() + 3 );

const startMonth = new Date();
startMonth.setMonth( startMonth.getMonth() + 2 );

function Calendar( {
    className,
    classNames,
    showOutsideDays = true,
    ...props
}: CalendarProps ) {
    return (
        <DayPicker
            captionLayout="dropdown"
            defaultMonth={defaultMonth}
            showOutsideDays={showOutsideDays}
            className={cn( "p-4 bg-white ring-1 ring-deepTeal-200 border  dark:border-deepBlue-400 rounded-md", className )}
            classNames={{
                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                month: "space-y-4",
                caption: "flex justify-center pt-1 relative items-center",
                caption_label: "text-sm font-medium",
                nav: "space-x-1 flex items-center",
                nav_button: cn(
                    buttonVariants( { variant: "outline" } ),
                    "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
                ),
                nav_button_previous: "absolute left-1 text-deepTeal-600 dark:text-softNeutral-900",
                nav_button_next: "absolute right-1 text-deepTeal-600 dark:text-softNeutral-900",
                table: "w-full border-collapse space-y-1",
                head_row: "flex",
                head_cell:
                    "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
                row: "flex w-full mt-2",
                cell: cn(
                    "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
                    props.mode === "range"
                        ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
                        : "[&:has([aria-selected])]:rounded-md"
                ),
                day: cn(
                    buttonVariants( { variant: "ghost" } ),
                    "h-8 w-8 p-0 font-normal hover:text-softNeutral-50 hover:bg-deepBlue-200 aria-selected:opacity-100 text-deepTeal-600"
                ),
                day_range_start: "day-range-start",
                day_range_end: "day-range-end",
                day_selected:
                    "bg-deepTeal-400 text-deepTeal-50 hover:bg-deepTeal-200 hover:text-white focus:bg-deepTeal-600 focus:text-white",
                day_today: "bg-deepBlue-400 text-white hover:bg-deepTeal-600 hover:text-softNeutral-50",
                day_disabled: "relative before:absolute text-richRed-500",
                day_outside:
                    "day-outside text-softNeutral-300 aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
                day_range_middle:
                    "aria-selected:bg-accent aria-selected:text-accent-foreground",
                day_hidden: "invisible",
                ...classNames,
            }}
            components={{
                IconLeft: () => <ChevronLeft className="h-4 w-4" />,
                IconRight: () => <ChevronRight className="h-4 w-4" />,
            }}
            {...props}
        />
    );
}
Calendar.displayName = "Calendar";

export { Calendar };
