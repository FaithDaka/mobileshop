import React from 'react'
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const AutoSearch = ({products, handleSubmit}) => {

      const handleOnSearch = (string, results) => {
        console.log(string, results);
      };
    
      const handleOnHover = (result) => {
        console.log(result);
      };
    
      const handleOnSelect = (item) => {
        console.log(item);
      };
    
      const handleOnFocus = () => {
        console.log("Focused");
      };
    
      const handleOnClear = () => {
        console.log("Cleared");
      };

    return (
        <div>
            <div style={{ width: 400, margin: 20 }}>
          <ReactSearchAutocomplete
            items={products}
            // maxResults={15}
            fuseOptions={{ keys: ["title", "description"] }} // Search on both fields
            resultStringKeyName="title" // String to display in the results
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            onClear={handleOnClear}
            showIcon={false}
            styling={{
              height: "35px",
              border: "1px solid darkgreen",
              borderRadius: "4px",
              backgroundColor: "white",
              boxShadow: "none",
              hoverBackgroundColor: "lightgreen",
              color: "darkgreen",
              fontSize: "12px",
              fontFamily: "Courier",
              iconColor: "green",
              lineColor: "lightgreen",
              placeholderColor: "darkgreen",
              clearIconMargin: "3px 8px 0 0",
            }}
          />
          {/* <div class="input-group-append d-none d-lg-block">
                                                <button class="btn btn-primary" type="submit" >
                                                    <i class="la la-search la-flip-horizontal fs-18"></i>
                                                </button>
                                                        </div> */}
        </div>
        
            
        </div>
    )
}

export default AutoSearch;
