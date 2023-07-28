import {useState, useMemo} from 'react';

export const usePagination = (totalPages, array) => {           
    useMemo(() => {
        console.log("Calculating...");        
        for (let i = 0; i < totalPages; i++) {
            array.push(i + 1)
        }
    }, [totalPages])
    return array
}