import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import AddModal from './AddModal';

const Dummy = () => {
    let i = 1;
    const [data, setData] = useState([
        { task: 'eating' },
        { task: 'bathing' },
        { task: 'cyle' },
    ]);
    const [modal, showModal] = useState(false);
    const deleteItem = (params) => {
        if (window.confirm("Do you want to remove the record?")) {
            const storedData = [...data];
            const newData = storedData.filter((x, i) => i !== params);
            setData(newData); 
        }
    }
    const saveData = (params) => {
        const storedData = [...data, { task: params }];
        setData(storedData);
        showModal(false);
    }
    const addTasks = (params) => {
        showModal(params)
    }
    return (
        <div>
            <Button onClick={() => addTasks(true)}>Add</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tasks</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((itr, index) => {
                            const { task } = itr;
                            return (
                                <tr key={task + index}>
                                    <td>{i++}</td>
                                    <td>{task}</td>
                                    <td>
                                        <Button>Edit</Button>
                                        <Button onClick={() => deleteItem(index)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>

            <AddModal show={modal} handleClose={() => showModal(false)} saveData={saveData} />
        </div>
    )
}

export default Dummy
