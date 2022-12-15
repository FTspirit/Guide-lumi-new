function SmarthomeKnowledge({ lang }) {
  if (lang === "vi") {
    return (
      <iFrame
        src="https://docs.lumi.vn/share/fee60170-648b-4050-813f-bb23caaaf85f"
        className="viewheight pt-9 pdb-0"
      ></iFrame>
    );
  } else {
    return (
      <iFrame
        src="https://docs.lumi.vn/share/50705d4d-8abe-4ff3-a15f-4d3fb1d371c7"
        className="viewheight pt-9 pdb-0"
      ></iFrame>
    );
  }
}

export default SmarthomeKnowledge;
