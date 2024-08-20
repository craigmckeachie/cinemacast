import { Toaster } from "react-hot-toast";
import Header from "./Header";
import NavPanel from "./NavPanel";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Header />
      <main className=" d-flex">
        <Toaster
          toastOptions={{
            success: {
              iconTheme: {
                primary: "#0d6efd",
                secondary: "white",
              },
            },
            style: {
              maxWidth: 500,
            },
          }}
        />

        <NavPanel />
        <section className="p-4 w-100">
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default Layout;
