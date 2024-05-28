"use client";

import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Confarench = ({ params }) => {
  console.log();
  const roomId = params.confarench;

  const myMetting = async (element) => {
    const appID = 1486869269;
    const serverSecret = "31a37090619c5e4acb856964c8fa40c2";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Shadat"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };
  return (
    <div className="romm-page">
      <div ref={myMetting} />
    </div>
  );
};

export default Confarench;
