import React from "react";
import "./HomePage.scss";
import Canada from "./Canada.png";
import Matei from "./Matei.png";
import WavyScreenshot from "./WavyScreenshot.png";
import WavyLogo from "./WavyLogo.png";
import Arrow from "./Arrow.png";

export default class HomePage extends React.Component {
    render() {
        return (
            <div className={"HomePage"}>
                <div className={"HeaderParent"}>
                    <img src={Matei} className={"MateiBubble"} alt={""}/>
                    <div className={"Hero"}>
                        <div className={"HeroContent"}>
                            <div className={"HeroTitle"}>Matei Cheong</div>
                            <div className={"HeroSub"}>
                                <div>UI Design - Montreal, Canada</div>
                                <img src={Canada} alt={""}/>
                            </div>
                        </div>
                        <img src={Matei} className={"MateiSmallBubble"} alt={""}/>
                    </div>
                </div>
                <div className={"WavyParent"}>
                    <div className={"WavyGroup"}>
                        <a href={"https://wavy.fm"} target={"_blank"}>
                            <img src={WavyScreenshot} className={"WavyScreenshot"} alt={"wavy.fm homepage"}/>
                        </a>
                        <div className={"WavyDescriptionParent"}>
                            <img src={WavyLogo} className={"WavyLogo"} alt={"wavy.fm"}/>
                            <div className={"WavyDescription"}>
                                <span>Music social media platform.&nbsp;</span>
                                <div className={"LineBreak"}/>
                                <span>Track music and share with friends.</span>
                            </div>
                            <a href={"https://wavy.fm"} target={"_blank"}>
                                <img src={Arrow} alt={""} className={"Arrow"}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}