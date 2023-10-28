import Nav from "@/components/mainNav/Nav";
import "../globals.css";

export const metadata = {
    title: "comma ride",
    description: "comma ride delivery",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Nav />
                {children}
            </body>
        </html>
    );
}
