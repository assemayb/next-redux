import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link href="/">
        <a>Index Page</a>
      </Link>
      <Link href="/ssg">
        <a>ssg</a>
      </Link>
      <Link href="/ssr">
        <a>ssr</a>
      </Link>

      <style jsx>
        {`
            nav {
                background-color: #DDD;
            }
            a {
                margin-right: 25px;
                font-size: 20px;
                color: cadetBlue
            }
        `}
      </style>

    </nav>
  );
};

export default Nav;

