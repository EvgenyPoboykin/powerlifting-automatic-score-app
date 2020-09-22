import React, { memo } from 'react';
import SelectorBox_Logic from './logic';
import { Container, SelectBox, SelectedItem, SelectList, Option, Label } from './style';
import { ISelectorBox } from './interfaces';

const SelectorBox: React.FC<ISelectorBox> = memo(({ selectedOption, items, selectChange }) => {
    const { showItem, wrapperRef, selectedItem, DropDownArrow, selectItem } = SelectorBox_Logic(
        selectedOption,
        selectChange
    );

    return (
        <Container>
            <SelectBox>
                <SelectedItem onClick={DropDownArrow}>{selectedItem.label && selectedItem.label}</SelectedItem>

                {showItem ? (
                    <SelectList ref={wrapperRef}>
                        {items &&
                            items.map((item: any, index: number) => {
                                return (
                                    <Option key={index} onClick={() => selectItem(item)}>
                                        <Label>{item.label}</Label>
                                    </Option>
                                );
                            })}
                    </SelectList>
                ) : null}
            </SelectBox>
        </Container>
    );
});
export default SelectorBox;
