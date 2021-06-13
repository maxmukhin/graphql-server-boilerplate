/* graphql-server-boilerplate
Copyright (c) 2019-present NAVER Corp.
MIT license */
import { mergeSchemas } from 'graphql-tools';
import { productSchema } from './basic/schema';
import { contactSchema } from './contact/schema';
import { mockSchema } from './mock/schema';
import { chainSchema } from './advanced/schema';

export const allSchema = mergeSchemas({
  schemas: [
    productSchema,
    contactSchema,
    mockSchema,
    chainSchema
  ],
});
