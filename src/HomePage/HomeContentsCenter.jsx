import { FaAngleLeft, FaAngleRight, FaCaretRight, FaHome } from "react-icons/fa";
import "./HomePage.css";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { LuFileSearch2 } from "react-icons/lu";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {betSlip, clearSlip} from "../Redux/Features";
import {useNavigate} from "react-router-dom";
import data from '../assets/data.json'


const HomeContentsCenter = ({showFanC,  ShowMainContentB, ShowFanPicksA}) => {
    console.log(data);
  
    const dispatch = useDispatch()

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageArray = [
      "https://cdn3.f-cdn.com//files/download/80772190/Facebook-Cover-Design-4.png?width=780&height=403&fit=crop",
      "https://img.freepik.com/premium-vector/woman-basketball-banner-sports-banner-design-premium-template-vector_356357-70.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcc_SDVxiMfHA2PEhZZJaPE-xAua07vZD0hA&usqp=CAU",
      "https://img.freepik.com/free-vector/gradient-halftone-basketball-twitch-banner_23-2149346315.jpg",
  ];
  const totalImages = imageArray.length;

  const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handlePrevImage = () => {
      setCurrentImageIndex(
          (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
      );
  };

  useEffect(() => {
      const intervalId = setInterval(() => {
          handleNextImage();
      }, 3000);

      return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  const nav = useNavigate();

  const handleSeeMoreOdds = () => {
      nav("/more-odds");
  };

  console.log(handleSeeMoreOdds);
  const betslipData = useSelector((state) => state.Pier.slip);

  const handleShowHome = () =>{
    setShowBetslip(false)
    nav("/home")
  }

  const [showBetslip, setShowBetslip] = useState(false);

  const handleSHowBetslip = () => {
      setShowBetslip(!showBetslip);
  };

  const [stakeAmount, setStakeAmount] = useState("0 ")

    return (
        <>
            {" "}
            <div className="HomeMainContentsB">
                <div className="HomeMainContentsBCarousel">
                    <div className="HomeMainContentsBCarouselImgDiv">
                        <span
                            className="carouselBack"
                            onClick={handlePrevImage}
                        >
                            <FaAngleLeft />
                        </span>
                        <img src={imageArray[currentImageIndex]} alt="" />
                        <span
                            className="carouselFront"
                            onClick={handleNextImage}
                        >
                            <FaAngleRight />
                        </span>
                    </div>
                </div>
                <div className="HomeMainContentsBNav">
                    <div className="HomeMainContentsBNavTop">
                        <p>Live Highlight</p>
                        <p>View Live Betting</p>
                    </div>
                    <div className="HomeMainContentsBNavDown">
                        <div className="HomeMainContentsBNavDownItem active">
                            <span className="HomeMainContentsBNavDownIcon">
                                <MdOutlineSportsSoccer />
                            </span>
                            <p>Soccer</p>
                        </div>
                    </div>
                </div>
                {showFanC ? (
                    <>
                        {" "}
                        <div className="HomeMainContentsBNavGamesSelect">
                            <div className="HomeMainContentsBNavGamesSelectA">
                                <div className="HomeMainContentsBNavGamesSelectA1">
                                    3way
                                </div>
                                <div className="HomeMainContentsBNavGamesSelectA2">
                                    Double chance
                                </div>
                            </div>
                            <div className="HomeMainContentsBNavGamesSelectB">
                                <div className="HomeMainContentsBNavGamesSelectB1">
                                    <div className="HomeMainContentsBNavGamesSelectB1A">
                                        1
                                    </div>
                                    <div className="HomeMainContentsBNavGamesSelectB1B">
                                        X
                                    </div>
                                    <div className="HomeMainContentsBNavGamesSelectB1C">
                                        2
                                    </div>
                                </div>
                                <div className="HomeMainContentsBNavGamesSelectB2">
                                    <div className="HomeMainContentsBNavGamesSelectB2A">
                                        1X
                                    </div>
                                    <div className="HomeMainContentsBNavGamesSelectB2B">
                                        12
                                    </div>
                                    <div className="HomeMainContentsBNavGamesSelectB2C">
                                        X2
                                    </div>
                                </div>
                            </div>
                            <div className="HomeMainContentsBNavGamesSelectC">
                                {data?.map((item, index) => (
                                    <div
                                        className="HomeMainContentsBNavGamesSelectCTeam1"
                                        key={index}
                                    >
                                        <div className="HomeMainContentsBNavGamesSelectCTeams">
                                            <p>{item?.userName}</p>
                                        </div>
                                        <div className="HomeMainContentsBNavGamesSelectCTeamsPick1">
                                            {item?.odds5.map((e, ind) => (
                                                <div
                                                    key={ind}
                                                    className=""
                                                    onClick={() =>
                                                        dispatch(
                                                            betSlip({
                                                                bettor: item.userName,
                                                                team1: item
                                                                    .userPick
                                                                    .team1,
                                                                team2: item
                                                                    .userPick
                                                                    .team2,
                                                                oddsSelected: e,
                                                            })
                                                        )
                                                    }
                                                >
                                                    {e}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="HomeMainContentsBNavGamesSelectCTeamsPick3">
                                            <FaCaretRight
                                                onClick={ShowMainContentB}
                                                className="IoMdInformationCircleOutline"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : ShowFanPicksA ? (
                    <>
                        <div className="HomeMainContentsBNavGames">
                            <h3>Top Games for the day</h3>
                            <div className="HomeMainContentsBNavGamesItem">
                                <div className="HomeMainContentsBNavGamesItemTop">
                                    <p>WHO WILL WIN?</p>
                                </div>
                                <div className="HomeMainContentsBNavGamesItem1">
                                    <div className="HomeMainContentsBNavGamesItem1A">
                                        <span>
                                            <FaAngleLeft />
                                        </span>
                                        <p>Galatasary</p>
                                    </div>
                                    <div className="HomeMainContentsBNavGamesItem1B">
                                        <div className="HomeMainContentsBNavGamesItem1B1st">
                                            <p>42%</p>
                                            <span></span>
                                        </div>
                                        <div className="HomeMainContentsBNavGamesItem1B2nd">
                                            <p>44%</p>
                                            <span></span>
                                        </div>
                                        <div className="HomeMainContentsBNavGamesItem1B3rd">
                                            <p>11%</p>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="HomeMainContentsBNavGamesItem1C">
                                        <p>Manchester United</p>
                                        <span>
                                            <FaAngleRight />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="HomeMainContentsBNavGamesItem">
                                <div className="HomeMainContentsBNavGamesItemTop">
                                    <p>WHO WILL WIN?</p>
                                </div>
                                <div className="HomeMainContentsBNavGamesItem1">
                                    <div className="HomeMainContentsBNavGamesItem1A">
                                        <p>Galatasary</p>
                                    </div>
                                    <div className="HomeMainContentsBNavGamesItem1B">
                                        <div className="HomeMainContentsBNavGamesItem1B1st">
                                            <p>42%</p>
                                            <span></span>
                                        </div>
                                        <div className="HomeMainContentsBNavGamesItem1B2nd">
                                            <p>44%</p>
                                            <span></span>
                                        </div>
                                        <div className="HomeMainContentsBNavGamesItem1B3rd">
                                            <p>11%</p>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="HomeMainContentsBNavGamesItem1C">
                                        <p>Manchester United</p>
                                    </div>
                                </div>
                            </div>
                            <div className="HomeMainContentsBNavGamesItem">
                                <div className="HomeMainContentsBNavGamesItemTop">
                                    <p>WHO WILL WIN?</p>
                                </div>
                                <div className="HomeMainContentsBNavGamesItem1">
                                    <div className="HomeMainContentsBNavGamesItem1A">
                                        <p>Galatasary</p>
                                    </div>
                                    <div className="HomeMainContentsBNavGamesItem1B">
                                        <div className="HomeMainContentsBNavGamesItem1B1st">
                                            <p>42%</p>
                                            <span></span>
                                        </div>
                                        <div className="HomeMainContentsBNavGamesItem1B2nd">
                                            <p>44%</p>
                                            <span></span>
                                        </div>
                                        <div className="HomeMainContentsBNavGamesItem1B3rd">
                                            <p>11%</p>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="HomeMainContentsBNavGamesItem1C">
                                        <p>Manchester United</p>
                                    </div>
                                </div>
                            </div>
                            <div className="HomeMainContentsBNavGamesItem">
                                <div className="HomeMainContentsBNavGamesItemTop">
                                    <p>WHO WILL WIN?</p>
                                </div>
                                <div className="HomeMainContentsBNavGamesItem1">
                                    <div className="HomeMainContentsBNavGamesItem1A">
                                        <p>Galatasary</p>
                                    </div>
                                    <div className="HomeMainContentsBNavGamesItem1B">
                                        <div className="HomeMainContentsBNavGamesItem1B1st">
                                            <p>42%</p>
                                            <span></span>
                                        </div>
                                        <div className="HomeMainContentsBNavGamesItem1B2nd">
                                            <p>44%</p>
                                            <span></span>
                                        </div>
                                        <div className="HomeMainContentsBNavGamesItem1B3rd">
                                            <p>11%</p>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="HomeMainContentsBNavGamesItem1C">
                                        <p>Manchester United</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}
                <div className="MobileFooter">
                    <div onClick={handleShowHome}>
                        <span>
                            <FaHome className="FooterIcon" />
                        </span>
                        <p>Home</p>
                    </div>
                    <div onClick={handleSHowBetslip}>
                        <span>
                            <p className="FooterIcon">{betslipData.length}</p>
                        </span>
                        <p>Betslip</p>
                    </div>
                    <div>
                        <span>
                            <LuFileSearch2 className="FooterIcon" />
                        </span>
                        <p>Checkbet</p>
                    </div>
                </div>
                {showBetslip ? (
                    <div className="BetSlipPageMobile">
                        <div className="BetSlipPageMobileWr">
                            <div className="BetSlipPageMobileCLoser">
                                <span onClick={()=>setShowBetslip(false)}>Close Betslip</span>
                            </div>
                            <div className="BetSlipPageMobileA">
                                <h4>Betslip {betslipData.length}</h4>
                            </div>
                            <div className="BetSlipPageMobileB">
                                <p>Accept odds changes</p>
                                <p
                                    className="ClearBtn"
                                    onClick={() => dispatch(clearSlip())}
                                >
                                    Clear Betslip
                                </p>
                            </div>
                            <div className="BetSlipPageMobileItems">
                                {betslipData.length === 0 ? (
                                    <>
                                        {" "}
                                        <h3>
                                            Empty slip, Please select a odds
                                            from the fan page
                                        </h3>
                                    </>
                                ) : (
                                    <>
                                        {betslipData.map((item, index) => (
                                            <div
                                                className="BetSlipPageMobileItems1"
                                                key={index}
                                            >
                                                <div className="BetSlipPageMobileItem1Name">
                                                    <input type="checkbox" />
                                                    <div className="BetSlipPageMobileItem1NameTeams">
                                                        {item?.bettor}
                                                    </div>
                                                    <p>X</p>
                                                </div>
                                                <div className="BetSlipPageMobileItem1Choice">
                                                    <p>{item?.oddsSelected}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}

                                <div className="BetSlipPageMobileItemsType">
                                    <div className="active">Single</div>
                                    <div className="">Multiple</div>
                                    <div className="">System</div>
                                </div>
                            </div>
                            <div className="BetSlipPageMobileC">
                                <div className="BetSlipPageMobileCTop">
                                    <div className="BetSlipPageMobileCTopA">
                                        <p>All Single stakes are:</p>
                                        <input type="text" onChange={(e)=>setStakeAmount(e.target.value)}/>
                                    </div>
                                    
                                </div>
                                <div className="BetSlipPageMobileCDown">
                                    <p>
                                        Total Stake: <span>BTC: {stakeAmount}</span>
                                    </p>
                                    <p>
                                        Total Returns: <span>BTC: 0.13320</span>
                                    </p>
                                    <button>Book bet</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default HomeContentsCenter;
