import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { ListJob } from '../../slices/job.slice';
import { Navigate } from 'react-router-dom';

const JobPost = () => {
    const dispatch = useDispatch();
    const { jobData } = useSelector((x) => x.jobSlice);
    const { user } = useSelector((x) => x.authSlice);
    useEffect(() => {
        fetchJobs()
    }, []);

    function fetchJobs() {
        dispatch(ListJob());
    }

    if (user.user_role === 1) {
        return <Navigate to={'/home'} />
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobData.map((itr, i) => {
                            const { title, description } = itr;
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{title}</td>
                                    <td>{description}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default JobPost
