import { getConfig } from './lib/getConfig';
import { healthCheck } from './lib/healthCheck';

const mainFunction = () => {
  let index = 0;
  while (true) {
    index++;
    const { url, webhook } = getConfig(index);
    if (!url) break;

    console.log(`[${index}] Checking ${url}...`);
    healthCheck(url, webhook);
  }
};

console.log('Node prober has started...');
mainFunction();
console.log('Finished probing.');
