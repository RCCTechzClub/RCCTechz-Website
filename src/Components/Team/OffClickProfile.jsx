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
    var coreMember = props.coreMember;

    const [displayBtn, setDisplayBtn] = useState(false);

    const [imgView, setImgView] = useState(null);

    const updateProfileView = (pInfo) => {
        console.log("Profile Clicked!");
        console.log(pInfo);
        // to bring the backdrop and expanded profile component
        // on display

        props.displayModal(pInfo);
    };

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

    const mouseEventHandler = () => {
        setDisplayBtn((prevCond) => !prevCond);
    };

    console.log("OffClickProfile Comp");
    return (
        <Fragment>
            <ProfileCard
                Card
                mouseEventHandler={mouseEventHandler}
                hoverAnim={displayBtn}
                // styleCard="z-10 relative cursor-default transition-all duration-200 w-[90%] sm:w-[320px] h-[360px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                styleCard="z-10 relative cursor-default transition-all duration-200 w-[90%] sm:w-[320px] h-[360px] rounded-lg shadow-2xl bg-gray-800"
            >
                <div
                    className={`flex flex-col items-center h-full justify-center`}
                    id="myCard"
                    // style={{ background: "#22223b" }}
                >
                    <div>
                        {/* {console.log(imgView)} */}
                        <img
                            className="object-center object-cover mb-6 w-44 h-44 rounded-full shadow-lg mt-8"
                            // src={props.memberType ? imgView : coreMember.img}
                            src={imgView}
                            alt="team profile"
                        />
                    </div>
                    <h5 className="mb-4 text-xl font-medium text-gray-900 dark:text-white" id="member-name">
                        {coreMember.name}
                    </h5>
                    {/* <div className="mb-5 text-base text-gray-500 dark:text-gray-400">
                    {coreMember.profession}
                </div> */}
                    <div className="mb-7 text-base text-gray-500 dark:text-gray-400">
                        {coreMember.clubRole}
                    </div>
                    {displayBtn && <CardBackdrop />}
                    <AnimatePresence>
                        {displayBtn && (
                            <motion.ul
                                key="socialMedia"
                                className="absolute bottom-12 space-x-6 flex z-50"
                                initial={{ y: 30 }}
                                animate={{ y: 1 }}
                                transition={{ duration: 0.2 }}
                                exit={{ y: 30, opacity: 0 }}
                            >
                                <li className="active:animate-ping cursor-pointer">
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        href="https://twitter.com/"
                                    >
                                        <i className="mx-2 bi bi-twitter text-white hover:text-sky-300"></i>
                                    </a>
                                </li>
                                <li className="active:animate-ping cursor-pointer">
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        href="https://github.com/"
                                    >
                                        <i className="mx-2 bi bi-reddit text-white hover:text-orange-600"></i>
                                    </a>
                                </li>
                                <li className="active:animate-ping cursor-pointer">
                                    <i className="mx-2 bi bi-linkedin text-white hover:text-sky-500"></i>
                                </li>
                            </motion.ul>
                        )}
                    </AnimatePresence>
                    {displayBtn && (
                        <>
                            <motion.button
                                onClick={() => updateProfileView(coreMember)}
                                className="absolute z-50 opacity-100 px-7 py-3 bg-green-800 hover:bg-green-900 text-white font-bold rounded-[10px] text-base"
                                initial={{ y: -50 }}
                                animate={{ y: 1 }}
                                transition={{ duration: 0.2 }}
                                exit={{ y: -50, opacity: 0 }}
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
