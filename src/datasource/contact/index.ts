/* graphql-server-boilerplate
Copyright (c) 2019-present NAVER Corp.
MIT license */
import { isEmpty } from 'lodash';
import { contactModel, IContact } from './model';

async function getContact(contactId: string) {
  return contactModel.findOne({contactId});
}

async function getContactList(sortColumn: string) {

  const sortOption : {} = {};
  // @ts-ignore
  sortOption[sortColumn] = 1;

  const options = {
    sort: sortOption
  };

  return contactModel.find({}, [], options);
}

async function createContact(contact: IContact) {
  const exist = await getContact(contact.contactId);

  console.log(contact, exist);

  return isEmpty(exist) ? await contactModel.create(contact) : exist;
}

async function updateContact(contact: IContact) {
  return contactModel.findOneAndUpdate({contactId: contact.contactId}, contact, {new: true});
}

async function deleteContact(contact: IContact) {
  const result = await contactModel.deleteOne({ contactId: contact.contactId });
  return Boolean(Number(result.ok));
}

export { getContact, getContactList, createContact, updateContact, deleteContact };
