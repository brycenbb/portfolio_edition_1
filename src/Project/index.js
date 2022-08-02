import { useEffect, useState } from 'react';
import Image from '../Image';
// var contentful = require('contentful');
import * as contentful from 'contentful';
function Project() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    async function Fetch() {
      const client = contentful.createClient({
        space: process.env.REACT_APP_CONTENTFULA,
        accessToken: process.env.REACT_APP_CONTENTFULB,
      });
      let res = await client.getEntries();
      setProject(res.items);
    }
    Fetch();
  }, []);
  //TODO: make a component for the images so that clicking will cycle through them :)
  return (
    <>
      {project.map((item, index) => {
        return (
          <article className="project" key={index}>
            <div className="brief">
              <p>{item.fields.overview}</p>
              <div>{item.fields.tools}</div>
            </div>
            <div>
              <div className="projectName">
                <em> {item.fields.projectTitle}</em>
              </div>
              <Image imageArr={item.fields.images}></Image>

              <div className="info">
                <a target="_blank" rel="noreferrer" href={item.fields.live}>
                  Live
                </a>
                <a target="_blank" rel="noreferrer" href={item.fields.source}>
                  GitHub
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default Project;
