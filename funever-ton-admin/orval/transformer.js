/**
 * Transformer function for orval.
 *
 * @param {OpenAPIObject} schema
 * @return {OpenAPIObject}
 */
module.exports = (inputSchema) => {
  const schema = {
    ...inputSchema,
    tags: inputSchema.tags?.map((item) => ({
      ...item,
      name: item.description,
    })),
    paths: Object.entries(inputSchema.paths).reduce(
      (acc, [path, pathItem]) => ({
        ...acc,
        [path]: Object.entries(pathItem).reduce(
          (pathItemAcc, [verb, operation]) => ({
            ...pathItemAcc,
            [verb]: {
              ...operation,
              tags: [inputSchema.tags?.find((item) => item.name === operation.tags[0]).description],
            },
          }),
          {}
        ),
      }),
      {}
    ),
  };
  return schema;
};
