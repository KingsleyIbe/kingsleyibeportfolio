import React from 'react';
import Kingsley from '../../assets/images/kingsley.png';
// import GitHubStats from './GithubStats';
import Contributions from './ContributionStats.tsx';

const Intro = () => {
    return (
        <div className="px-5 md:px-[100px] pt-[50px] md:pt-[100px]">
            <div className="hidden md:block flex flex-row justify-between">
                <div>
                    <h1 className="text-[45px] font-bold opacity-[0.6]">Kingsley Ibe</h1>
                    <p className="text-[18px] font-semibold opacity-[0.8]">Software Engineer</p>
                </div>
                <div>
                    <img src={Kingsley} alt="Kingsley Ibe" className="rounded-[50%] w-[100px] h-[100px]" />
                </div>
            </div>
            <div className="block md:hidden flex flex-col justify-center">
            <div>
                    <img src={Kingsley} alt="Kingsley Ibe" className="rounded-[50%] m-auto md:m-0 w-[100px] h-[100px]" />
                </div>
                <div>
                    <h1 className="text-[45px] text-center md:text-left font-bold opacity-[0.6]">Kingsley Ibe</h1>
                    <p className="text-[18px]  text-center md:text-left font-semibold opacity-[0.8]">Software Engineer</p>
                </div>
               
            </div>
            <div className="my-10">
                <p>I'm a Software Engineer with a keen focus on creating beautiful and intuitive user interfaces. I specialize in React.js, Next.js, TypeScript, and Tailwind to build scalable and efficient web applications.</p>
                <p className="mt-5">Over the past 4 years I have demonstrated expertise in
                    optimizing user interfaces and improving application performance, achieving measurable
                    enhancements of up to 78%. Skilled in delivering scalable, responsive, and user-centric solutions
                    that align with business goals.
                </p>
            </div>
           <div>
            <Contributions />
            {/* <GitHubStats username="kingsleyibe" /> */}
           </div>
        </div>
    )
}

export default Intro;
