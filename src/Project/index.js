import { useEffect } from 'react';
// var contentful = require('contentful');
import contentful from 'contentful';
function Project() {
  useEffect(() => {
    async function Fetch() {
      const client = contentful.createClient({
        space: '<space_id>',
        accessToken: '<access_token>',
      });
    }
  }, []);
}

export default Project;
