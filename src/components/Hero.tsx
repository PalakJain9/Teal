import Typewriter from "typewriter-effect";
import styles from '@/styles/Hero.module.css';
import Link from "next/link";
import Image from "next/image";

function Intro () {
  return (
    <div
      className="flex flex-col gap-8 justify-center items-start w-full h-full border-2 border-gray-200 bg-white p-[2rem]"
    >
      <button
        className={styles.introButton}
      >
        ✨New
      </button>

      <div
        className="flex flex-col justify-start items-start w-full h-full text-3xl font-bold text-teal"
      >
        <h1
          className="text-gray-700 pb-[0.2rem]"
        >
          Palak: All in one
        </h1>

        <Typewriter 
          options={{
            autoStart: true,
            loop: true,
          }}

          onInit={(typewriter) => {
            typewriter
              .typeString("frontend web developer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("UI/UX enthusiast")
              .pauseFor(1000)
              .deleteAll()
              .typeString("problem solver")
              .pauseFor(1000)
              .deleteAll()
              .typeString("bug report and resolver")
              .pauseFor(1000)
              .deleteAll()
              .start();
          }}
        />
      </div>

    <p
      className="text-lg"
    >
      Ready to work hard, have fun and make history.
    </p>

    <div
      className="flex flex-row justify-start items-center gap-2 flex-wrap w-full h-full"
    >
      <Link
        href=""
        className={styles.introButton}
      >
        View Resume
      </Link>

      <Link
        href="https://heypalakjain.vercel.app/"
        className={styles.introButton}
      >
        Learn More
      </Link>

    </div>
  </div>
)}

function Card (
  { children } : 
  { children: React.ReactNode }
) {
  return (
    <div
      className="w-full h-auto flex flex-col justify-start items-start gap-4 border-2 border-gray-200 bg-white p-[1rem]"
    >
      {children}
    </div>
  )
}

export default function Hero () {
  return (
    <div
      className="flex justify-center items-center w-full h-full px-[1rem]"
    >
      <div
        className="w-full md:w-4/5 lg:w-2/3 flex flex-col justify-start items-center gap-3"
      >
        <Intro />
        
        <div
          className="flex flex-col md:flex-row justify-start items-start gap-3 w-full"
        >
          <div
            className={styles.expColumn}
          >
            <Card>
              <div
                className={styles.expImage}
              >
                <Image 
                  src="/tymely.svg"
                  width={300}
                  height={300}
                  alt="tymely"
                  className="h-full"
                />
              </div>
              <h1
                className={styles.expHeading}
              >
                Frontend Developer: Tymely
              </h1>
              <p>
                Addressed the challenge of deadline management by building reminders and step-by-step roadmap for deadlines. Over <span className={styles.highlightNumber}>250+</span> users reported a <span className={styles.highlightNumber}>20%</span> increase in productivity. And onboarded <span className={styles.highlightNumber}>280</span> users within <span className={styles.highlightNumber}>21</span> days of deployment
              </p>
            </Card>

            <Card>
              <div
                className={styles.expImage}
              >
                <Image 
                  src="/developerDays.svg"
                  width={300}
                  height={300}
                  alt="developer days"
                  className="h-full"
                />
              </div>
              <h1
                className={styles.expHeading}
              >
                Top 15 in UI/UX hackathon
              </h1>
              <p>
                Emerged in top <span className={styles.highlightNumber}>15</span> out of total <span className={styles.highlightNumber}>124</span> participants nationwide from the UI/UX category for crafting great user-centric designs in a national level hackathon.
              </p>
            </Card>

            <Card>
              <div
                className={styles.expImage}
              >
                <Image 
                  src="/aviyel.svg"
                  width={300}
                  height={300}
                  alt="aviyel"
                  className="h-full"
                />
              </div>
              <h1
                className={styles.expHeading}
              >
                improved growth of a startup by reporting bugs
              </h1>
              <p>
                Improved the overall experience of <span className={styles.highlightNumber}>10,000+</span>  users of a early-stage startup by reporting <span className={styles.highlightNumber}>2</span> bugs and <span className={styles.highlightNumber}>7+</span>  feedback for their web application 
              </p>
            </Card>

            <Card>
              <div
                className={styles.expImage}
              >
                <Image 
                  src="/figma.svg"
                  width={300}
                  height={300}
                  alt="figma"
                  className="h-full"
                />
              </div>
              <h1
                className={styles.expHeading}
              >
                Core Team Member: Friends of Figma, Jalandhar
              </h1>
              <p>
                Initiated the very <span className={styles.highlightNumber}>1st</span> friends of figma chapter in Punjab. Gained around <span className={styles.highlightNumber}>200</span> views on first online event by delivering engaging content for social media and newsletter.
              </p>
            </Card>
          </div>
          
          {/* right column */}
          <div
            className={styles.expColumn}
          >

          <Card>
            <div
              className={styles.expImage}
            >
              <Image 
                src="/bnlw.svg"
                width={300}
                height={300}
                alt="bnlw"
                className="h-full"
              />
            </div>
            <h1
              className={styles.expHeading}
            >
              Fullstack Developer: Banasthali
            </h1>
            <p>
              Accelerated user engagement by <span className={styles.highlightNumber}>15%</span>  by building an article saving system, enabling users to refer their saved content easily. Developed REST API with Node.js, bringing about <span className={styles.highlightNumber}>20%</span>  reduction in response time.
            </p>
          </Card>

          <Card>
            <div
              className={styles.expImage}
            >
              <Image 
                src="/recruitify.svg"
                width={300}
                height={300}
                alt="recruitify"
                className="h-full w-auto"
              />
            </div>
            <h1
              className={styles.expHeading}
            >
              building Recruitify: the Shopify for Colleges
            </h1>
            <p>
              Addressed transparency issues in placements and reduced setup time of placement portals by <span className={styles.highlightNumber}>100%</span>, benefiting <span className={styles.highlightNumber}>1M+</span>  students. Achieved <span className={styles.highlightNumber}>15%</span>  improvement in search relevance by implementing tag-based filtering UI using React.
            </p>
          </Card>

          <Card>
            <div
              className={styles.expImage}
            >
              <Image 
                src="/gdsc.svg"
                width={300}
                height={300}
                alt="gdsc"
                className="h-full"
              />
            </div>
            <h1
              className={styles.expHeading}
            >
              Content Head: Google DSC, BV
            </h1>
            <p>
              Strengthened the technical community by <span className={styles.highlightNumber}>31%</span> by leading a team of <span className={styles.highlightNumber}>14</span>  women and encouraged <span className={styles.highlightNumber}>2000+</span> women to learn new technologies by successfully organizing <span className={styles.highlightNumber}>6+</span>  mega events. 
            </p>
          </Card>

          </div>

        </div>

      </div>
    </div>
  )
}