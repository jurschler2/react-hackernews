import React from "react";
import axios from "axios";

const BASE_URL = "https://hn.algolia.com/api/v1/search?query="

class SearchForm extends React.Component {

  state = {
    value: "",
    articles: []
  }

  async searchForArticle() {
    const response = await axios.get(`
      ${BASE_URL}${this.state.query}
    `);
    const articles = response.data.hits;
    this.setState({articles})
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.searchForArticle();
  }

  handleChange = (evt) => {
    const {value} = evt.target;
    this.setState({value});
  }

  render = () => {

    return (

      <div>
        <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="query">Search:</label>
        <input name="query" value={this.state.query} onChange={this.handleChange} />
        <button>Submit</button>
        </form>
      </div>

    )

  }
}

export default SearchForm;