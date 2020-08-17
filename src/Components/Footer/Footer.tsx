import React from "react";
import "./Footer.scss";
import Twitter from "./Twitter.png";
import Dribble from "./Dribble.png";

export default class Footer extends React.Component {
    render() {
        return (
            <div className={"Footer"}>
                <div className={"FooterContainer"}>
                    <div className={"EmailParent"}>
                        <div className={"EmailTitle"}>Get in touch</div>
                        <div className={"Email"}><a href={"mailto:matei.cheong@wavy.fm"}>matei.cheong@wavy.fm</a></div>
                    </div>
                    <div className={"SocialParent"}>
                        <a href={"https://twitter.com/MattHeyMc"} className={"Twitter"} target={"_blank"} title={"Twitter"}>
                            <img src={Twitter} alt={"twitter"}/>
                        </a>
                        <a href={"https://dribbble.com/mateicheong"} className={"Dribble"} target={"_blank"} title={"Dribbble"}>
                            <img src={Dribble} alt={"dribbble"}/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}