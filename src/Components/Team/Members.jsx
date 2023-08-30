import { Fragment, useEffect } from "react";
import { teamData } from "./TechzTeamInfo/teamInfo";
// import OffClickProfile from "./OffClickProfile";
import { fetchImagesFromFirebase } from "./Team_Images/teamImagesFirebaseStore";
import { useState } from "react";
import TeamWrapper from "./TeamWrapper";

const Members = (props) => {
    console.log("Members Comp");
    const coreTeamDetails = teamData.coreTeamMembers;
    const domainManagerDetails = teamData.domainManagers;
    const graphicsDesignersDetails = teamData.graphicsDesigners;
    const techTeamDetails = teamData.techTeam;
    const magazineTeam = teamData.magazineHead;

    const [imgList, setImgList] = useState({ list: [], isLoading: true });
    const [dMimgList, setDmImgList] = useState({ list: [], isLoading: true });
    const [gDimgList, setgDImgList] = useState({ list: [], isLoading: true });
    const [techImgList, setTechImgList] = useState({ list: [], isLoading: true });
    const [magazineImgList, setMagazineImgList] = useState({ list: [], isLoading: true });

    useEffect(() => {
        fetchImagesFromFirebase("BoardTeam/").then((listOfImg) => {
            setImgList({ list: [...listOfImg], isLoading: false });
        });

        fetchImagesFromFirebase("DomainManagers/").then((listOfImg) => {
            setDmImgList({ list: [...listOfImg], isLoading: false });
        });

        fetchImagesFromFirebase("GraphicsDesigners/").then((listOfImg) => {
            setgDImgList({ list: [...listOfImg], isLoading: false });
        });

        fetchImagesFromFirebase("TechTeam/").then((listOfImg) => {
            setTechImgList({ list: [...listOfImg], isLoading: false });
        });

        fetchImagesFromFirebase("magazineTeam/").then((listOfImg) => {
            setMagazineImgList({ list: [...listOfImg], isLoading: false });
        });
    }, []);

    return (
        <Fragment>
            <TeamWrapper
                imgList={imgList}
                heading='Board Members'
                teamMemberDetails={coreTeamDetails}
                displayModal={props.displayModal}
            />

            <TeamWrapper
                imgList={dMimgList}
                heading='Domain Managers'
                teamMemberDetails={domainManagerDetails}
                displayModal={props.displayModal}
            />

            {/* <TeamWrapper 
                imgList={gDimgList}
                heading='Graphics & Content Team'
                teamMemberDetails={graphicsDesignersDetails}
                displayModal={props.displayModal}
            />

            <TeamWrapper 
                imgList={techImgList}
                heading='Tech Team'
                teamMemberDetails={techTeamDetails}
                displayModal={props.displayModal}
            />

            <TeamWrapper 
                imgList={magazineImgList}
                heading='Magazine'
                teamMemberDetails={magazineTeam}
                displayModal={props.displayModal}
            /> */}

            <div className="sm:px-10 mb-20">
                <h1 className="text-center cursor-pointer hover:text-emerald-400 hover:decoration-white duration-200 mb-9 text-3xl sm:text-5xl underline underline-offset-8 decoration-emerald-400">
                    <a
                        href="https://drive.google.com/file/d/1uzCzVDaAVNfvvJhLr6QJCJOZzYPyaHCF/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Click to view Other Members
                    </a>
                </h1>
            </div>
        </Fragment>
    );
};

export default Members;
