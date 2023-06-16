import React from "react";

const sizeClasses = {
  txtManropeRegular16Gray600: "font-manrope font-normal",
  txtManropeExtraBold24: "font-extrabold font-manrope",
  txtManropeExtraBold36: "font-extrabold font-manrope",
  txtManropeExtraBold48: "font-extrabold font-manrope",
  txtInterRegular16WhiteA700: "font-inter font-normal",
  txtManropeBold64: "font-bold font-manrope",
  txtInterBold16: "font-bold font-inter",
  txtManropeRegular20: "font-manrope font-normal",
  txtManropeExtraBold48Black900: "font-extrabold font-manrope",
  txtManropeExtraBold64: "font-extrabold font-manrope",
  txtManropeRegular24: "font-manrope font-normal",
  txtManropeBold14: "font-bold font-manrope",
  txtManropeRegular16: "font-manrope font-normal",
  txtManropeRegular18WhiteA700: "font-manrope font-normal",
  txtManropeRegular18: "font-manrope font-normal",
  txtManropeMedium18: "font-manrope font-medium",
  txtManropeExtraBold48Gray900: "font-extrabold font-manrope",
  txtManropeMedium18Black900: "font-manrope font-medium",
  txtInterRegular26: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtManropeBold18: "font-bold font-manrope",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
