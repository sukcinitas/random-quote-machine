import React from "react";
import quoteList from "./quotes.json";

// background gradient theme names
const bgColor = [
  "first",
  "second",
  "third",
  "forth",
  "fifth",
  "sixth",
  "seventh",
];

let number, colorNumber, url;
function getRandomNumsUrl() {
  number = Math.floor(Math.random() * quoteList.length);
  colorNumber = Math.floor(Math.random() * bgColor.length);
  url =
    "https://twitter.com/intent/tweet?text=%22" +
    encodeURIComponent(quoteList[number].quote) +
    "%22%0A- " +
    encodeURIComponent(quoteList[number].author);

  return { number, colorNumber, url };
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      bgStyle: "",
      url: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleClick);
    getRandomNumsUrl();
    this.setState({
      quote: quoteList[number].quote,
      author: quoteList[number].author,
      bgStyle: bgColor[colorNumber],
      url: url,
    });
  }

  handleClick(e) {
    if (
      (e.type === "keydown" && e.code === "ArrowRight") ||
      e.type === "click"
    ) {
      getRandomNumsUrl();
      this.setState({
        quote: quoteList[number].quote,
        author: quoteList[number].author,
        bgStyle: bgColor[colorNumber],
        url: url,
      });
    } else {
      return;
    }
  }

  render() {
    const { bgStyle, quote, author, url } = this.state;
    return (
      <div id="bg" className={bgStyle}>
        <h1 id="head">Random Quote Machine</h1>

        <div id="quote-box">
          <blockquote>
            <p id="text">{quote}</p>
            <footer>
              <cite id="author"> &mdash; {author}</cite>
            </footer>
          </blockquote>
          <div id="buttons">
            <span className="tweet-icon">
              <a
                className="text"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                id="tweet-quote"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            </span>
            <span>
              <a
                href="#bg"
                role="button"
                id="new-quote"
                onClick={this.handleClick}
              >
                <i className="fas fa-arrow-right fa-2x"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
