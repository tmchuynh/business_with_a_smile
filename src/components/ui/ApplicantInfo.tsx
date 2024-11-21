import React from "react";
import { PaperClipIcon } from "@heroicons/react/20/solid";

interface Attachment {
    name: string;
    size: string;
    link: string;
}

interface InfoSection {
    label: string;
    value: string | React.ReactNode;
}

interface ApplicantInfoProps {
    title: string;
    description: string;
    infoSections: InfoSection[];
    attachments?: Attachment[];
}

export const ApplicantInfo: React.FC<ApplicantInfoProps> = ( {
    title,
    description,
    infoSections,
    attachments,
} ) => {
    return (
        <div className="bg-softNeutral-50 py-6 sm:py-8">
            <div className="px-4 sm:px-0">
                <h3 className="text-2xl font-semibold text-deepTeal-700">{title}</h3>
                <p className="mt-1 max-w-2xl text-sm text-softNeutral-600">{description}</p>
            </div>
            <div className="mt-6 border-t border-softNeutral-200">
                <dl className="divide-y divide-softNeutral-200">
                    {infoSections.map( ( section, index ) => (
                        <div key={index} className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium text-deepTeal-700">{section.label}</dt>
                            <dd className="mt-1 text-sm text-softNeutral-700 sm:col-span-2 sm:mt-0">
                                {section.value}
                            </dd>
                        </div>
                    ) )}
                    {attachments && (
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium text-deepTeal-700">Attachments</dt>
                            <dd className="mt-2 text-sm text-softNeutral-700 sm:col-span-2 sm:mt-0">
                                <ul role="list" className="divide-y divide-softNeutral-200 rounded-md border border-softNeutral-300">
                                    {attachments.map( ( attachment, index ) => (
                                        <li key={index} className="flex items-center justify-between py-4 pl-4 pr-5 text-sm">
                                            <div className="flex w-0 flex-1 items-center">
                                                <PaperClipIcon aria-hidden="true" className="w-5 h-5 shrink-0 text-softNeutral-400" />
                                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                    <span className="truncate font-medium text-deepTeal-700">{attachment.name}</span>
                                                    <span className="shrink-0 text-softNeutral-400">{attachment.size}</span>
                                                </div>
                                            </div>
                                            <div className="ml-4 shrink-0">
                                                <a
                                                    href={attachment.link}
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                    download
                                                >
                                                    Download
                                                </a>
                                            </div>
                                        </li>
                                    ) )}
                                </ul>
                            </dd>
                        </div>
                    )}
                </dl>
            </div>
        </div>
    );
};
