function WarrantyPolicy({ lang }) {
  if (lang === "vi") {
    return (
      <iFrame
        src="https://docs.lumi.vn/share/a96aa984-c647-4c76-9e62-53176bcfe42f"
        className="viewheight pt-9 pdb-0"
      ></iFrame>
    );
  } else {
    return (
      <iFrame
        src="https://docs.lumi.vn/share/8b68f9da-64f7-49c1-8512-a0d23e9d3970"
        className="viewheight pt-9 pdb-0"
      ></iFrame>
    );
  }
  // return (
  //   <iFrame
  //     src="https://docs.lumi.vn/share/a96aa984-c647-4c76-9e62-53176bcfe42f"
  //     className="viewheight pt-9 pdb-0"
  //   ></iFrame>
  // );
}

export default WarrantyPolicy;
