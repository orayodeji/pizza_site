import Link from "next/link";
export default function NavLink({
  text,
  path,
}: {
  text: string;
  path: string;
}) {
  return (
    <div className="  md:pl-8 pl-6 lg:pl-16 2xl:pl-28 font-normal">
      <Link
        href={path}
        className="hover:font-bold lg:text-lg xl:text-lg 2xl:text-xl md:text-base"
      >
        {text}
      </Link>
    </div>
  );
}
