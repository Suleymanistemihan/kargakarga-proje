import "../styles/Main.css";
import NavBar from "@/layout/NavBar";
import HomeScreen from "@/pages/HomeScreen";

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <HomeScreen />
      </body>
    </html>
  );
}
