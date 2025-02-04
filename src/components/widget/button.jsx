import { HiOutlineArrowRight } from 'react-icons/hi';

export function Button({ link, name }) {
  return (
    <a
      href={link}
      className="bg-gray-900 text-white py-2 text-sm px-3 justify-center rounded-lg flex w-36 hover:bg-gray-600 border border-white border-spacing-1"
    >
      {name}
      <HiOutlineArrowRight className="ml-2 h-5 w-5" />
    </a>
  );
}
