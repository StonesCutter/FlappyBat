import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// COMPONENTS
import RowList from "../components/funcComponents/RowList";
import customEventsBus from "../events/customEventsBus";

function EntryApp(props) {
  const navigate = useNavigate();

  const obj = [
    {
      title: "titolo 1",
      desc: "titolo 1",
    },
    {
      title: "titolo 2",
      desc: "titolo 2",
    },
    {
      title: "titolo 3",
      desc: "titolo 3",
    },
  ];

  useEffect(() => {
    /*customEventsBus.dispatch("onChangeBg", { backgroundColor: "red" });*/
    /*customEventsBus.on("onChangeBg", eventCustom);*/
    return () => {
      //customEventsBus.remove('onChangeBg');
    };
  }, []);

  function mapList(list, key) {
    return (
      <div key={key}>
        <span>{list.title}</span>
        <span>{list.desc}</span>
      </div>
    );
  }

  function goToLogin() {
    navigate("/login?name=roberto&cc=5463773873873478378347&surname=Brogi", {
      state: {
        name: "Francesco",
        surname: "Scialdone",
        logged: true,
      },
    });
  }

  function goToDetail() {
    navigate("/newsDetail/10/pippo");
  }

  function goToGame() {
    navigate("/game");
  }

  return (
    <div id="test" className="App">
      <p>
        <button onClick={goToGame}>Go To login</button>
      </p>

      {/*
      <p>
        <button onClick={goToLogin}>Go To login</button>
      </p>

      <p>
        <button
          onClick={customEventsBus.dispatch("onChangeBg", {
            backgroundColor: "red",
          })}
        >
          Manda evento a Login
        </button>
      </p>

      <p>
        <button onClick={goToDetail}>Go To Detail News</button>
      </p>

      <p>
        <button onClick={() => navigate("/cms")}>Go To Cms</button>
      </p>

      <p>
        <Link
          to={"/login"}
          state={{
            name: "Roberto",
            surname: "Brogi",
            logged: true,
          }}
        >
          Go TO Login
        </Link>
      </p>

      <RowList title={"RowList"}>{obj.map(mapList)}</RowList>
      */}
    </div>
  );
}

export default EntryApp;
