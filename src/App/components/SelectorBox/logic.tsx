import React, { useState, useRef, useCallback, useEffect } from 'react';

const SelectorBox_Logic = (selectedOption: any | {}, selectChange: (tem: any | {}) => void) => {
    const [showItem, SetShowItem] = useState<boolean>(false);
    const wrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const [selectedItem, SetSelectedItem] = useState<any>({});

    const DropDownArrow = () => {
        SetShowItem(!showItem);
    };

    const selectItem = (item: any | {}) => {
        SetShowItem(false);
        SetSelectedItem(item);
        selectChange(item);
    };

    const handleClickOutside = useCallback(
        (e: MouseEvent) => {
            if ((wrapperRef.current! as any) && !(wrapperRef.current! as any).contains(e.target)) {
                SetShowItem(false);
            }
        },
        [wrapperRef, SetShowItem]
    );

    useEffect(() => {
        SetSelectedItem(selectedOption);
    }, [SetSelectedItem, selectedOption]);

    useEffect(() => {
        if (showItem) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            if (showItem) {
                document.removeEventListener('click', handleClickOutside);
            }
        };
    }, [showItem, handleClickOutside]);

    return { showItem, wrapperRef, selectedItem, DropDownArrow, selectItem };
};

export default SelectorBox_Logic;
