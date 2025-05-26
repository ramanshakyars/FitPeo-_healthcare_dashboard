import { useEffect, useState } from 'react';
import './SideNavbar.css';

function SideNavbar() {

    const [menuItems, setMenuItems] = useState([]);


    useEffect(() => {
        fetch("/SideNavbar.json")
            .then(response => response.json())
            .then(data => setMenuItems(data))
            .catch(error => console.error("Fetch this error", error)
            )     
    },
    
    []);

    return (
        <div className="sidenav">
            <h2>Side Navbar</h2>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.link}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SideNavbar;
