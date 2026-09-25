import { Navbar } from "./widgets/Navbar";
import { Outlet } from "react-router-dom";

export function Layout() {
    <>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
    </>
}