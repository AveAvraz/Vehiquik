// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('VehiQuik')
    .items([
      S.documentTypeListItem('vehicle').title('Vehicles'),
      S.documentTypeListItem('category').title('Categories'),
      //S.documentTypeListItem('author').title('Authors'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['vehicle', 'category'].includes(item.getId()),
      ),
    ])
