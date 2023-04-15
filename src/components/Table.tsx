import { Fragment } from 'react';
import { TableInterface } from '../interfaces/table.interface';
import '../styles/table.scss';

const Table = ({ data, config, keyFn }: TableInterface) => {
    const renderedHeaders = config.map(column => {
        return (column.header && <Fragment key={column.label}>{column.header()}</Fragment>) || <th key={column.label}>{column.label}</th>;
    });

    const renderedRows = data.map(item => {
        return (
            <tr className="row"
                key={keyFn(item)}>
                {config.map((column, index) => <td key={index}>{column.render(item)}</td>)}
            </tr>
        );
    });

    return <table>
        <thead>
            <tr className="row">{renderedHeaders}</tr>
        </thead>
        <tbody>{renderedRows}</tbody>
    </table>;
};

export default Table;
