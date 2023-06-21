import React, { useContext, useEffect, useReducer, useState } from "react";
import "./containKeyboard.scss";
import { AppContext } from "../../context/index";
import SearchPrompt from "../SearchPrompt";
import MainTitle from "../MainTitle";
import Menu from "../Menu";
import LineLong from "../../assets/line-long.svg";
import MainInformation from "../MainInformation";
import MainSource from "../MainSource";

const buildPhonetics = (phonetics) => {
  return {
    text: (phonetics && phonetics[0] && phonetics[0].text) || "",
    audio: phonetics.find((phonetic) => phonetic.audio !== "")?.audio || "",
  };
};

const formatWord = (meaningWord) => {
  if (meaningWord?.word) {
    const { word = "", phonetics, meanings, sourceUrls } = meaningWord;
    return {
      word,
      phonetic: buildPhonetics(phonetics),
      meanings: meanings,
      source: sourceUrls,
    };
  }

  return {};
};

const getWordDefinition = async (word) => {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const reducer = (state, action) => {
  if (action.type === "update_word") {
    return {
      ...state,
      word: action.newWord,
    };
  }
};

const ContainKeyboard = () => {
  const { theme } = useContext(AppContext);
  const [state, dispactch] = useReducer(reducer, { word: "" });
  const [word, setWord] = useState();

  const handleInputChange = (e) => {
    dispactch({
      type: "update_word",
      newWord: e.target.value,
    });
  };

  useEffect(() => {
    if (state.word !== "") {
      getWordDefinition(state.word)
        .then((result) => {
          setWord(() => formatWord(result[0]));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [state]);

  return (
    <div className={`containKeyboard containKeyboard--${theme}`}>
      <Menu />
      <SearchPrompt handleInputChange={handleInputChange} />
      <MainTitle title={word && word.word} phonetic={word?.phonetic} />
      <MainInformation />
      <div className="containKeyboard-img">
        <img src={LineLong} alt="" />
      </div>
      <MainSource />
    </div>
  );
};

export default ContainKeyboard;
