import Link from "next/link";
import React from "react";

const FurNav = () => {
    return (
        <div style={{ background: "black", color: "white", width: "100%" }}>
            <Link href="https://next.js.org/docs/page/api-reference/components/link"></Link>
            <br />
            <Link href="/">chair</Link>
            <br />
            <Link href="/chair">desk</Link>
            <br />
            <Link href="/desk">table</Link>
            <br />
            <Link href="/table"></Link>
            <hr />
        </div>
    );
};

export default FurNav;
