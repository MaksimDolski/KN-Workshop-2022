export const NEW_DOCUMENT = "/documents/new-document";
export const SEARCH_DOCUMENT = "/documents/search-documents";
export const DOCUMENT_DETAILS = "/documents/document-details";

export const documentDefaultState = {
  title: "",
  description: "",
  author: "",
  publishDate: new Date().toLocaleString(),
  rating: 0,
  tags: [],
  imageUrl: "",
  contentUrl: "",
  contentFiles: [],
};
