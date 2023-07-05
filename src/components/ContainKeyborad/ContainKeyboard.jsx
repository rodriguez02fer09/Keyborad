import React, { useContext, useEffect, useReducer, useState } from "react";
import "./containKeyboard.scss";
import { AppContext } from "../../context/index";
import SearchPrompt from "../SearchPrompt/src/SearchPrompt";
import MainTitle from "../MainTitle";
import Menu from "../Menu";
import LineLong from "../../assets/line-long.svg";
import MainInformation from "../MainInformation";
import MainSource from "../MainSource";

const buildPhonetics = (phonetics) => {
  return {
    text: phonetics.find((phonetic) => phonetic.text !== "")?.text || "",
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
    return {
      ...data,
      status: response.status,
    };
  } catch (err) {
    console.error(err);
  }
};

const reducer = (state, action) => {
  if (action.type === "update_word") {
    return {
      ...state,
      word: action.newWord, //newWord -payload
    };
  }
};

const ContainKeyboard = () => {
  const { theme } = useContext(AppContext);
  const [state, dispactch] = useReducer(reducer, { word: "" });
  const [word, setWord] = useState();
  const [empty, setEmpty] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handleInputChange = (e) => {
    dispactch({
      type: "update_word",
      newWord: e.target.value,
    });
  };

  const findWord = () => {
    if (state.word !== "") {
      getWordDefinition(state.word)
        .then((result) => {
          if (result.status === 200) {
            setWord(() => formatWord(result[0]));
            setNotFound(false)
            setEmpty(false)
          }
          if (result.status === 404) {
            setNotFound(true)
            setEmpty(false)
            setWord(() => {});
  
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setEmpty(true)
      setNotFound(false)
    setWord(() => {});
    }
  };

  return (
    <div className={`containKeyboard containKeyboard--${theme}`}>
      <Menu />
      <SearchPrompt empty={empty} notFound={notFound} findWord={findWord} handleInputChange={handleInputChange} />
      {word && word.word && (
        <>
          <MainTitle title={word && word.word} phonetic={word?.phonetic} />
          <MainInformation meanings={word && word.meanings} />
          <div className="containKeyboard-img">
            <img src={LineLong} alt="" />
          </div>
          <MainSource source={word && word.source} />
        </>
      )}
    </div>
  );
};

export default ContainKeyboard;

// const obj = {
//   nombre: "ggg"
// }
// const {nombre}= obj
// const atributo = "nombre"
// const val = obj[`${nombre}`];

//que es un mapeo pasar de un formato a otro formatoa otro objeto

// if (meaningWord?.word) el signo pregunta valida si un objeto exuste

// meaningWord && meaningWord.word esto es igual meaningWord?.word
