import { Link } from 'react-router-dom';
export default function RoundedButton({ link }) {
  return (
    <Link to={link}>
      <button className="arrow-button  bg-gray-900 text-white rounded-full w-12 h-12  items-center justify-center hover:bg-gray-800">
        ➜
      </button>
    </Link>
  );
}
