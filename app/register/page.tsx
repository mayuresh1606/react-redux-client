"use client"

import Image from "next/image";
import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { loginValidation } from "@/validation/login"
import { useFormik } from "formik";
import axios from "axios";

type InitialValues = {
    emailId: string,
    password: string,
    fName: string,
    lName: string
}

export default function New(){
    const initialValues = {
        emailId: "",
        password: "",
        fName: "",
        lName: ""
    }

    const handleSubmit = async ( values: InitialValues ) => {
        console.log(values);
        
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: loginValidation,
        onSubmit: handleSubmit
    });

    return <>
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <Image width={200} height={100} className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          Flowbite    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form onSubmit={formik.handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                      <label htmlFor="fName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                      <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      type="text" name="fName" id="fName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required={true} />
                      {
                        formik.touched.fName && formik.errors.fName && <p className="text-red-500">{formik.errors.fName}</p>
                        }
                  </div>
                  <div>
                      <label htmlFor="lName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                      <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      type="text" name="lName" id="lName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required={true} />
                      {
                        formik.touched.lName && formik.errors.lName && <p className="text-red-500">{formik.errors.lName}</p>
                        }
                  </div>
                  <div>
                      <label htmlFor="emailId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your emailId</label>
                      <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      type="email" name="emailId" id="emailId" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
                      {
                        formik.touched.emailId && formik.errors.emailId && <p className="text-red-500">{formik.errors.emailId}</p>
                        }
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                        {
                          formik.touched.password && formik.errors.password && <p className="text-red-500">{formik.errors.password}</p>
                        }
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create</button>
              </form>
          </div>
      </div>
  </div>
</section>
    </>
}