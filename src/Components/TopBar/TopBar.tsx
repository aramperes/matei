import React from "react";
import "./TopBar.scss";
import logo from "./Logo.png";
import {Link, NavLink} from "react-router-dom";

export default class TopBar extends React.Component {
    render() {
        return (
            <div className={"TopBar"}>
                <div className={"TopBarContainer"}>
                    <div className={"AppTitleGroup"}>
                        <Link to={"/"} className={"TitleLinkParent"}>
                            <img src={logo} className={"AppLogo"} alt={""}/>
                            <div className={"AppTitle NoMobile"}>Matei Cheong</div>
                        </Link>
                    </div>
                    <div className={"LinksGroup"}>
                        <NavLink to={"/"} exact activeClassName={"ActiveLink"} className={"NavLink Home"}>Home</NavLink>
                        <NavLink to={"/about"} exact activeClassName={"ActiveLink"}
                                 className={"NavLink"}>About</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}