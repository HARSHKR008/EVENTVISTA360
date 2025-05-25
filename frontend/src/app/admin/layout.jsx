'use client';
import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

const Layout = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        // Check for authentication and admin role
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');

        if (!token || role !== 'admin') {
            router.push('/login');
            return;
        }
    }, [router]);

    return (
        <>
            {children}
        </>
    )
}

export default Layout;