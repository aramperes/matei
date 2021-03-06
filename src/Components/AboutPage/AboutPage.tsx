import React from "react";
import "./AboutPage.scss";
import MateiLarge from "./Matei-Large.png";
import MateiSmall from "./Matei-Small.png";

export default class AboutPage extends React.Component<any> {

    private educationRef: React.RefObject<HTMLDivElement>;
    private workRef: React.RefObject<HTMLDivElement>;
    private hasScrolled: boolean = false;

    private gradient: React.RefObject<HTMLImageElement>;

    constructor(props: Readonly<any>) {
        super(props);

        this.onScroll = this.onScroll.bind(this);

        this.educationRef = React.createRef();
        this.workRef = React.createRef();
        this.gradient = React.createRef();
    }

    render() {
        return (
            <div className={"AboutPage"}>
                <div className={"Container"}>
                    <div className={"Intro"}>
                        <div className={"IntroText"}>
                            <div className={"IntroMain"}>
                                Hey, I'm <span className={"Highlight"}>Matei Cheong</span>,
                            </div>
                            <div className={"IntroSub"}>UI designer and student with a passion for music listening,
                                soccer, and soccer.
                            </div>
                            <div className={"IntroSubtext"}>
                                Born in Montreal, I am currently studying graphic design at UQAM and
                                improving my web design skills. Heavily influenced by music and technology, I aim to
                                create content that influences daily life.
                            </div>
                        </div>
                        <img src={MateiLarge} className={"MateiLarge"} alt={"Matei"} ref={this.gradient}/>
                        <img src={MateiSmall} className={"MateiSmall"} alt={"Matei"}/>
                    </div>
                    <div className={"Resume"}>
                        <div className={"Section"} ref={this.educationRef}>
                            <div className={"Title"}>Education</div>
                            <div className={"Item"}>
                                <div className={"Date"}>2020 - 2024</div>
                                <div className={"Name"}>Universit&eacute; du Qu&eacute;bec &agrave;  Montr&eacute;al</div>
                                <div className={"Description"}>
                                    Graphic Design<br/>Bachelor's Degree
                                </div>
                            </div>
                            <div className={"Item"}>         
                                <div className={"Date"}>2017 - 2019</div>
                                <div className={"Name"}>Coll&eacute;gial International Sainte-Anne</div>
                                <div className={"Description"}>
                                    Law, Society, and Justice<br/>Diploma of Collegial Studies
                                </div>
                            </div>
                            <div className={"Item"}>
                                <div className={"Date"}>2012 - 2017</div>
                                <div className={"Name"}>Coll&egrave;ge Sainte-Anne de Lachine</div>
                                <div className={"Description"}>
                                    D&eacute;fiMonde Program<br/>High School Diploma
                                </div>
                            </div>
                        </div>
                        <div className={"Section"} ref={this.workRef}>
                            <div className={"Title"}>Work Experience</div>
                            <div className={"Item"}>
                                <div className={"Date"}>2018 - Present</div>
                                <div className={"Name"}>Wavy Labs</div>
                                <div className={"Description"}>
                                    Co-Founder - UI / UX Design Lead
                                </div>
                            </div>
                            <div className={"Item"}>
                                <div className={"Date"}>2019</div>
                                <div className={"Name"}>Montreal Soccer Fest</div>
                                <div className={"Description"}>
                                    Social Media Management & Graphic Design
                                </div>
                            </div>
                            <div className={"Item"}>
                                <div className={"Date"}>2019</div>
                                <div className={"Name"}>Coop Sainte-Rose-des-Vents (Intern)</div>
                                <div className={"Description"}>
                                    Artist Management & Social Media Management
                                </div>
                            </div>
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
        if (!this.hasScrolled && window.pageYOffset > 150
            && this.educationRef && this.workRef && this.educationRef.current && this.workRef.current) {
            this.hasScrolled = true;
            this.educationRef.current.classList.add("Visible");
            this.workRef.current.classList.add("Visible");
        }
        if (this.gradient && this.gradient.current) {
            const blueness = Math.min(100, window.pageYOffset / 5);
            this.gradient.current.style.background = "linear-gradient(170deg, #8AB4CC " + blueness + "%, rgba(206, 103, 255, 0.5) 100%)";
            this.gradient.current.style.backgroundSize = "92% 95%";
            this.gradient.current.style.backgroundRepeat = "no-repeat";
        }
    }
}