// Takes an array of css properties and transition values, and returns
// a single transition css property.
export default ({ properties = ['all'], length = '300ms', ease = 'ease' }) => {
  const transitions = properties
    .map(prop => `${prop} ${length} ${ease}`)
    .join(', ');

  return `transition: ${transitions};`;
};
