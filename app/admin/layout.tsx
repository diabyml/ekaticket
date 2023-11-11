import DesktopNavbar from "@/components/navbar/DesktopNavbar";
import AdminRoleProvider from "./components/AdminRoleProvider";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AdminRoleProvider>
        <DesktopNavbar />
        {children}
      </AdminRoleProvider>
    </>
  );
}

export default Layout;
