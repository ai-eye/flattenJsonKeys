// Import stylesheets
import './style.css';
import { flattenme } from './flatten-me';
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const flattenWithLowerCaseKeys = (obj: any, path = ''): any => {
  if (!(obj instanceof Object)) return { [path.replace(/\.$/g, '')]: obj };

  return Object.keys(obj).reduce((output, key) => {
    return obj instanceof Array
      ? {
          ...output,
          ...flattenWithLowerCaseKeys(
            (<any>obj)[key],
            path + '[' + key.toLowerCase() + '].'
          )
        }
      : {
          ...output,
          ...flattenWithLowerCaseKeys(obj[key], path + key.toLowerCase() + '.')
        };
  }, {});
};

var ft = flattenWithLowerCaseKeys(flattenme);
var ptag;
for (var k in ft) {
  ptag = document.createElement('P');
  ptag.innerHTML = k;
  appDiv.appendChild(ptag);
}
