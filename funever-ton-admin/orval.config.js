module.exports = {
  petstore: {
    output: {
      mode: 'tags-split',
      target: 'src/api/index.ts',
      schemas: 'src/api/model',
      client: 'react-query',
      // mock: true,
      override: {
        mutator: {
          path: './src/utils/axios.ts',
          name: 'axiosInstance',
        },
      },
    },
    input: {
      target: './OpenAPI.json',
      override: {
        transformer: 'orval/transformer.js',
      },
    },
  },
};
