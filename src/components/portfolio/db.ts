import { Portfolio } from "../../helpers/interface";
import slapa from "../../assets/images/slapa.png";
import ultainfinity from "../../assets/images/ultainifinity.png";
import afrikbrand from "../../assets/images/afrikbrandScreenshot.png";
import eventApp from "../../assets/images/eventapp.png";
import npm from "../../assets/images/npm.jpg";
import dtech from "../../assets/images/dtech.png";
import todo from "../../assets/images/todo.png";

export const portfolio: Portfolio[] = [
 {
        id: 1,
        image: slapa,
        title: "Synthetic Slapa",
        stacks: ["React", "Javascript", "Crypto"],
        description: "I created Blockchain project that allows users to trade their crypto assets such as UTTA Token",
        year: "2022",
        link: "https://syntheticslapa.com/",
      },
      {
        id: 2,
        image: ultainfinity,
        title: "Ultainfinity Wealth Launchpad",
        stacks: ["React", "Javascript", "Crypto"],
        description: "I was part of the development team behind the Ultainfinity Wealth LaunchPad Dashboard, working extensively on Instant CreditLine, Ultainfinity Exchange, and Ultainfinity Wallet.",
        year: "2022",
        link: "https://ultainfinitywealthlaunchpad.com/"
      },
      {
        id: 3,
        image: afrikbrand,
        title: "Afrikbrand Company Page",
        stacks: ["WordPress", "CMS", "Email"],
        description: "Designed and developed a captivating landing page for Afrikbrand to showcase their business and attract customers.",
        year: "2022",
        link: "https://afrikbrand.tech/",
       
      },
      {
        id: 4,
        image: eventApp,
        title: "OpenSource Event App",
        stacks: ["Bootstrap", "Javascript", "Git and Github"],
        description: "Application was build with HTML, CSS, JavaScript and Bootstrap to meet the need of a conference website. Users will be able to register for event, create account, join event, access speaker's information, have information about both past and upcoming events and schedule their own events.",
        year: "2021",
        link: "https://kingsleyibe.github.io/microverse-capstone-1/",
        github: "https://github.com/KingsleyIbe/microverse-capstone-1"
      },
      {
        id: 5,
        image: npm,
        title: "NPM Dynamic Spinner Component for React",
        stacks: ["NPM", "Javascript", "Dev Tools"],
        description: "A customizable and dynamic spinner component for React applications. The dynamic-spinner component allows you to easily add loading spinners to your React projects, with configurable properties like colors, size, speed, border size, opacity, shape and text. The component supports single or multiple colors with conic gradient and can be styled with various shapes.",
        year: "2024",
        link: "https://www.npmjs.com/package/dynamic-spinner",
        github: "https://github.com/KingsleyIbe/dynamic-spinner"
      },
      {
        id: 6,
        image: dtech,
        title: "dtech Engineering Project",
        stacks: ["React", "Javascript", "Next.Js"],
        description: "I created dtech Engineering web application that allows users to consult on their various engineering projects.",
        year: "2024",
        link: "https://www.dtechengineering.com.ng/",
      },
      {
        id: 7,
        image: todo,
        title: "Todo List",
        stacks: ["Jest", "Eslint", "Webpack", "React"],
        description: "Todo List Application helps keep track of your pending and completed task. The application allows users to do perform the following functions",
        year: "2021",
        link: "https://kingsleyibe.github.io/react-todos-app/",
        github: "https://github.com/KingsleyIbe/react-todos-app"
      },
]