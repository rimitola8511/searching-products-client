import { Helmet } from "react-helmet-async";

const Head = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" href="logo.png" type="image/x-icon" />
      <meta charset="utf-8" />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Mercado Libre, React, Front-end, JavaScript"
      />
      <meta name="author" content="Ricardo Imitola" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffe600" />
    </Helmet>
  );
};

export default Head;
