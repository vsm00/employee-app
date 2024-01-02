import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './Read.css'



const Read = () => {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
                .then((response) => {
                    setAPIData(response.data);
                })
        
    }, [])

    return (
        <div >
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody>
                {APIData.map((data) => {
                    return (
                    <tr>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                    </tr>
                )})}
            </tbody>
        </table>
        </div>
    )
}
export default Read
