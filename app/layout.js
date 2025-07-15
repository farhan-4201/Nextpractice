import Navbar from "../components/Navbar"
export default function rootlayout({children}){
  return(
    <html>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}