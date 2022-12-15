function ConstructionExperience({ lang }) {
  console.log(`langConstruction: ${lang}`);
  if (lang === "vi") {
    return (
      <iFrame
        src="https://docs.lumi.vn/share/b3123953-930c-45ca-aa5f-c48d5d7f7dbf"
        className="viewheight pt-9 pdb-0"
      ></iFrame>
    );
  } else if (lang === "en") {
    return (
      <iFrame
        src="https://docs.lumi.vn/share/7c9bf0d8-ff50-4e03-8d2e-fac82d6fe434"
        className="viewheight pt-9 pdb-0"
      ></iFrame>
    );
  }
}

export default ConstructionExperience;
