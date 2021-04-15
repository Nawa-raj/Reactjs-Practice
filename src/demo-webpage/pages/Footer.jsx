import React from "react";

const Footer = () => {
  const preYear = new Date().getFullYear();
  //   console.log(preYear);
  return (
    <>
      <footer className="bg-light text-center py-2">
        <p className="pt-3">
          &copy; All Right Reaserved | Terms & Condition @ {preYear}
        </p>
      </footer>
    </>
  );
};

export default Footer;
