/* graphql-server-boilerplate
Copyright (c) 2019-present NAVER Corp.
MIT license */
import mongoose, { Document, Schema } from 'mongoose';

const contactSchema = new Schema({
  contactId: String,
  firstName: String,
  lastName: String,
  email : String,
});

export interface IContact {
  contactId: string;
  email: string;
}

interface IContactModel extends IContact, Document {}

export const contactModel = mongoose.model<IContactModel>('contacts', contactSchema);
