export default function ExperiencePage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Work Experience</h1>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <h2 id="infiswift-tech">
          <a className="anchor" href="#infiswift-tech">
            <span className="icon icon-link"></span>
          </a>
          Infiswift Technologies
        </h2>
        <div className="grid grid-cols-[auto_1fr_auto] items-center mt-1 mb-4 font-mono text-sm max-w-[650px]">
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
            {"Software Engineer"}
          </div>
          <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" /> 
          <p className="font-mono text-sm text-neutral-500 tracking-tighter">Sep 2023 - Nov 2023</p> 
        </div>
        <ul>
          <li>Designed and implemented an automated LinkedIn lead Generation system achieving 30% reduction in human efforts by optimizing the data processing pipeline, using Python and Selenium.</li>
          <li>Generated comprehensive reports summarizing emerging trends in the tech industry, achieving a 25% reduction in time-to-action on insights.</li>
        </ul>
        <h2 id="prifina-inc">
          <a className="anchor" href="#prifina-inc">
            <span className="icon icon-link"></span>
          </a>
          Prifina Inc.
        </h2>
        <div className="grid grid-cols-[auto_1fr_auto] items-center mt-1 mb-4 font-mono text-sm max-w-[650px]">
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
            {"Data Engineer"}
          </div>
          <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" /> 
          <p className="font-mono text-sm text-neutral-500 tracking-tighter">May 2022 - Aug 2022</p> 
        </div>
        <ul>
          <li>Constructed a robust statistical model to generate synthetic data by identifying suitable probability distribution for transformed real data sourced from wearable applications, achieving an impressive 85% accuracy rate.</li>
          <li>Designed and executed ETL (Extract, Transform, Load) pipelines to efficiently extract and process data from 8+ wearable applications, including Garmin, Fitbit, and Oura, through Python REST APIs.</li>
          <li>Collaborated with cross-functional teams to gather data and requirements, ensuring 100% alignment with project goals.</li>
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
          <li>Led and managed an Agile team of three to develop a feature-rich media application, enabling tracking of metric, ad publishing, scheduling, and modification on Google and Facebook advertising platforms.</li>
          <li>Collaborated seamlessly with cross-functional teams to automate more than ten critical workflow services for internal and external clients. Incorporated valuable feedback from stakeholders and customers to enhance application functionality.</li>
          <li>Pioneered design and implementation of a serverless cloud Python automation pipeline to efficiently extract files and metadata from zip files uploaded to AWS S3, resulting in a 70% improvement in client-side rendering and overall operational efficiency.</li>
          <li>Automated full-stack process by building RESTful APIs, applying Django framework, ReactJs and SQLite, empowering users to request changes and annotate media assets through an online proofing tool.</li>
          <li>Remodeled Django framework, following MTV architecture, to run ReactJS at template layer within a single server, optimizing resource utilization and reducing deployment time by 30%.</li>
        </ul>
        <h2 id="madras-global-2">
          <a className="anchor" href="#madras-global-2">
            <span className="icon icon-link"></span>
          </a>
          Madras Global
        </h2>
        <div className="grid grid-cols-[auto_1fr_auto] items-center mt-1 mb-4 font-mono text-sm max-w-[650px]">
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
            {"Data Engineer"}
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
