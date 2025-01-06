import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <>
      <div className="post">
        <div className="image">
          <Link to={`/post/${_id}`}>
            <img src={"http://localhost:4000/" + cover} alt="" />
          </Link>
        </div>

        <div className="texts">
          <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
          </Link>

          <p className="info">
            <a className="author">{author.username}</a>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>

       {/* <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2024/07/GettyImages-2158243831.jpg?resize=800,450"
            alt=""
          />
        </div>

        <div className="texts">
          <h2>Elon Musk's xAI lands $6B in new cash to fuel AI ambitions</h2>
          <p className="info">
            <a className="author">Elon Musk</a>
            <time> 2024-12-20 17:30</time>
          </p>
          <p className="summary">
            xAI, Elon Musk’s AI company, has raised $6 billion, according to a
            filing with the U.S. Securities and Exchange Commission on Thursday.
            Investors gave a minimum of $77,593, per the filing (97
            participated, but the document doesn’t reveal their identities).{" "}
          </p>
        </div>
      </div>

      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2019/06/GettyImages-636472710.jpg?resize=708,472"
            alt=""
          />
        </div>

        <div className="texts">
          <h2>AI startups attracted 25% of Europe's VC funding</h2>
          <p className="info">
            <a className="author">Oxford Bruce</a>
            <time> 2024-12-20 18:00</time>
          </p>
          <p className="summary">
            Venture funding into Europe is heading for a flat year, but this may
            obfuscate the fact that European AI startups are thriving.
          </p>
        </div>
      </div>

      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2024/12/GettyImages-2188251582.jpg?resize=1280,853"
            alt=""
          />
        </div>

        <div className="texts">
          <h2>
            OpenAI’s o3 suggests AI models are scaling in new ways — but so are
            the costs
          </h2>
          <p className="info">
            <a className="author">Nikki Shawn</a>
            <time> 2024-12-20 18:40</time>
          </p>
          <p className="summary">
            Last month, AI founders and investors told TechCrunch that we’re now
            in the “second era of scaling laws,” noting how established methods
            of improving AI models were showing diminishing returns. One
            promising new method they suggested could keep gains was “test-time
            scaling,” which seems to be what’s behind the performance of
            OpenAI’s o3 model — but it comes with drawbacks of its own.
          </p>
        </div>
      </div>

      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2024/11/GettyImages-2183848501.jpg?resize=708,472"
            alt=""
          />
        </div>

        <div className="texts">
          <h2>Nvidia’s CES 2025 keynote: How to watch</h2>
          <p className="info">
            <a className="author">Vikrant Patil</a>
            <time> 2024-12-20 18:55</time>
          </p>
          <p className="summary">
            Nvidia will no doubt have the biggest CES 2025. After all, the
            company has pretty much the biggest everything nowadays. The chip
            giant is sporting a $3.4+ trillion market cap, due largely to its
            foundational position in the ongoing AI boom. Companies like OpenAI
            and Meta have purchased Nvidia processors by the boatload, and
            that’s unlikely to change in the new year.
          </p>
        </div>
      </div>  */}
    </>
  );
}
