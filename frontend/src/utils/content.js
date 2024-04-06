// Section1
import ShootingStarImage from "../assets/images/section1/main-bg-0-0.png";
import MainBG from "../assets/images/section1/main-bg-0_1.webp";
import TreesImage from "../assets/images/section1/main-bg-1_1.webp";
import CliffImage from "../assets/images/section1/main-bg-2_1.webp";
import HorseImage from "../assets/images/section1/main-bg-3.png";

// Section3
import EthImg from "../assets/images/section3/eth.webp";
import BscImg from "../assets/images/section3/bsc.webp";
import PolygonImg from "../assets/images/section3/polygon.webp";
import OptimismImg from "../assets/images/section3/optimism.webp";
import GnosisImg from "../assets/images/section3/gnosis.webp";
import AvalancheImg from "../assets/images/section3/avalanche.webp";
import ArbitrumImg from "../assets/images/section3/arbitrum.webp";
import FantomImg from "../assets/images/section3/fantom.webp";
import KlaytnImg from "../assets/images/section3/klaytn.webp";
import AuroraImg from "../assets/images/section3/aurora.webp";

// Section4
import NewsImg from "../assets/images/section4/news-image.webp";

// Section5
import BannerBgImage from "../assets/images/section5/news-block-background.webp";
import BannerBgImageMobile from "../assets/images/section5/news-block-background-mobile.webp";

// Section6
import Sec6Image1 from "../assets/images/section6/logo-gene.jpg";
import Sec6Image2 from "../assets/images/section6/video-gen.jpg";
import Sec6Image3 from "../assets/images/section6/script-support.jpg";
import Sec6Image4 from "../assets/images/section6/multilanguage-support.png";

// Section7
import Sec7Image1 from "../assets/images/section7/api.webp";
import Sec7Image2 from "../assets/images/section7/grant-program.webp";

// Section8
import ShieldImage from "../assets/images/section8/shield.png";

// Section9
import Sec9Image1 from "../assets/images/section9/dao.webp";
import Sec9Image2 from "../assets/images/section9/token.webp";

// Section10
import DiscordImage from "../assets/images/section10/discord.webp";
import RedditImage from "../assets/images/section10/reddit.webp";
import TelegramImage from "../assets/images/section10/telegram.webp";
import TwitterImage from "../assets/images/section10/twitter.webp";

// Section11
import Near from "../assets/images/section11/near.svg";
import Metamask from "../assets/images/section11/metamask.svg";
import Trustwallet from "../assets/images/section11/trustwallet.svg";
import Opium from "../assets/images/section11/opium.svg";
import Zerion from "../assets/images/section11/zerion.svg";
import Revolut from "../assets/images/section11/revolut.svg";
import Pantera from "../assets/images/section11/pantera.svg";
import Binancelab from "../assets/images/section11/binance-lab.svg";
import Dragonflycapital from "../assets/images/section11/dragonfly-capital.svg";
import Galaxydigital from "../assets/images/section11/galaxy-digital.svg";
import Paraficapital from "../assets/images/section11/parafi-capital.svg";
import Gemini from "../assets/images/section11/gemini.svg";
import Mew from "../assets/images/section11/mew.svg";
import Atoken from "../assets/images/section11/atoken.svg";
import Dappradar from "../assets/images/section11/dappradar.svg";
import Graph from "../assets/images/section11/graph.svg";
import Staker from "../assets/images/section11/staker.svg";
import Bitpay from "../assets/images/section11/bitPay.svg";

// Footer
import BookIcon from "@mui/icons-material/Book";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";
import ChatIcon from "@mui/icons-material/Chat";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

// Navbar
import Logo from "../assets/images/logo.png";
import TypeWriter from "typewriter-effect"
import { Cursor, useTypewriter } from "react-simple-typewriter";

export const section1Content = {
  MainBG,
  TreesImage,
  CliffImage,
  HorseImage,
  ShootingStarImage,
  // title: "Automate",
  // subtitle: "Using AI",
};
// const {word}=useTypewriter({
//   words:['developer','designer','photo'],
//   loop:{},
// });
// const text=()=>{
//   <h1>
//     <span>
//       {word}
//     </span>
//     <Cursor/>
//   </h1>

export const section2Content = {
  items: [
    { counter: 345, subtitle: "Liquidity sources" },
    { counter: 345, before: "$", after: "B+", subtitle: "Total volume" },
    { counter: 4.4, after: "M+", subtitle: "Total wallets", decimals: true },
  ],
};

export const section3Content = {
  title: "We are here to win.",
  ITEMS: [
    { logo: EthImg, name: "Ethereum" },
    { logo: BscImg, name: "BNB Chain" },
    { logo: PolygonImg, name: "Polygon" },
    { logo: OptimismImg, name: "Optimism" },
    { logo: GnosisImg, name: "Gnosis" },
    { logo: AvalancheImg, name: "Avalanche" },
    { logo: ArbitrumImg, name: "Arbitrum" },
    { logo: FantomImg, name: "Fantom" },
    { logo: KlaytnImg, name: "Klaytn" },
    { logo: AuroraImg, name: "Aurora" },
  ],
};

