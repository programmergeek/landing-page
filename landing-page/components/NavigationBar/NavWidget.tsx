import React, {useState} from 'react'

export const NavigationWidget: React.FC = () => {
  const [isOpen, toggleMenu] = useState<boolean>(false);

  return (
    <div className={`fixed -bottom-[250px] -right-[250px] w-[500px] h-[500px] z-10`}>
      <button
        className={`${
          !isOpen ? "block" : "hidden"
        } bg-folderYellow p-3 rounded-full absolute top-48 left-48`}
        onClick={() => toggleMenu(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </button>
      <div
        className={`realative bg-folderYellow text-white ${
          isOpen ? "w-[500px] h-[500px]" : "w-0 h-0"
        } rounded-full`}
      >
        <ul className="font-sourceCodePro absolute left-28 top-20 font-semibold">
          {['About Me', 'Projects', 'Skills', 'Contact Me'].map((value) => (
            <li className={`${isOpen ? "" : "hidden"} py-1`}>
                <a href={`#${value}`}>
                    {value}
                </a>
            </li>
          ))}
          <li
            className={`${
              isOpen ? "flex" : "hidden"
            } justify-end cursor-pointer`}
            onClick={() => toggleMenu(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
};
