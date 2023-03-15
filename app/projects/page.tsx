export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">My Projects</h1>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <h2 id="chess-gameplay-analysis">
          <a className="anchor" href="#chess-gameplay-analysis">
            <span className="icon icon-link"></span>
          </a>
          Chess Gameplay Analysis
        </h2>
        <div className="grid grid-cols-[auto_1fr_auto] items-center mt-1 mb-4 font-mono text-sm max-w-[650px]">
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
            <a href='https://github.com/Jashaul/Chess-Gameplay-Analysis' target="_blank" rel="noopener noreferrer">
              {"[Code]"}
            </a>
          </div>
          <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
        </div>
        <p>
          Chess Gameplay Analysis is a ML model to assess points of sub-optimal decision making in a game of chess, ie. critical position. 
          The model uses classification algorithm to find the critical position, a position in chess where one player has to make a crucial move to avoid the game from being steered in an unfavorable direction.
          Compared among Logistic Regression, Bagged & Boosted Trees, Random Forest, and Naïve-Bayes to model target variables to improve precision.
        </p>
        <p>Tools & Technologies: R, Python.</p>
        <h2 id="twitter-nature-trend">
          <a className="anchor" href="#twitter-nature-trend">
            <span className="icon icon-link"></span>
          </a>
          Twitter Nature Trend
        </h2>
        <div className="grid grid-cols-[auto_1fr_auto] items-center mt-1 mb-4 font-mono text-sm max-w-[650px]">
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
            <a href='https://github.com/Jashaul/Twitter-Trend-Nature' target="_blank" rel="noopener noreferrer">
              {"[Code]"}
            </a>
          </div>
          <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
        </div>
        <p>
          A dashboard application displays the sentiment of trending tweets and polarity of hashtags.
          Developed an NLP model on ensemble of classifiers - Logistic Regression, SVC, and Naïve-Bayes to improve accuracy.
          Designed the dashboard using ReactJs and developed the back-end using Django Python framework. 
        </p>
        <p>Tools & Technologies: Python, ReactJs, Redux, Twitter API, SQLite.</p>
        <h2 id="article-reach-estimation">
          <a className="anchor" href="#article-reach-estimation">
            <span className="icon icon-link"></span>
          </a>
          Article Reach Estimation for News Editors
        </h2>
        <div className="grid grid-cols-[auto_1fr_auto] items-center mt-1 mb-4 font-mono text-sm max-w-[650px]">
          <div/>
          <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
        </div>
        <p>
          Developed an NLP model to compare an article against a repository of news articles using NLTK packages. 
          The application recommends keywords and hashtags to improve article&apos;s impact, and social media reach.
          Designed the dashboard using ReactJs and developed the back-end using Django Python framework.
        </p>
        <p>Tools & Technologies: Python, ReactJs, Redux, MySQL.</p>
        <h2 id="dashboard-boilerplate">
          <a className="anchor" href="#dashboard-boilerplate">
            <span className="icon icon-link"></span>
          </a>
          Dashboard Boilerplate
        </h2>
        <div className="grid grid-cols-[auto_1fr_auto] items-center mt-1 mb-4 font-mono text-sm max-w-[650px]">
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
            <a href='https://github.com/Jashaul/Dashboard-Boilerplate'  target="_blank" rel="noopener noreferrer">
              {"[Code]"}
            </a>
          </div>
          <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
        </div>
        <p>
          Implemented a dashboard boilerplate using ReactJS with Redux configuration. 
          It allows users to quickly get started with the application by populating tabe with preconfigured axios API actions and reducers. 
        </p>
        <p>Tools & Technologies: ReactJs, Redux.</p>
      </article>
    </section>
  );
}
