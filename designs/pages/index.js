import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Link href={"/designs/FlipButton"}>FlipButton</Link>
        <br />
        <Link href={"/designs/DropdownMenu"}>DropdownMenu</Link>
        <br />
        <Link href={"/designs/AnimatedCubes"}>AnimatedCubes</Link>
        <br />
        <Link href={"/designs/NavigationBar"}>NavigationBar</Link>
      </div>
    </>
  );
}
