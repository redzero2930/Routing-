export default function Navbar() {

 

    return <nav className="nav">
        <a className="site-title" href="/">Site name</a>

        <ul>
           <CustomLink href="/pricing">Pricing</CustomLink>
           <CustomLink href="/about">About</CustomLink>
        </ul>
    </nav>
}

function CustomLink({href, children, ...props}) {
    const path = window.location.pathname;
    return(
    <li className={path === href ? "active" : ""}>
        <a href={href} {...props}>{children}</a>    
    </li>
    )
    
}