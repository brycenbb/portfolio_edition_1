import { useEffect, useState } from 'react';
import Image from '../Image';
// var contentful = require('contentful');
import * as contentful from 'contentful';
function Project() {
  const [project, setProject] = useState([]);
  function compare(a, b) {
    return a.fields.id - b.fields.id;
  }
  useEffect(() => {
    async function Fetch() {
      const client = contentful.createClient({
        space: process.env.REACT_APP_CONTENTFULA,
        accessToken: process.env.REACT_APP_CONTENTFULB,
      });
      let res = await client.getEntries();
      console.log(res.items.sort(compare));
      setProject(res.items.sort(compare));
    }
    Fetch();
  }, []);
  //TODO: make a component for the images so that clicking will cycle through them :)
  return (
    <>
      {project.map((item, index) => {
        if (index > 3) {
          return <div key={index} style={{ display: 'none' }}></div>;
        }
        return (
          <article className="project" key={index}>
            <div className="brief">
              <p>{item.fields.overview}</p>
              {item.fields.video ? (
                <a
                  href={item.fields.video}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: '1.5rem' }}
                >
                  Watch our development journey
                </a>
              ) : (
                <></>
              )}
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
