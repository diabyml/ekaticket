import { ThemeSwitcher } from "@/components/themeSwitcher";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-5 flex space-x-4">
      <p>Ekaticket</p>
      <ThemeSwitcher />
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
