import React from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
import data from "./data";

const App = () => {
    const locations = data.map((item) => <Content key={item.id} {...item} />);
    return (
        <div className="wrapper">
            <Nav />
            {locations}
        </div>
    );
};

export default App;
