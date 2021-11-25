import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { DocumentListItemBuilder } from '@sanity/structure/lib/DocumentListItem';
import { FaHome as homeIcon } from 'react-icons/fa';
import { MdPerson as aboutIcon } from 'react-icons/md';
import { BsTelephoneFill as contactIcon } from 'react-icons/bs';

// build custom sidebar - this avoids client adding in multiple versions of a schema when not needed

export default function Sidebar() {
  return S.list()
    .title(`G&B Contracting`)
    .items([
      // create new sub items
      S.listItem().title(`Home Page`).icon(homeIcon).child(
        S.editor()
          .schemaType(`settings`)
          // create new id to avoid string of numbers
          .documentId(`GB`)
      ),
      S.listItem()
        .title(`About Page`)
        .icon(aboutIcon)
        .child(S.editor().schemaType(`about`).documentId(`about`)),
      S.listItem()
        .title(`Contact Information`)
        .icon(contactIcon)
        .child(S.editor().schemaType(`contact`).documentId(`contact`)),
      // add in rest of document items
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() !== 'settings' &&
          item.getId() !== 'about' &&
          item.getId() !== 'contact'
      ),
    ]);
}
