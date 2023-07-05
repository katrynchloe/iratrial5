import React from "react";
import { createGlobalStyle } from "styled-components";
import { I18nProvider } from "./context/i18n";
import { FticProvider } from "./context/ftic";
import View from "./components/View";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import "./lib/FindTheInvisibleCow";

const App: React.FC = () => {
  return (
    <FticProvider>
      <I18nProvider>
        <GlobalStyle />
        <View />
        <Stats />
        <Footer />
      </I18nProvider>
    </FticProvider>
  );
};

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    background: #eee;
    font-family: Roboto, sans-serif;
    height: 100%;
    overflow-x: hidden;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    margin: 0;
  }

  a {
    color: #44c;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  svg {
    width: 100%;
  }
`;

export default App;
