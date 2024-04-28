import React from "react";
import { Logo } from "./Logo";
import { FaGoogle } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { Button } from "./Button";

/**
 * @param {Object} props
 * @param {string} props.login
 * @param {function} props.handleChange
 * @param {function} props.handleSubmit
 */
// TODO: Add jsdoc types or typescript interfaces for props everywhere
export function Login(props) {
  const { handleSubmit, handleChange, login } = props;

  return (
    <div className="h-[600px] w-[600px] bg-secondarybg mt-6 mx-auto">
      <div className="flex flex-col pt-8">
        <Logo />
        <div className="px-24 py-10">
          <form onSubmit={handleSubmit}>
            <h1 className="text-white font-dmsans font-normal text-2xl">
              Welcome to App
            </h1>
            <div className="flex align-center">
              <p className="text-gray-400 font-dmsans text-sm">New to App?</p>
              <p className="text-highlighter font-dmsans text-sm font-semibold pl-2">
                Create an account
              </p>
            </div>
            <div className="mt-8">
              <label
                className="block text-white font-dmsans text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                className="text-sm border font-dmsans border-gray-700 rounded w-full py-2 px-3 text-gray-400 bg-transparent leading-tight h-14"
                id="email"
                type="text"
                value={login}
                onChange={handleChange}
              />
            </div>
            <div className="mt-12">
              <Button text="Sign In" type="submit" variant="primary" />
            </div>
          </form>
          <div className="flex items-center pt-4">
            <hr className="flex-grow border-t-[1px] border-gray-700" />
            <p className="px-2 text-gray-400 text-sm font-dmsans bg-primarybg/45">
              or sign in with
            </p>
            <hr className="flex-grow border-t-[1px] border-gray-700" />
          </div>
          <div className="flex flex-col items-center pt-8">
            <Button
              Icon={<FaGoogle className="text-xl text-red-400" />}
              text="Google"
              className="mb-4"
              variant="transparent"
            />

            <div className="flex justify-between w-full gap-4">
              <Button
                Icon={<IoLogoFacebook className="text-xl text-copper " />}
                text="Facebook"
                className="w-1/2"
                variant="transparent"
              />

              <Button
                Icon={<FaTwitter className="text-xl text-sky-400" />}
                text="Twitter"
                className="w-1/2"
                variant="transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
