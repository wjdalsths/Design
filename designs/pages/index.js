import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Link href={"/designs/FlipButton"}>FlipButton</Link>
        <br />
        <Link href={"/designs/DropdownMenu"}>DropdownMenu</Link>
      </div>
    </>
  );
}
