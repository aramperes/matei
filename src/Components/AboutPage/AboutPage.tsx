import React from "react";
import "./AboutPage.scss";
import MateiLarge from "./Matei-Large.png";
import MateiSmall from "./Matei-Small.png";

export default class AboutPage extends React.Component {
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
                                Born in Montreal, I am currently studying management at Concordia University and
                                improving my web design skills. Heavily influenced by music and technology, I aim to
                                create content that influences daily life.
                            </div>
                        </div>
                        <img src={MateiLarge} className={"MateiLarge"} alt={"Matei"}/>
                        <img src={MateiSmall} className={"MateiSmall"} alt={"Matei"}/>
                    </div>
                    <div className={"Resume"}>
                        <div className={"Section"}>
                            <div className={"Title"}>Education</div>
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
                        <div className={"Section"}>
                            <div className={"Title"}>Work Experience</div>
                            <div className={"Item"}>
                                <div className={"Date"}>2018 - 2020</div>
                                <div className={"Name"}>wavy media</div>
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
}