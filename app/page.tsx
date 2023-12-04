import Image from 'next/image'
import Experience from './components/experience'
import Project from './components/project'
import SocialMediaIcons from './components/social'

export default function Home() {
  return (
    <main className="flex flex-row flex-wrap lg:px-20">
      {/* Left Half */}
      <div className='flex flex-col px-6 py-12 sm:px-8 lg:px-6 lg:py-12 xl:p-12 lg:w-2/5 lg:sticky lg:top-0 lg:max-h-screen'>
        <Image
          priority
          className='rounded-full mb-6'
          src="/images/profile/kevin.jpg"
          height={160}
          width={160}
          alt={"Kevin"}
        />
        <div className='text-white text-4xl lg:text-3xl xl:text-4xl font-bold mb-3'>
          Kevin Toh
        </div>
        <div className='text-white text-lg xl:text-xl mb-3'>
          Computer Science Undergraduate
        </div>
        <div className='text-gray-300 lg:text-sm xl:text-base font-light mb-3'>
          I dive into the intricate details of software development,
          gaining hands-on experience that extends across various platforms.
        </div>
        <SocialMediaIcons />
      </div>
      {/* Right Half */}
      <div className='flex flex-col overflow-y-auto px-6 py-6 sm:px-8 lg:px-6 lg:py-12 xl:p-12 lg:w-3/5'>
        {/* About */}
        <section id="about">
          <header className='font-bold uppercase mb-4 text-lg'>About</header>
          <div className='text-white mb-6'>
            Hello there! I’m a sophomore at National University of Singapore immersing myself in the world of
            Computer Science with a minor in Data Science and Analytics. My passion lies in creating innovative
            software solutions that contribute to the evolution of our digital landscape.
          </div>
        </section>
        {/* Experience */}
        <section id="experience">
          <header className='font-bold uppercase mb-4 text-lg'>Experience</header>
          <Experience
            organization={"NUS Computing"}
            role={"Research Engineer"}
            start={"Jun 2023"}
            end={"Present"}
            description={
              "Researched and developed a typescript API for React Native to interact with the iCOQuit Smokerlyzer, "
              + "a carbon monoxide sensor used in smoking cessation applications to measure carbon monoxide levels. "
              + "Integrated the developed API into a smoking cessation mobile app using Expo React Native(TypeScript) "
              + " and Firebase (Authentication and Database)"
            }
            tags={["React Native", "Embedded Programming"]}
          />
          <Experience
            organization={"CSIT"}
            role={"Software Engineering Intern"}
            start={"Mar 2019"}
            end={"Aug 2019"}
            description={
              "Designed, implemented and deployed the backend of a collaborative meeting management "
              + "system using SpringBoot, VueJS, ElasticSearch and NLTK within a 5-month timeframe, "
              + "enhancing efficiency in meeting processes."
            }
            tags={["SpringBoot", "VueJS", "Natural Language Processing"]}
          />
        </section>
        {/* Projects */}
        <section id="projects">
          <header className='font-bold uppercase mb-4 text-lg'>Projects</header>
          <Project
            name={'VoluNteerUS'}
            description={
              "A volunteering platform with robust volunteering management features for NUS students "
              + "to sign up for volunteering opportunities and management from student clubs and "
              + "organizations to manage volunteering events."
            }
            imageUrl={'/images/projects/volunteerus.png'}
            imageWidth={160}
            imageHeight={120}
            url={'https://volunteer-us.onrender.com/'}
            tags={["React", "NestJS", "MongoDB"]}
          />
          <Project
            name={'Gastronome'}
            description={
              "A meal planning application focused on promoting healthier lifestyles by providing "
              + "personalized meal and diet recommendations tailored to user preferences. "
              + "The project aims to inspire individuals to adopt healthier dietary habits for improved well-being."
            }
            imageUrl={'/images/projects/gastronome.png'}
            imageWidth={120}
            imageHeight={120}
            url={'https://gastronomecc.github.io/gastronome-site/'}
            tags={["Android", "Firebase"]}
          />
          <Project
            name={'BackToGoal'}
            description={
              "Pioneered a groundbreaking feature for the BackToGoal running app, leveraging real-time pace data "
              + "to intelligently predict and signal users when it's time to turn back. This innovative functionality "
              + "optimizes time management during runs, enhancing the overall user experience and setting the app apart "
              + "in the fitness technology landscape."
            }
            imageUrl={'/images/projects/BackToGoal.png'}
            imageWidth={120}
            imageHeight={120}
            url={'https://github.com/ktzy0305/BackToGoal'}
            tags={["iOS", "Swift", "MapKit"]}
          />
        </section>
      </div>
    </main>
  )
}
