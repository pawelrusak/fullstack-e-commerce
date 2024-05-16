import mongoose from 'mongoose';

/**
 * Parse mongoose schema with referenced model schema and return all schema paths in dot notation
 *
 * @example
 * ```javascript
 * const userSchema = new mongoose.Schema({
 *   name: String,
 *   email: String,
 * });
 *
 * const User = mongoose.model('User', userSchema);
 *
 * const blogSchema = new mongoose.Schema({
 *   title: String,
 *   body: String,
 *   author: {
 *     type: mongoose.Schema.Types.ObjectId,
 *     ref: 'User'
 *   },
 * });
 *
 * const Blog = mongoose.model('Blog', blogSchema);
 *
 * console.log('paths: ', getSchemaPaths(Blog.schema)); // paths: ['title', 'body', 'author.name', 'author.email']
 * ```
 *
 * @param schema - mongoose schema
 * @param prefix
 * @returns array of schema paths in dot notation
 */
export function getSchemaPaths(schema: mongoose.Schema, prefix = '') {
  const paths: string[] = [];

  schema.eachPath((path, schemaType) => {
    const fullPath = prefix ? `${prefix}.${path}` : path;

    if (path === '__v') {
      return;
    }

    if (schemaType.instance === 'ObjectId' && schemaType.options['ref']) {
      const referencedSchema = mongoose.model(schemaType.options['ref']).schema;

      const referencedPaths = getSchemaPaths(referencedSchema, fullPath);
      paths.push(...referencedPaths);
      return;
    }

    if (schemaType.schema) {
      const nestedPaths = getSchemaPaths(schemaType.schema, fullPath);
      paths.push(...nestedPaths);
      return;
    }

    paths.push(fullPath);
  });

  return paths;
}
