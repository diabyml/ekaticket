import { ThemeSwitcher } from "@/components/themeSwitcher";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <div className="p-5">
      <ThemeSwitcher />
      <h1>Hello, world</h1>
      <Button color="primary">Save Changes</Button>
    </div>
  );
}
