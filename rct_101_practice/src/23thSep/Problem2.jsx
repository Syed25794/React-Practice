import React from "react";
import { ContactButton } from "./ContactButton";
import { DownloadButton } from "./DownloadButton";
import { HelpButton } from "./HelpButton";
import { HomeButton } from "./HomeButton";
import { JoinUsButton } from "./JoinUsButton";
import { LoginButton } from "./LoginButton";
import { SearchButton } from "./SearchButton";
import { SettingsButton } from "./SettingsButton";

export const Problem2 = () => {
  return (
    <div  style={{display:"flex",margin:"20px"}}>
      <div style={{marginRight:"10px"}}>
        <DownloadButton />
        <SearchButton />
        <HelpButton />
        <LoginButton />
      </div>
      <div>
        <SettingsButton />
        <ContactButton />
        <JoinUsButton />
        <HomeButton />
      </div>
    </div>
  );
};
