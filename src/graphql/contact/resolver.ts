/* graphql-server-boilerplate
Copyright (c) 2019-present NAVER Corp.
MIT license */
import { getContact, getContactList, createContact, updateContact, deleteContact } from '../../datasource/contact';
import { IContact } from '../../datasource/contact/model';

const resolvers = {
  Query: {
    contact: (parent: any, { contactId }: { contactId: string }) => getContact(contactId),
    contacts: (parent: any, {sort}: {sort: string}) => getContactList(sort),
  },

  Mutation: {
    createContact: (parent: any, { contact }: { contact: IContact }) => createContact(contact),
    updateContact: (parent: any, { contact }: { contact: IContact }) => updateContact(contact),
    deleteContact: (parent: any, { contact }: { contact: IContact }) => deleteContact(contact),
  },
};

export { resolvers };
