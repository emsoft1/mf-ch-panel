import React , {useEffect}  from "react";
import ReactDOM from "react-dom";
import { Suspense, lazy } from 'react';
import "./index.css";
import { Header  } from "home/Header";
import { Footer } from "home/Footer";
import '../i18n';
import Box from '@mui/material/Box';
import  HomePage  from "./components/pages/HomePage";
import SafeComponent from "./SafeComponent";
import { useTranslation, Trans } from 'react-i18next';
const App = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [])

  const lng = navigator.language;
  return (
<Box sx={{ flexGrow: 1 }}>
<SafeComponent>
    <Header  label={t("Header.title")} backcolor="lightgreen"/>
</SafeComponent>
  <HomePage  text={t("greetings.hello")} />

  <span>
          Browser Language: {lng}
        </span>
<SafeComponent>
   <Footer label={"Panel Footer component from Home"} backcolor="lightpink"/>
  </SafeComponent>
   </Box>

);}
ReactDOM.render(<App />, document.getElementById("app"));
