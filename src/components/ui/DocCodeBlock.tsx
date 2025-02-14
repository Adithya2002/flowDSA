import React from 'react'

const DocCodeBlock = ({ title, subtitle }: {title:string, subtitle:string}) => {
    return (
        <div className="flex text-left flex-col w-full md:w-3/4 mx-auto mt-4">
            {/* Render Title Block only if title exists */}
            {title && (
                <div className="bg-[#D0E9FF] h-1 flex items-center text-black text-lg sm:text-xl md:text-2xl font-quicksand font-medium p-4">
                    {title}
                </div>
            )}
            {/* Subtitle Block */}
            <div className="bg-[#E8F9FD] text-black text-lg sm:text-xl md:text-2xl font-quicksand font-medium p-4">
                {subtitle}
            </div>
        </div>
    );
}

export default DocCodeBlock