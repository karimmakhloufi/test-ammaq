import React from "react";

export type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
};
const UserSmallCard = (
  close: boolean,
  { firstname, lastname }: User
): JSX.Element => {
  return (
    <div className={`mt-5 ml-3 grid grid-flow-col ${close ? "pt-2" : "p-2"}`}>
      <img
        className="user-nav-img rounded-full object-cover z-10"
        src="https://cqfd.univ-lyon1.fr/files/2020/04/3-pieuvre-gif.gif"
        alt=""
      />
      <p
        className={`uppercase text-xs text-gray-300 items-end truncate ml-3 self-center ${
          close ? " hidden" : ""
        }`}
      >
        {firstname} {lastname}
      </p>
    </div>
  );
};

export default UserSmallCard;