import DesktopNavbar from "@/components/navbar/DesktopNavbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DesktopNavbar />
      {children}
    </>
  );
}

export default Layout;
