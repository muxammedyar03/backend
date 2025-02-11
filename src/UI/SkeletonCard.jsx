import React from 'react'

function SkeletonCard({themeClass,}) {
  return (
    <div  className={`rounded-3xl shadow-xl overflow-hidden card relative h-[50vh] lg:h-[60vh] ${themeClass.secondaryBg} animate-pulse`}>
        <div className={`w-full h-full ${themeClass.card}`}></div>
        {/* Skeleton Text va Buttonlar */}
        <div className='flex justify-between gap-5 w-full absolute items-end px-3 bottom-0 py-3 z-10'>
            {/* Skeleton Title */}
            <div className="flex_col gap-2 flex-1">
            <div className={`h-5 rounded-xl w-1/2 ${themeClass.input}`}></div>
            <div className={`h-5 rounded-xl w-full ${themeClass.input}`}></div>
            </div>
            
            {/* Skeleton Button */}
            <div className={`h-10 rounded-full w-16 ${themeClass.input}`}></div>
        </div>
    </div>
  )
}

export default SkeletonCard