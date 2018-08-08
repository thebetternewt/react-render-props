export default ({ property = 'all', length = '300ms', ease = 'ease' }) => `
  transition: ${property} ${length} ${ease}
`;
