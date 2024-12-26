import React, { useState } from 'react';
import axios from 'axios';
import { useTheme } from "next-themes";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('');
    const { theme } = useTheme();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        // Clear error for this field when user starts typing
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const validateForm = () => {
        let isValid = true;
        let newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
            isValid = false;
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
            isValid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
            isValid = false;
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
            isValid = false;
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
    
        setStatus('Sending...');
        try {
            const response = await axios.post('/api/send-email', formData);
            if (response.data.success) {
                setStatus('Message sent successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                });
            } else {
                setStatus('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('Failed to send message. Please try again.');
        }
    };
    

    return (
        <div className={`flex justify-center items-center w-full py-12 lg:py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                <form onSubmit={handleSubmit}>
                    <div className={`w-full bg-${theme === 'dark' ? 'gray-800' : 'white'} p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl`}>
                        <h1 className="font-bold uppercase text-4xl">Send us a message</h1>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                            <input
                                name="firstName"
                                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="First Name*"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}

                            <input
                                name="lastName"
                                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Last Name*"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}

                            <input
                                name="email"
                                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="email"
                                placeholder="Email*"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                            <input
                                name="phone"
                                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="tel"
                                placeholder="Phone*"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>
                        <div className="my-4">
                            <textarea
                                name="message"
                                placeholder="Message*"
                                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                        </div>
                        <div className="my-2 w-1/2 lg:w-2/4">
                            <button
                                type="submit"
                                className="uppercase text-sm font-bold tracking-wide bg-blue-600 hover:bg-blue-700 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                            >
                                Send Message
                            </button>
                        </div>
                        {status && <p className={`mt-4 ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{status}</p>}
                    </div>
                </form>
                <div className={`w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto ${theme === 'dark' ? 'bg-gray-900' : 'bg-blue-600'} rounded-2xl`}>
                    <div className="flex flex-col text-white">
                        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                        <p className="text-gray-400 mb-4">
                            <strong>Address:</strong> Ilo Awela, Ota, Ogun State
                        </p>
                        <p className="text-gray-400 mb-4">
                            <strong>Phone:</strong> +91 9281443441
                        </p>
                        <p className="text-gray-400 mb-8">
                            <strong>Email:</strong> info@saola.in
                        </p>
                        <div className="flex space-x-4">
                            <Link href="https://www.facebook.com/saolainnovations/" target="_blank">
                                <FacebookOutlinedIcon className="hover:text-gray-300 transition-colors" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/saolainnovations/" target="_blank">
                                <LinkedInIcon className="hover:text-gray-300 transition-colors" />
                            </Link>
                            <Link href="https://twitter.com/skillscrolls/" target="_blank">
                                <TwitterIcon className="hover:text-gray-300 transition-colors" />
                            </Link>
                            <Link href="https://www.instagram.com/saolainnovations/" target="_blank">
                                <InstagramIcon className="hover:text-gray-300 transition-colors" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;