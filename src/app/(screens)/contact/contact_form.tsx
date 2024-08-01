"use client";

import { Formik } from "formik";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

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

  let [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors: Partial<Customer> = {};
        if (!values.firstName) {
          errors.firstName = "Please enter the first name";
        }
        if (!values.lastName) {
          errors.lastName = "Please enter the last name";
        }
        if (!values.email) {
          errors.email = "Please enter the valid email";
        }
        if (!values.phone) {
          errors.phone = "Please enter the valid phone number";
        }
        if (!values.description) {
          errors.description = "Please enter the details about the project.";
        }
        return errors;
      }}
      onSubmit={async (values) => {
        console.log(values);

        setIsSubmitting(true);
        await fetch("http://localhost:3000/api/client", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then(async (response) => {
            if (!response.ok) {
              const errorText = await response.text();
              throw new Error(`Error: ${response.status} ${errorText}`);
            }
            return response.json();
          })
          .then((result) => {
            console.log(result);
            toast.success("Form Submitted Successfully");
          })
          .catch((error) => console.error(error));

        setIsSubmitting(false);
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleReset,
        handleBlur,
        errors,

        values,
      }) => {
        return (
          <form
            onSubmit={handleSubmit}
            onReset={handleReset}
            className="w-full pt-5"
          >
            <ToastContainer />
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
                  {errors.firstName && (
                    <p className="text-16 text-red">{errors.firstName}</p>
                  )}
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
                  {errors.lastName && (
                    <p className="text-16 text-red">{errors.lastName}</p>
                  )}
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
                  {errors.email && (
                    <p className="text-16 text-red">{errors.email}</p>
                  )}
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
                  {errors.phone && (
                    <p className="text-16 text-red">{errors.phone}</p>
                  )}
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
                {errors.description && (
                  <p className="text-16 text-red">{errors.description}</p>
                )}
              </div>
            </div>
            <div className="flex flex-row gap-3 justify-end">
              <button
                type="reset"
                className="font-semibold text-[20px] mt-5 text-black flex gap-1  border-2  items-center bg-white self-center lg:self-start w-fit py-[10px] px-[64px] lg:py-[10px] "
              >
                Reset
              </button>
              {isSubmitting ? (
                <button
                  type="button"
                  className="font-semibold text-[20px] mt-5 text-white flex gap-1 items-center bg-black self-center lg:self-start w-fit py-[12px] px-[64px] lg:py-[12px] "
                >
                  Submitting...
                </button>
              ) : (
                <button
                  type="submit"
                  className="font-semibold text-[20px] mt-5 text-white flex gap-1 items-center bg-black self-center lg:self-start w-fit py-[12px] px-[64px] lg:py-[12px] "
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        );
      }}
    </Formik>
  );
}
