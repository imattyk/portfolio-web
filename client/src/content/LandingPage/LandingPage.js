import React from "react";

const LandingPage = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return <div>LANDING PAGE - {data}</div>;
};

export default LandingPage;
