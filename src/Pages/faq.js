function Faq({ lang }) {
  if (lang === "vi") {
    return (
      <iFrame
        src="https://docs.lumi.vn/share/bd05305a-d311-4384-aa45-cbd76b27b09a"
        className="viewheight pt-9 pdb-0"
      ></iFrame>
    );
  } else {
    return (
      <iFrame
        src="https://docs.lumi.vn/share/ccc59201-5280-4239-aded-99df0b2acb0f"
        className="viewheight pt-9 pdb-0"
      ></iFrame>
    );
  }
}

export default Faq;
