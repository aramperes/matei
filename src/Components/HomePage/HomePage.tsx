import React from "react";
import "./HomePage.scss";
import Canada from "./Canada.png";
import Matei from "./Matei.png";
import MateiSmall from "./Matei-Small.png";
import WavyScreenshot from "./WavyScreenshot.png";
import WavyLogo from "./WavyLogo.png";
import Arrow from "./Arrow.png";

export default class HomePage extends React.Component<any> {
    private screenshotGradient: React.RefObject<HTMLImageElement>;
    private bubbleBlueness: number;

    constructor(props: Readonly<any>) {
        super(props);

        this.onScroll = this.onScroll.bind(this);
        this.screenshotGradient = React.createRef();
        this.bubbleBlueness = 1;
    }

    render() {
        return (
            <div className={"HomePage"}>
                <div className={"HeaderParent"}>
                    <svg width="502" height="518" viewBox="0 0 502 518" fill="none" xmlns="http://www.w3.org/2000/svg" className={"MateiBubbleBg"}>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M223.12 28.9815C292.922 20.3063 368.993 22.9288 418.915 72.481C468.125 121.326 470.583 196.824 461.46 265.557C452.879 330.2 423.273 388.515 371.672 428.386C313.944 472.991 241.948 511.402 172.602 488.749C103.216 466.083 71.9255 391.221 47.4202 322.464C23.5063 255.366 4.39362 180.568 40.9825 119.451C77.6173 58.2582 152.344 37.7778 223.12 28.9815Z"
                              fill="url(#paint0_linear)"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="410.418" y1="391.911" x2="198.02" y2="204.606"
                                            gradientUnits="userSpaceOnUse">
                                <stop stopColor="#8AB4CC"/>
                                <stop offset={this.bubbleBlueness} stopColor="#CE67FF" stopOpacity="0.5"/>
                                <stop offset="1" stopColor="#CE67FF" stopOpacity="0.5"/>
                            </linearGradient>
                        </defs>
                    </svg>

                    <img src={Matei} className={"MateiBubble"} alt={""}/>
                    <div className={"Hero"}>
                        <div className={"HeroContent"}>
                            <div className={"HeroTitle"}>Matei Cheong</div>
                            <div className={"HeroSub"}>
                                <div>UI Design - Montreal, Canada</div>
                                <img src={Canada} alt={""}/>
                            </div>
                        </div>
                        <img src={MateiSmall} className={"MateiSmallBubble"} alt={""}/>
                    </div>
                </div>
                <div className={"WavyParent"}>
                    <div className={"WavyGroup"}>
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a href={"https://wavy.fm"} target={"_blank"}>
                            <img src={WavyScreenshot} className={"WavyScreenshot"} alt={"wavy.fm homepage"}
                                 ref={this.screenshotGradient}/>
                        </a>
                        <div className={"WavyDescriptionParent"}>
                            <img src={WavyLogo} className={"WavyLogo"} alt={"wavy.fm"}/>
                            <div className={"WavyDescription"}>
                                <span>Music social media platform.&nbsp;</span>
                                <div className={"LineBreak"}/>
                                <span>Track music and share with friends.</span>
                            </div>
                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                            <a href={"https://wavy.fm"} target={"_blank"}>
                                <img src={Arrow} alt={""} className={"Arrow"}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(): void {
        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount(): void {
        window.addEventListener('scroll', this.onScroll);
    }

    onScroll(event: Event) {
        if (this.screenshotGradient && this.screenshotGradient.current) {
            let blueness = 100;
            if (window.pageYOffset > 200) blueness = 100 - (window.pageYOffset - 200) / 5;
            this.screenshotGradient.current.style.background = "linear-gradient(250deg, #8AB4CC " + blueness + "%, rgba(206, 103, 255, 0.5) 100%)";
            this.screenshotGradient.current.style.backgroundRepeat = "no-repeat";
            this.screenshotGradient.current.style.backgroundSize = "94% 80%";
            this.screenshotGradient.current.style.backgroundPositionX = "85%";
            this.screenshotGradient.current.style.backgroundPositionY = "80%";
        }

        // bubble
        this.bubbleBlueness = 1 - (window.pageYOffset / 600);
        this.forceUpdate();
    }
}