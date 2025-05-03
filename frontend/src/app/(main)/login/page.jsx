'use client';
import Navbar from '@/components/Navbar';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
    // Define validation schema with Yup
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required')
    });

    // Initialize Formik
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: (values, { setSubmitting, resetForm }) => {
            console.log('Form submitted with values:', values);

            axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/authenticate`, values)
                .then((result) => {
                    resetForm();
                    toast.success('Login successful!');
                }).catch((err) => {
                    setSubmitting(false);
                    console.log(err);
                    toast.error('Login failed!');
                });
        }
    });

    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
            <div className="w-full max-w-md px-6">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 transition-all duration-500 ease-in-out hover:scale-105">
                    <div className="text-center mb-6">
                        <h2 className="text-4xl font-bold text-gray-800">Welcome Back</h2>
                        <p className="text-gray-600 mt-2">Log in to your account</p>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                        <div>
                            <label className="block mb-1 text-gray-800 font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                className={`w-full px-4 py-3 rounded-lg text-gray-700 bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-md text-lg ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className="mt-1 text-sm text-red-500">{formik.errors.email}</div>
                            )}
                        </div>

                        <div>
                            <label className="block mb-1 text-gray-800 font-medium">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="••••••••"
                                className={`w-full px-4 py-3 rounded-lg text-gray-700 bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-md text-lg ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.password && formik.errors.password && (
                                <div className="mt-1 text-sm text-red-500">{formik.errors.password}</div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg shadow-lg hover:opacity-90 transition-all transform hover:scale-105"
                            disabled={formik.isSubmitting}
                        >
                            {formik.isSubmitting ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-800">Or log in with</p>
                        <div className="flex justify-center mt-4 space-x-4">
                            <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-blue-500 transition">
                                Facebook
                            </button>
                            <button className="bg-red-600 text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-red-500 transition">
                                Google
                            </button>
                        </div>
                    </div>

                    <p className="mt-6 text-center text-gray-800 text-sm">
                        Don't have an account?{" "}
                        <a
                            href="/signup"
                            className="underline font-semibold hover:text-gray-600"
                        >
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