export const section4Content = {
  top: {
    title: "Generating Shorts Content with Quicksnap at your finger tips",
    subtitle:
      "Generated By QuickSnap Just As A Demo For Our Gaming Channel Customers.",
    image: NewsImg,
  },
};

export const section5Content = {
  BannerBgImage,
  BannerBgImageMobile,
  title: "Quicksnap",
  subtitle:
    "QuickSnap , EMPOWERING Digital Creators . Be Your own inspiration",
};

export const section6Content = {
  title: "QuickSnap Features",
  ITEMS: [
    {
      title: "Logo Generator",
      subtitle:
        "Quicksnap is a versatile logo generator that simplifies the process of creating unique and professional logos with its intuitive interface and extensive library of design elements.",
      image: Sec6Image1,
    },
    {
      title: "Video Content Generator",
      subtitle:
        "Quicksnap is a versatile video content creation tool designed to streamline the process of capturing, editing, and sharing short-form videos, empowering users to produce engaging content with ease and efficiency.",
      image: Sec6Image2,
    },
    {
      title: "Script Support",
      subtitle:
        "Quicksnap provides script support, allowing developers to write concise and efficient code in a single line to perform various tasks.",
      image: Sec6Image3,
    },
    {
      title: "Multi Lingual Generation",
      subtitle:
        "Quicksnap's Multi Lingual Generation feature enables the generation of content in multiple languages with a single model, allowing for seamless translation and localization of text.",
      image: Sec6Image4,
    },
  ],
};

export const section7Content = {
  title: "Grow with our ecosystem",
  subtitle: "Build solutions alongside decentralized finance leaders",
  ITEMS: [
    {
      title: "Quicksnap",
      subtitle:
        "A cutting-edge discovery and routing algorithm that offers non-custodial asset swaps at the most attractive rates in major DeFi ecosystems.",
      image: Sec7Image1,
    },
    {
      title: "Quicksnap",
      subtitle:
        "QuickSnaps ,Empowering Creaters . Be your own Inspiration",
      image: Sec7Image2,
    },
  ],
};

// export const section8Content = {
//   title: "Your Digital Anonymity Is Secure",
//   subtitle:
//     "Your digital anonymity is secure with us' communicates a commitment to safeguarding users' privacy and ensuring confidentiality in online interactions, emphasizing trust and security in the digital domain.",
//   caption:
//     "",
//   ShieldImage,
// };

export const section9Content = {
  title: "Empowered by the community",
  ITEMS: [
    {
      title: "Quicksnap",
      subtitle:
        "A governance tool that enables stakers to vote for key protocol parameters.",
      image: Sec9Image1,
    },
    {
      title: "Quicksnap",
      subtitle:
        "A token that facilitates  protocol governance and participation in the network's evolution.",
      image: Sec9Image2,
    },
  ],
};

export const section10Content = {
  SOCIALS: [
    { name: "Telegram", image: TelegramImage },
    { name: "Discord", image: DiscordImage },
    { name: "Reddit", image: RedditImage }
  ],
};

export const Section11Content = {
  title: "Partners and stakeholders",
  ITEMS: [
    {
      link: "https://near.org/",
      image: Near,
    },
    {
      link: "https://metamask.io/",
      image: Metamask,
    },
    {
      link: "https://trustwallet.com/",
      image: Trustwallet,
    },
    {
      link: "https://opium.network/",
      image: Opium,
    },
    {
      link: "https://zerion.io/",
      image: Zerion,
    },
    {
      link: "https://www.revolut.com/",
      image: Revolut,
    },
    {
      link: "https://panteracapital.com/",
      image: Pantera,
    },
    {
      link: "https://labs.binance.com/",
      image: Binancelab,
    },
    {
      link: "https://www.dcp.capital/",
      image: Dragonflycapital,
    },
    {
      link: "https://www.galaxydigital.io/",
      image: Galaxydigital,
    },
    {
      link: "https://www.parafi.capital/",
      image: Paraficapital,
    },
    {
      link: "https://www.gemini.com/frontier-fund",
      image: Gemini,
    },
    {
      link: "https://www.myetherwallet.com/",
      image: Mew,
    },
    {
      link: "https://www.atoken.com/",
      image: Atoken,
    },
    {
      link: "https://dappradar.com/",
      image: Dappradar,
    },
    {
      link: "https://thegraph.com/",
      image: Graph,
    },
    {
      link: "https://staker.app/",
      image: Staker,
    },
    {
      link: "https://bitpay.com/",
      image: Bitpay,
    },
  ],
};

export const footerContent = {
  protocols: {
    title: "Home",
    links: [
      { title: "Content Generation" },
      { title: "Muntilingual Support" }
    ],
  },
  
  support: {
    title: "Support",
    links: [
      { title: "Help center" },
      { title: "Chat Bot Support" },
      { title: "Contacts" },
    ],
  },
  developers: {
    title: "Explore More",
    links: [
      { title: "Documentation" },
      { title: "GitHub" }
    ],
  },
  subscribe: {
    title: "Subscribe to our newsletter",
    subtitle: "Get the latest news and updates",
  },
  socials: [
    { icon: BookIcon },
    { icon: RedditIcon },
    { icon: ChatIcon },
    { icon: TelegramIcon },
    { icon: GitHubIcon },
  ]
};

export const navbarContent = {
  Logo,
};
