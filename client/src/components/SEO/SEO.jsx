import React from "react";
import {Helmet} from "react-helmet";

export default function SEO({children, title}) {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta
          name="description"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta temporibus ad laborum vel nihil fugiat quae deleniti nemo, repudiandae illum sapiente eaque assumenda rem error delectus omnis corporis obcaecati. Asperiores."
        />
      </Helmet>
      {children}
    </div>
  );
}
