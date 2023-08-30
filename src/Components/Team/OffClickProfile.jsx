import ProfileCard from "../UI/ProfileCard";
import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getDownloadURL } from "firebase/storage";
import { useEffect } from "react";

const CardBackdrop = () => {
    return (
        <div className="absolute rounded-lg top-0 h-full w-full opacity-40 bg-black z-30"></div>
    );
};

const OffClickProfile = (props) => {
    var member = props.member;

    const [displayBtn, setDisplayBtn] = useState(false);

    const [imgView, setImgView] = useState(null);

    const updateProfileView = (pInfo) => {
        console.log("Profile Clicked!");
        console.log(pInfo);
        // to bring the backdrop and expanded profile component
        // on display

        props.displayModal(pInfo);
    };

    var showSocialMedia = member.socialMedia.filter(el => el !== '');

    if (showSocialMedia.length > 3)
        showSocialMedia = showSocialMedia.slice(0, 3)


    useEffect(() => {
        async function findImgFromDb() {
            var imgIndex = props.imgList.findIndex((item) => {
                var orderNo = item.fullPath.indexOf(".");
                return (
                    // eslint-disable-next-line eqeqeq
                    item.fullPath.slice(orderNo - 1, orderNo) == props.index + 1
                );
            });
            getDownloadURL(props.imgList[imgIndex]).then((url) => {
                setImgView(url);
            });
        }

        findImgFromDb();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const mouseEventHandler = () => {
    //     setDisplayBtn((prevCond) => !prevCond);
    // };

    console.log("OffClickProfile Comp");
    return (
        <Fragment>
            <ProfileCard
                Card
                // mouseEventHandler={mouseEventHandler}
                hoverAnim={displayBtn}
                styleCard="z-10 relative cursor-default transition-all duration-200 w-[90%] sm:w-[320px] h-[360px] rounded-lg shadow-2xl bg-gray-800"
            >
                <div
                    className={`flex flex-col items-center h-full justify-center`}
                    id="myCard"
                >
                    <div>
                        <img
                            className="object-center object-cover mb-6 w-44 h-44 rounded-full shadow-lg mt-8"
                            src={imgView}
                            alt="team profile"
                        />
                    </div>
                    <h5 className="mb-4 text-xl font-medium text-white">
                        {member.name}
                    </h5>
                    <div className="mb-7 text-base text-gray-500 dark:text-gray-400">
                        {member.clubRole}
                    </div>
                    {displayBtn && <CardBackdrop />}
                    {/* <AnimatePresence> */}
                    {/* {displayBtn && ( */}
                    <motion.ul
                        key="socialMedia"
                        // className="absolute bottom-12 space-x-6 flex z-50"
                        className="space-x-6 flex mb-7"
                    // initial={{ y: 30 }}
                    // animate={{ y: 1 }}
                    // transition={{ duration: 0.2 }}
                    // exit={{ y: 30, opacity: 0 }}
                    >
                        {console.log(showSocialMedia)}
                        {showSocialMedia.length > 0 && showSocialMedia.map((ac) => {
                            return (
                                <li className="active:animate-ping cursor-pointer hover:scale-125 transition-transform duration-300">
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        href={ac}
                                    >
                                        <i className={`mx-2 bi bi-${ac.slice(8, ac.indexOf("."))} text-white`}></i>
                                    </a>
                                </li>
                            )
                        })}
                    </motion.ul>
                    {/* )} */}
                    {/* </AnimatePresence> */}
                    {displayBtn && (
                        <>
                            <motion.button
                                onClick={() => updateProfileView(member)}
                                className="absolute z-50 opacity-100 px-7 py-3 bg-green-800 hover:bg-green-900 text-white font-bold rounded-[10px] text-base"
                                initial={{ y: -50 }}
                                animate={{ y: 1 }}
                                transition={{ duration: 0.2 }}
                            // exit={{ y: -50, opacity: 0 }}
                            >
                                View Profile
                            </motion.button>
                        </>
                    )}
                </div>
            </ProfileCard>
        </Fragment>
    );
};

export default OffClickProfile;
