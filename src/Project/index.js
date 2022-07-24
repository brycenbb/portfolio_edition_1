import { useEffect } from 'react';
// var contentful = require('contentful');
import * as contentful from 'contentful';
function Project() {
  useEffect(() => {
    async function Fetch() {
      const client = contentful.createClient({
        space: process.env.REACT_APP_CONTENTFULA,
        accessToken: process.env.REACT_APP_CONTENTFULB,
      });
      let res = await client.getEntries();
      console.log('hi', res);
    }
    Fetch();
  }, []);
  return <></>;
}

export default Project;
