import * as React from "react";
import componentPlayground from "spectacle/lib/components/component-playground";

export default class Viewer extends React.Component {
  componentDidMount() {
    cylindo.on("ready", () => {
      const options = {
        SKU: "PAIDGESOFA",
        accountID: 0,
        containerID: "cylindo-viewer",
        country: "us",
        environmentZoom: true,
        features: [("FABRIC COLOR", "GREY", "PILLOWS", "PILLOWS_1")],
        language: "eng",
        thumbCount: 3,
        viewerType: "2"
      };
      this.viewer = cylindo.viewer.create(options);
    });
  }
  render() {
    return <div id="cylindo-viewer" />;
  }
}
