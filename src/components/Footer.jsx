import React from 'react'

import {
    FaTwitterSquare,
    FaInstagram,
    FaFacebookF,
    FaReddit,
    FaLinkedin

} from "react-icons/fa";

const Footer = () => {
    return (
        <div className='max-w-[1240px] py-16 mx-auto px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='font-bold text-green-600 text-3xl'>J!GAR</h1>
                <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam est molestias fugiat?</p>

                <div className='flex justify-between md:w-[70%] my-6'>
                    <FaTwitterSquare size={30} />
                    <FaInstagram size={30} />
                    <FaFacebookF size={30} />
                    <FaReddit size={30} />
                    <FaLinkedin size={30} />
                </div>

            </div>

            <div className='lg:col-span-2 flex justify-between'>
                <div>
                    <h6 className="font-medium text-gray">Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytic</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insight</li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-medium text-gray">Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>Api Status</li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-medium text-gray">Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Press</li>
                        <li className='py-2 text-sm'>Careers</li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-medium text-gray">Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>Claims</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li>
                    </ul>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Footer