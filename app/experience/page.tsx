export default function ExperiencePage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Work Experience</h1>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <h2 id="prifina-inc">
          <a className="anchor" href="#prifina-inc">
            <span className="icon icon-link"></span>
          </a>
          Prifina Inc.
        </h2>
        <div className="grid grid-cols-[auto_1fr_auto] items-center mt-1 mb-4 font-mono text-sm max-w-[650px]">
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
            {"Data Engineer Intern"}
          </div>
          <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" /> 
          <p className="font-mono text-sm text-neutral-500 tracking-tighter">May 2022 - Aug 2022</p> 
        </div>
        <ul>
          <li>Developed ETL pipelines to ingest, transform data from 8+ applications based on wearables such as Garmin, Fitbit, and Oura via. REST APIs using python.</li>
          <li>Built a statistical model to generate synthetic data by determining the best-fit distribution of the transformed real data from wearable applications, with about 85% accuracy.</li>
        </ul>
        <h2 id="madras-global-1">
          <a className="anchor" href="#madras-global-1">
            <span className="icon icon-link"></span>
          </a>
          Madras Global
        </h2>
        <div className="grid grid-cols-[auto_1fr_auto] items-center mt-1 mb-4 font-mono text-sm max-w-[650px]">
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
            {"Software Engineer"}
          </div>
          <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" /> 
          <p className="font-mono text-sm text-neutral-500 tracking-tighter">Jun 2019 - Jul 2021</p> 
        </div>
        <ul>
          <li>Led a team of 3 with Agile to build rich media application, allowing viewing metrics, publishing, scheduling, and modifying ads posted on Google and Facebook ads sites.</li>
          <li>Collaborated with cross functional teams to automate +10 workflow services for internal and external clients, and incorporated feedback from stakeholders and customers into application.</li>
          <li>Proposed and spearheaded a serverless cloud automation pipeline to extract files and metadata of zip files uploaded to AWS S3 using python, increasing client side rendering and efficiency by 70%.</li>
          <li>Implemented full-stack process creating restful APIs with Django framework at backend and ReactJs at frontend for online proofing tool, allowing users to request changes to media assets.</li>
          <li>Explored and modified the Django framework following MTV architecture to run ReactJS at template layer as a single server, reducing resource utilization and deployment time by 30%.</li>
        </ul>
        <h2 id="madras-global-2">
          <a className="anchor" href="#madras-global-2">
            <span className="icon icon-link"></span>
          </a>
          Madras Global
        </h2>
        <div className="grid grid-cols-[auto_1fr_auto] items-center mt-1 mb-4 font-mono text-sm max-w-[650px]">
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
            {"Data Engineer Intern"}
          </div>
          <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" /> 
          <p className="font-mono text-sm text-neutral-500 tracking-tighter">Dec 2018 - May 2019</p> 
        </div>
        <ul>
          <li>Developed scripts to extract, scrub, analyze and visualize datasets for predictive modeling with Django framework, SQLite, and Python.</li>
          <li>Programmed python automation scripts to scrape hourly and process 500K+ records for sentiment analysis.</li>
          <li>Automated full-stack process by creating restful APIs using Django and ReactJs, reducing manual effort by 80%. </li>
        </ul>
      </article>
    </section>
  );
}
