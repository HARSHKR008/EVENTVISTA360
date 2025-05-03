'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageVenue = () => {

    const [venueList, setVenueList] = useState([]);

    const fetchVenues = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/venue/getall`);
        const data = res.data;
        console.table(data);
        setVenueList(data);
    };

    useEffect(() => {
      fetchVenues();
    }, []);

    const deleteVenue = async (id) => {
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/venue/delete/${id}`);
      toast.success('User deleted successfully');
      fetchVenues();
    }

    return (
        <div>
            <div className='container mx-auto py-10'>
                <h1 className='text-center font-bold text-4xl'>Manage Venues</h1>

                <table className='mt-5 w-full'>
                    <thead className='border'>
                        <tr>
                            <th className='p-3'>Address</th>
                            <th className='p-3'>Name</th>
                            <th className='p-3'>Capacity</th>
                            <th className='p-3'>CreatedAt</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        venueList.map((venue) => {
                          return <tr key={venue._id}>
                            <td className='p-3'>{venue.address?.city}</td>
                            <td className='p-3'>{venue.name}</td>
                            <td className='p-3'>{venue.capacity}</td>
                            <td className='p-3'>{venue.createdAt}</td>
                            <button onClick={() => {deleteVenue(venue._id)}} className='bg-red-500 text-white rounded p-3'>
                              Delete
                            </button>
                          </tr>
                        })
                      }

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ManageVenue;