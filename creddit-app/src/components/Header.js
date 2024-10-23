import React from "react";

function Header() {
  return (
    <div className="bg-[rgb(26,26,26)] flex flex-row h-20 justify-between align-middle gap-x-3">
      <img
        src="https://preview.redd.it/thanks-i-hate-the-new-reddit-logo-v0-wwybh9goee3c1.png?auto=webp&s=d7ae1281400ec4a7ef999af90046257678b9375f"
        alt="Logo"
        width={200}
        height={100}
        className="p-1"
      ></img>
      <input
        placeholder="Search"
        className="text-left pl-5 mt-2.5 rounded-full bg-gray-800 w-3/4 h-3/4"
      />
      <button className="m-3 w-40 rounded-full p-5 bg-gray-800">Get App</button>
      <button className="m-3 w-40 rounded-full p-5 bg-[rgb(245,71,9)]">Login</button>
      <button>...</button>
    </div>
  );
}

export default Header;
