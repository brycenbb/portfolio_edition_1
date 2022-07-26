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
      console.log('hi', res);
    }
    Fetch();
  }, []);
  //TODO: make a component for the images so that clicking will cycle through them :)
  return (
    <>
      {project.map((item, index) => {
        return (
          <div className="project" key={index}>
            <div className="brief">
              <p>{item.fields.overview}</p>
              <div>{item.fields.tools}</div>
            </div>
            <div>
              <div className="projectName">
                <em> {item.fields.projectTitle}</em>
              </div>
              <Image imageArr={item.fields.images}></Image>
              {/* <img
                alt="project array"
                src={item.fields.images[0].fields.file.url}
              ></img> */}
              <div className="info">
                <a target="_blank" rel="noreferrer" href={item.fields.live}>
                  Live
                </a>
                <a target="_blank" rel="noreferrer" href={item.fields.source}>
                  Github
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Project;
