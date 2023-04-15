import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import Table from './Table';
import { SortOrderEnum } from '../enums/sort-order.enum';
import useSort from '../hooks/use-sort';

const SortableTable = (props) => {
    const { config, data } = props;
    const { sortBy, sortOrder, sortedData, generateConfigAndData } = useSort(config, data);

    const getIcons = (label, sortBy, sortOrder) => {
        if (label !== sortBy) {
            return <><GoArrowSmallUp/><GoArrowSmallDown/></>;
        }

        switch (sortOrder) {
            case SortOrderEnum.ASC:
                return <GoArrowSmallUp/>;
            case SortOrderEnum.DESC:
                return <GoArrowSmallDown/>;
            default:
                break;
        }
    };

    const updatedConfig = config.map(column => {
        if (column.sortValue) {
            return {
                ...column,
                header: () => <th className="pointer"
                                  onClick={() => generateConfigAndData(column.label)}>
                    <div className="d-flex align-center">
                        <div className="icons">{getIcons(column.label, sortBy, sortOrder)}</div>
                        <div>{column.label}</div>
                    </div>
                </th>,
            };
        }

        return column;
    });

    return <Table {...props}
                  config={updatedConfig}
                  data={sortedData}/>;
};

export default SortableTable;
