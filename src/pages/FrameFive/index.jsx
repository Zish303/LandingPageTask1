import React from "react";

import { Text } from "components";

const FrameFivePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope gap-[50px] items-start justify-center mx-auto p-[81px] md:px-10 sm:px-5 w-full">
        <Text
          className="leading-[82.00px] mt-1 md:text-5xl text-[64px] text-black-900 w-[67%] sm:w-full"
          size="txtManropeExtraBold64"
        >
          Use Dummy text in whole UI{" "}
        </Text>
        <div className="flex flex-col font-inter items-center max-w-[1002px] mb-[31px] mx-auto w-full">
          <Text
            className="leading-[40.00px] md:text-2xl sm:text-[22px] text-[26px] text-black-900 w-full"
            size="txtInterRegular26"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </div>
      </div>
    </>
  );
};

export default FrameFivePage;
