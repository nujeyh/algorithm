function solution(cacheSize, cities) {
  const cache = [];
  let time = 0;

  cities.forEach((city) => {
    const lowerCase = city.toLowerCase();
    const index = cache.indexOf(lowerCase);

    if (index !== -1) {
      cache.splice(index, 1);
      cache.push(lowerCase);
      time += 1;
    } else if (cacheSize !== 0) {
      if (cache.length >= cacheSize) {
        cache.shift();
        cache.push(lowerCase);
      } else {
        cache.push(lowerCase);
      }
      time += 5;
    } else time += 5;
  });
  return time;
}