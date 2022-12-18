import React, { useCallback, useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { useNavigate } from "react-router-dom";
import "../searchbar/Searchbar.scss";
import { ClearButton } from "react-bootstrap-typeahead";
const CACHE = {};
const PER_PAGE = 50;

function makeAndHandleRequest(query, page = 1) {
  // const [text, setText] = useState("");
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer MJ8QwlXHPbsNR0venFnOpot86EFvX64biJRpw7",
      "Access-Control-Allow-Headers":
        "DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type",
    },
    body: JSON.stringify({
      offset: 0,
      limit: 100,
      query: query,
      collectionId: "8ba42171-c70c-4de5-a73e-2b674799a162",
    }),
  };
  return fetch("https://docs.lumi.vn/api/documents.search", requestOptions)
    .then((resp) => resp.json())
    .then(({ data }) => {
      let options = data.map((i) => ({
        id: i.document.id,
        title: i.document.title,
        context: i.context,
      }));
      var final = [];
      var different = [];
      options.forEach((el) => {
        if (el.title.toLowerCase().includes(query.toLowerCase())) {
          final.push(el);
        } else different.push(el);
      });
      options = final.concat(different);
      return { options };
    });
}
async function setUpChangeScreen(query) {
  console.log("query", query);

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer MJ8QwlXHPbsNR0venFnOpot86EFvX64biJRpw7",
      "Access-Control-Allow-Headers":
        "DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type",
      // "Access-Control-Allow-Origin": 'http://localhost:3000',
    },
    body: JSON.stringify({
      documentId: query[0].id,
    }),
  };
  const resp = await fetch(
    "https://docs.lumi.vn/api/shares.info",
    requestOptions
  );
  const { data } = await resp.json();
  const options = data.shares[0].id;
  const url = data.shares[0].url;
  return { options, url };
}

function SearchBar({ lang }) {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleInputChange = () => {
    setQuery("");
  };
  const changeScreen = (q) => {
    setUpChangeScreen(q).then((resp) => {
      console.log(resp.url);
      if (lang === "vi") {
        navigate("/vi/Search", { state: `${resp.url}` });
      } else {
        navigate("/en/Search", { state: `${resp.url}` });
      }
    });
  };
  const handletext = (event) => {
    console.log(event);
  };
  const handlePagination = (e, shownResults) => {
    const cachedQuery = CACHE[query];

    if (
      cachedQuery.options.length > shownResults ||
      cachedQuery.options.length === cachedQuery.total_count
    ) {
      return;
    }
  };

  const ref = React.createRef();
  const handleSearch = useCallback((q) => {
    if (CACHE[q]) {
      setOptions(CACHE[q].options);
      return;
    }

    setIsLoading(true);
    makeAndHandleRequest(q).then((resp) => {
      CACHE[q] = { ...resp, page: 1 };

      setIsLoading(false);
      setOptions(resp.options);
    });
  }, []);
  const labelkey = (option) => {
    return `${option.id} ${option.title} ${option.context}`;
  };
  return (
    <AsyncTypeahead
      id="async-pagination-example"
      isLoading={isLoading}
      labelKey={(option) => labelkey(option)}
      maxResults={PER_PAGE - 1}
      minLength={2}
      onInputChange={handleInputChange}
      onPaginate={handlePagination}
      onSearch={handleSearch}
      onChange={changeScreen}
      options={options}
      paginate
      filterBy={() => true}
      placeholder="Tìm kiếm bài viết"
      renderMenuItemChildren={(option, props, index) => (
        <div key={option.id} onClick={handletext} className="optioncard">
          <p className="optionheading">{option.title}</p>
          <p className="optionbody">{option.context.replace(/<[^>]+>/g, "")}</p>
        </div>
      )}
      useCache={false}
      ref={ref}
    >
      {({ onClear, selected }) => (
        <div className="rbt-aux">
          {!selected.length && <ClearButton onClick={onClear} />}
        </div>
      )}
    </AsyncTypeahead>
  );
}

export default SearchBar;
