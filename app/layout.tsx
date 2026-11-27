import "./globals.css";
import Header from "./Components/Header";

type HeaderProps = {
  title: string;
};

export default function Rootlayout({children}: LayoutProps<"/">){
  return (
    <html lang="en">
    <body className="min-h-full flex flex-col">
      <Header title=""/>
      {children}
    </body>
    </html>
  )
}