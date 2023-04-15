// import Table from '../components/Table';
import SortableTable from '../components/SortableTable';

const TablePage = () => {
    const data = [
        { name: 'Fruit', color: 'orange', score: 1115 },
        { name: 'Fruit2', color: 'blue', score: 35 },
        { name: 'Fruit3', color: 'green', score: 45 },
        { name: 'Fruit4', color: 'red', score: 55 },
    ];

    const config = [
        {
            label: 'Fruits',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name,
        },
        {
            label: 'Color',
            render: (fruit) => <div className={`color ${fruit.color}`}/>,
        },
        {
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score,
        },
    ];

    const keyFn = (fruit) => fruit.name;

    return <SortableTable data={data}
                          keyFn={keyFn}
                          config={config}/>;
};

export default TablePage;
