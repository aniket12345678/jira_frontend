import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import AddEditModal from '../../components/AddEditModal';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteJob, ListJob } from '../../slices/job.slice';
import { Navigate } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState();
    const { jobData } = useSelector((x) => x.jobSlice);
    const { user } = useSelector((x) => x.authSlice);

    useEffect(() => {
        fetchJobs()
    }, []);

    function fetchJobs() {
        dispatch(ListJob());
    }

    const removeJob = async (data) => {
        if (window.confirm('Do you want to remove the data?')) {
            const response = await dispatch(DeleteJob({ id: data })).unwrap();
            if (response.code === 200) {
                fetchJobs();
            }
        }
    }

    if (user.user_role === 2) {
        return <Navigate to={'/all-jobs'} />
    }

    return (
        <div>
            <Button onClick={() => setShowModal(true)} variant='success'>Add</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobData.map((itr, i) => {
                            const { title, description, _id } = itr;
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{title}</td>
                                    <td>{description}</td>
                                    <td>
                                        <Button onClick={() => removeJob(_id)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <AddEditModal show={showModal} handleClose={() => setShowModal(false)} fetchJobs={fetchJobs} />
        </div>
    )
}

export default Home
