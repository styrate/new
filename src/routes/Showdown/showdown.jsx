import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Heading2 from "../../components/Heading2/Heading2";
import Card from "../../components/Card/Card";
import fireImg from "../../assets/images/fire.png"
import newImg from "../../assets/images/new.png"
import megaPhoneImg from "../../assets/images/Megaphone.svg"
import deviceImg from "../../assets/images/Devices.svg"
import forkKnifeImg from "../../assets/images/ForkKnife.svg"
import handSoapImg from "../../assets/images/HandSoap.svg"
import carImg from "../../assets/images/Car.svg"
import notebookImg from "../../assets/images/Notebook.svg"
import higheelImg from "../../assets/images/HighHeel.svg"
import personBikeImg from "../../assets/images/PersonSimpleBike.svg"
import gameControlImg from "../../assets/images/GameController.svg"
import sunGlassesImg from "../../assets/images/Sunglasses.svg"
import codesandboxImg from "../../assets/images/CodesandboxLogo.svg"
import palleteImg from "../../assets/images/Palette.svg"
import "./showdown.css"
import CardPricing from "../../components/CardPricing/CardPricing";
import Footer from "../../components/Footer/Footer";

const Showdown = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <div className="styrateWorks">
                <Heading2 
                text="How Styrate Works"
                />
                <p>Styrate transforms the way we discover and compare products.
                     Be a part of interactive showdowns, voice your preferences,
                      and influence the popularity of products.
                     It's time for your opinions to be heard and matter!
                </p>
            </div>
            <div className="container showdown">
                <Heading2 
                text="Showdown"
                />
                <div className="cardContainer">
                    <Card 
                        img={fireImg}
                        heading="Trending Showdowns"
                        bodyText="Join the popular showdowns setting Styrate ablaze"
                        bgcolor="#fff"
                        color="#171717"
                        name="Join"
                    />
                    <Card 
                        img={newImg}
                        heading="New Showdowns"
                        bodyText="Dive into fresh, engaging contests"
                        bgcolor="#fff"
                        color="#171717"
                        name="Join"
                    />
                </div>
                
            </div>
            <div className="container bronze">
                <Heading2 
                text="Bronze"
                />
                <div className="cardContainer">
                    <Card 
                        img={megaPhoneImg}
                        bgcolorImg="#DBEAFE"
                        heading="Opinions"
                        bodyText="Broadcast your thoughts, engage in debate."
                        bgcolor="#fff"
                        color="#171717"
                        name="Join a contest"
                    />
                    <Card 
                        img={deviceImg}
                        bgcolorImg="#D1FAE5"
                        heading="Tech & Gadgets"
                        bodyText="Explore, review, discuss latest technolog."
                        bgcolor="#fff"
                        color="#171717"
                        name="Join a contest"
                    />
                    <Card 
                        img={forkKnifeImg}
                        bgcolorImg="#FFE4E6"
                        heading="Home & Kitchen"
                        bodyText="Share insights on domestic essentials."
                        bgcolor="#fff"
                        color="#171717"
                        name="Join a contest"
                    />
                </div>
                
            </div>
            <div className="container showdown">
                <Heading2 
                text="Silver"
                />
                <div className="cardContainer">
                    <Card 
                        img={handSoapImg}
                        bgcolorImg="#DBEAFE"
                        heading="Beauty & Health"
                        bodyText="Experience wellness with superior products."
                        bgcolor="#fff"
                        color="#171717"
                        name="Join a contest"
                    />
                    <Card 
                        img={carImg}
                        bgcolorImg="#D1FAE5"
                        heading="Auto & Travel"
                        bodyText="Navigate the world, one review at a time."
                        bgcolor="#fff"
                        color="#171717"
                        name="Join a contest"
                    />
                    <Card 
                        img={notebookImg}
                        bgcolorImg="#FFE4E6"
                        heading="Books & Media"
                        bodyText="Unveil literary gems and entertainment."
                        bgcolor="#fff"
                        color="#171717"
                        name="Join a contest"
                    />
                </div>
            </div>
            <div className="container bronze">
                <Heading2 
                text="Gold"
                />
                <div className="cardContainer">
                    <Card 
                        img={higheelImg}
                        bgcolorImg="#DBEAFE"
                        heading="Fashion"
                        bodyText="Stay trendy with stylish updates."
                        bgcolor="#fff"
                        color="#171717"
                        name="Join a contest"
                    />
                    <Card 
                        img={personBikeImg}
                        bgcolorImg="#D1FAE5"
                        heading="Sports & Outdoors"
                        bodyText="Join in athletic gear showdowns."
                        bgcolor="#fff"
                        color="#171717"
                        name="Join a contest"
                    />
                    <Card 
                        img={gameControlImg}
                        bgcolorImg="#FFE4E6"
                        heading="Toys & Games"
                        bodyText="Share the fun with toy and game showdowns."
                        bgcolor="#fff"
                        color="#171717"
                        name="Join a contest"
                    />
                </div>
            </div>
            <div className="container showdown">
                <Heading2 
                text="Platinum"
                />
                <div className="cardContainer">
                    <Card 
                        img={sunGlassesImg}
                        bgcolorImg="#DBEAFE"
                        heading="Luxury Items"
                        bodyText="Review and rate the finest luxuries."
                        bgcolor="#fff"
                        color="#171717"
                        name="Join a contest"
                    />
                    <Card 
                        img={codesandboxImg}
                        bgcolorImg="#D1FAE5"
                        heading="High-End Tech"
                        bodyText="Experience the pinnacle of technological innovation."
                        bgcolor="#fff"
                        color="#171717"
                        name="Join a contest"
                    />
                    <Card 
                        img={palleteImg}
                        bgcolorImg="#FFE4E6"
                        heading="Fine Art"
                        bodyText="Appraise and discuss exquisite art pieces."
                        bgcolor="#fff"
                        color="#171717"
                        name="Join a contest"
                    />
                </div>
            </div>
            <div className="styrateWorks">
                <Heading2 
                text="About Us"
                />
                <p>Styrate transforms the way we discover and compare products.
                     Be a part of interactive showdowns, voice your preferences,
                      and influence the popularity of products. It's time for your
                       opinions to be heard and matter!
                </p>
            </div>
            <div className="container showdown">
                <Heading2 
                text="Our Pricing"
                />
                <div className="cardContainer">
                    <CardPricing 
                        tier="Basic Tier"
                        pricing="$0"
                        tierMessage="Participate in active showdowns, 
                        earn points for your contributions, and gain access 
                        to basic level showdowns while having your opinions 
                        valued in the community."
                        bgcolor="#fff"
                        color="#171717"
                        name="Try for Free"
                        arrText={["Compete in Showdowns", "Earn Points", "Access to Basic Showdowns"]}
                    />
                    <CardPricing
                        tier="Premium Tier"
                        pricing="$9.99"
                        tierMessage="Access Basic Tier perks, turn points into prizes,
                         join exclusive Premium showdowns, enjoy ad-free experience,
                          and get early feature access on Styrate."
                        bgcolor="#171717"
                        color="#fff"
                        name="Subscribe Now" 
                        arrText={["All Basic Tier Perks", "Points to Prizes", "Exclusive Showdowns", "Ad-Free Experience", "Early Access"]}
                    />
                    <CardPricing 
                        tier="Enterprise Tier"
                        pricing="$49.99"
                        tierMessage="Access all Premium Tier perks: compete, earn,
                         participate, win, enjoy ad-free, create showdowns, get detailed
                          analytics, promote, and receive priority customer support."
                        bgcolor="#fff"
                        color="#171717"
                        name="Subscribe Now"
                        arrText={["All Premium Tier Perks", "Create Showdowns", "Detailed Analytics", "Promote Your Showdowns", "Customer Support"]}
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Showdown
