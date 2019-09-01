import React from 'react';
import './App.css';

const quoteList = [{
  id:1, 
  quote:"To live is the rarest thing in the world. Most people exist, that is all.", 
  author:"Oscar Wilde"}, {
  id:2,
  quote:"...Those two, in paradise, were given a choice: happiness without freedom, or freedom without happiness. There was no third alternative...",
  author: "Yevgeny Zamyatin, We"
  }, {
  id: 3,
  quote: "Pain is inevitable. Suffering is optional.",
  author: "Haruki Murakami, What I Talk About When I Talk About Running"
  }, {
  id: 4,
  quote: "Stupidity is the same as evil if you judge by the results.",
  author: "Margaret Atwood, Surfacing"
  }, {
  id: 5,
  quote: "The only way you can write the truth is to assume that what you set down will never be read. Not by any other person, and not even by yourself at some later date. Otherwise you begin excusing yourself. You must see the writing as emerging like a long scroll of ink from the index finger of your right hand; you must see your left hand erasing it.",
  author: "Margaret Atwood, The Blind Assassin"
  }, {
  id: 6,
  quote: "If we were all on trial for our thoughts, we would all be hanged.",
  author: "Margaret Atwood, Alias Grace"
  }, {
  id: 7,
  quote: "If a person has had sufficient courage to discover an unpleasant truth about himself, one may safely trust his courage to be strong enough to carry him through.",
  author: "Karen Horney, Self-Analysis"
  }, {
  id: 8,
  quote: "There is no good reason why we should not develop and change until the last day we live.",
  author: "Karen Horney"
  }, {
  id: 9,
  quote: "For the analyst it is a source of never-ending astonishment how comparatively well a person can function with the core of himself not participating.",
  author: "Karen Horney, Neurosis and Human Growth: The Struggle Towards Self-Realization"
  }, {
  id: 10,
  quote: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
  author: "Isaac Asimov"
  }, {
  id: 11,
  quote: "The basic tool for the manipulation of reality is the manipulation of words. If you can control the meaning of words, you can control the people who must use them.",
  author: "Philip K. Dick"
  }, {
  id: 12,
  quote: "Xenology is an unnatural mixture of science fiction and formal logic. At its core is a flawed assumption—that an alien race would be psychologically human.",
  author: "Arkady Strugatsky, Roadside Picnic"
  },  {
  id: 13,
  quote: "The God hypothesis, for example, allows you to have an unparallelled understanding of absolutely everything while knowing absolutely nothing.",
  author: "Arkady and Boris Strugatsky"
  }];

//background gradient theme names
const bgColor = ["first", "second", "third", "forth", "fifth", "sixth", "seventh"];

let number, colorNumber, url;
function getRandomNumsandUrl() {
  number = Math.floor(Math.random() * quoteList.length);
  colorNumber = Math.floor(Math.random() * bgColor.length);
  url = "https://twitter.com/intent/tweet?text=%22" + encodeURIComponent(quoteList[number].quote) + "%22%0A- " + encodeURIComponent(quoteList[number].author);

  return {number, colorNumber, url};
}
//getting first quote info thats's used to set initial state
getRandomNumsandUrl(); 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quoteList[number].quote,
      author: quoteList[number].author,
      bgStyle: bgColor[colorNumber],
      url: url
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    getRandomNumsandUrl();
    this.setState ({
      quote: quoteList[number].quote,
      author: quoteList[number].author,
      bgStyle: bgColor[colorNumber],
      url: url
    })
  }

  render() {
    return (
      <div id="bg" className={this.state.bgStyle}>

        <h1 id="head">Random Quote Machine</h1>
        
        <div id="quote-box">
          <blockquote>
              <p id="text">{this.state.quote}</p>
              <footer><cite id="author"> &mdash; {this.state.author}</cite></footer>
          </blockquote>
          <div id="buttons">
            <span className="tweet-icon">
              <a  className="text" href={this.state.url} target="_blank" rel="noopener noreferrer" id="tweet-quote"><i className="fab fa-twitter fa-2x"></i></a>
            </span>  
            <span>
              <a href="#bg" role="button" id="new-quote" onClick={this.handleClick}><i className="fas fa-arrow-right fa-2x"></i></a>
            </span>
          </div>
        </div> 

      </div>
    )
  }
}

export default App;
