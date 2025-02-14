import React from 'react'
import DocCodeBlock from '@/components/ui/DocCodeBlock'

const DocumentationPageArray = () => {
    return (
        <main className='w-full overflow-x-hidden text-black font-quicksand bg-background-primary h-screen pt-6 '>
            <div className='p-12 flex flex-col items-center sm:px-20 lg:px-40'>
                <div className="w-12 h-12 text-center flex border items-center justify-center  text-xl font-bold rounded-full">
                    1
                </div>
                <h1 className='mt-4 text-center font-raleway text-2xl lg:text-5xl'>Array</h1>
                <p className='font-medium mt-8'>
                    Think of an array like a row of consecutive lockers in a school. Each locker has a number (index), and inside each locker, you can store exactly one item. If you want to check what is present in locker number 4, you only open locker number 4.
                </p>
                <p className='font-semibold mt-4'> In technical terms,
                    An array is a fixed-size collection of elements, stored contiguously (right next to each other) in memory.
                    This makes accessing any element super fast because the computer can instantly jump to it using the index.</p>
                <DocCodeBlock title='Java' subtitle='hello world' />


            </div>

        </main>
    )
}

export default DocumentationPageArray