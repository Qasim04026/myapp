import Link from "next/link";
function Navbar() {
    return(
        <div style={{background: "black",color: "white", width: "100%"}}>
            <Link href='https://next.js.org'>
         NextJs Link Component
            </Link>
            <br />
            <Link href="/">
               Home
               </Link> <br />
               <Link href="/about">
               About
               </Link> <br />
               <Link href="/bbq">
               BBQ
               </Link> <br />
               <Link href="/about/nestedroute">
               Nested Route
               </Link>
               
               <hr />
            

            
            

        </div>
    )
}
export default Navbar