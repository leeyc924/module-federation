import '../../tailwind.css';

export interface NavbarProps {}

const Navbar = () => {
  return (
    <ul className="flex gap-1">
      <li className="flex justify-center items-center border-solid border-b-2">
        <a href="https://www.naver.com">네이버</a>
      </li>
      <li className="flex justify-center items-center border-solid border-b-2">
        <a href="https://google.com">구글</a>
      </li>
      <li className="flex justify-center items-center border-solid border-b-2">
        <a href="https://www.daum.net">다음</a>
      </li>
    </ul>
  );
};

export default Navbar;
