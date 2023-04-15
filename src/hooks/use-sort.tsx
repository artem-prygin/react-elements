import { useState } from 'react';
import { SortOrderEnum } from '../enums/sort-order.enum';

const useSort = (config, data) => {
    const [sortedData, setSortedData] = useState(data);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const generateSortedData = (label: string, order: SortOrderEnum) => {
        const { sortValue } = config.find(column => column.label === label);
        const updatedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);
            const reverseOrder = order === SortOrderEnum.ASC
                ? 1
                : -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            }

            return (valueA - valueB) * reverseOrder;
        });
        setSortedData(updatedData);
    };

    const generateConfigAndData = (label: string) => {
        if (label !== sortBy) {
            setSortOrder(SortOrderEnum.ASC);
            setSortBy(label);
            generateSortedData(label, SortOrderEnum.ASC);
            return;
        }

        switch (sortOrder) {
            case null:
                setSortOrder(SortOrderEnum.ASC);
                setSortBy(label);
                generateSortedData(label, SortOrderEnum.ASC);
                break;
            case SortOrderEnum.ASC:
                setSortOrder(SortOrderEnum.DESC);
                setSortBy(label);
                generateSortedData(label, SortOrderEnum.DESC);
                break;
            case SortOrderEnum.DESC:
                setSortOrder(null);
                setSortBy(null);
                setSortedData(data);
                break;
            default:
                break;
        }
    };

    return {
        sortOrder,
        sortBy,
        sortedData,
        generateConfigAndData,
    }
};

export default useSort;
