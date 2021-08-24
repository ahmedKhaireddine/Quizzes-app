import path from "path";

import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";

const typesArray = loadFilesSync(path.join(__dirname, "./**/types/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "./**/resolvers/*.js"));

const typeDefs = mergeTypeDefs(typesArray, { all: true });
const resolvers = mergeResolvers(resolversArray);

export { typeDefs, resolvers };