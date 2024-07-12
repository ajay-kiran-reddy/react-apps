import { useState } from "react";
import "./auto.css";
import { useFetch } from "./useFetch";
import _ from "lodash";

interface AutoCompleteProps {
  id: string;
  name: string;
  placeholder: string;
  autocomplete: boolean;
  renderList: any;
  label: string;
  onSelect: any;
  dataPromise: any;
  debounceWait: number;
  errorMessage: string;
  emptyDataMessage: string;
  maxItems: number;
}

const AutoComplete = (props: AutoCompleteProps) => {
  const {
    autocomplete,
    id,
    name,
    placeholder,
    renderList,
    label,
    dataPromise,
    debounceWait,
    errorMessage,
    emptyDataMessage,
    maxItems,
  } = props;
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex]: any = useState(null);
  const [autoComp, setAutoComp] = useState(autocomplete);

  const { data, error }: any = useFetch(
    query,
    dataPromise,
    debounceWait,
    autoComp,
    maxItems
  );

  const handleInputChange = (value: string) => {
    setQuery(value);
    setAutoComp(true);
  };

  const onKeyDown = (event: any) => {
    //onkey enter
    if (event.key === "Enter") {
      if (activeIndex === null) {
        setActiveIndex(0);
        setQuery(data[0].title);
      } else {
        setQuery(data[activeIndex].title);
      }
      setAutoComp(false);
      return;
    }
    setAutoComp(true);
    //on key down
    if (event.key === "ArrowDown") {
      if (activeIndex !== null) {
        if (data.length - 1 === activeIndex) {
          setActiveIndex(0);
        } else {
          setActiveIndex((prev: any) => prev + 1);
        }
      } else {
        setActiveIndex(0);
      }
    }

    //on key up
    if (event.key === "ArrowUp") {
      if (activeIndex !== null) {
        if (activeIndex === 0) {
          setActiveIndex(data.length - 1);
        } else {
          setActiveIndex((prev: any) => prev - 1);
        }
      } else {
        setActiveIndex(0);
      }
    }
  };

  return (
    <div className="container">
      <label>{label}</label>
      <input
        className="input"
        placeholder={placeholder}
        id={id}
        value={query}
        name={name}
        onChange={(e) => handleInputChange(e.target.value)}
        onKeyDown={onKeyDown}
        autoComplete="off"
      />
      {data && data?.length > 0 && renderList(data, activeIndex)}

      {query && data?.length === 0 && emptyDataMessage}

      {error && errorMessage}
    </div>
  );
};

export default AutoComplete;
