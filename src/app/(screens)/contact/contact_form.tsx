"use client";

import { Formik, useFormik } from "formik";
import { useEffect, useState } from "react";

interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
}

export function ContactForm() {
  const initialValues: Customer = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, handleChange, handleReset, handleBlur, values }) => {
        return (
          <form
            onSubmit={handleSubmit}
            onReset={handleReset}
            className="w-full pt-5"
          >
            <div>
              <div className="flex flex-row gap-2">
                <div className="pt-4 w-full">
                  <label htmlFor="firstName" className="font-semibold '">
                    first name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    placeholder="first name"
                    value={values.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="w-full h-[55px] border-2 rounded-md bg-white p-2"
                  />
                </div>
                <div className="pt-4 w-full">
                  <label htmlFor="lastName" className="font-semibold '">
                    last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    placeholder="last name"
                    value={values.lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="w-full h-[55px] border-2 rounded-md bg-white p-2"
                  />
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <div className="pt-4 w-full">
                  <label htmlFor="email" className="font-semibold '">
                    email
                  </label>
                  <input
                    id="email"
                    name="email"
                    placeholder="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="w-full h-[55px] border-2 rounded-md bg-white p-2"
                  />
                </div>
                <div className="pt-4 w-full">
                  <label htmlFor="phone" className="font-semibold '">
                    phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    placeholder="phone number"
                    value={values.phone}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="w-full h-[55px] border-2 rounded-md bg-white p-2"
                  />
                </div>
              </div>
              <div className="pt-4 w-full">
                <label htmlFor="description" className="font-semibold '">
                  description
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="description"
                  value={values.description}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="w-full h-[100px] border-2 rounded-md bg-white p-2"
                />
              </div>
            </div>
            <div className="flex flex-row gap-3 justify-end">
              <button
                type="reset"
                className="font-semibold text-[20px] mt-5 text-black flex gap-1  border-2  items-center bg-white self-center lg:self-start w-fit py-[10px] px-[64px] lg:py-[10px] "
              >
                Reset
              </button>
              <button
                type="submit"
                className="font-semibold text-[20px] mt-5 text-white flex gap-1 items-center bg-black self-center lg:self-start w-fit py-[12px] px-[64px] lg:py-[12px] "
              >
                Submit
              </button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}
