import React, { RefObject, useEffect, useState } from 'react'

interface UseControlPrintAreaProps {
    printAreaRef: RefObject<SVGElement | null>; // printAreaRef SVG elementga ishora qiluvchi ref bo'lishi kerak
}

export default function useControlPrintArea({printAreaRef}: UseControlPrintAreaProps){
    const [printArea, setPrintArea] = useState({ width: 0, height: 0 });
    useEffect(() => {
        if (printAreaRef.current) {
            const rect = printAreaRef.current.getBoundingClientRect();
            setPrintArea({ width: rect.width, height: rect.height });
        }
    }, [setPrintArea]);
    
  return {printArea}
}
