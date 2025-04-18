
export interface ContentItem {
  id: string;
  title: string;
  type: string;
  status: string;
  lastModified: string;
}

export const contentData = {
  pages: [
    { id: '1', title: 'Home', type: 'page', status: 'Published', lastModified: '2024-03-15' },
    { id: '2', title: 'About', type: 'page', status: 'Published', lastModified: '2024-03-14' },
    { id: '3', title: 'Contact', type: 'page', status: 'Draft', lastModified: '2024-03-13' },
  ],
  blog: [
    { id: '4', title: 'Getting Started Guide', type: 'post', status: 'Published', lastModified: '2024-03-15' },
    { id: '5', title: 'Best Practices', type: 'post', status: 'Draft', lastModified: '2024-03-14' },
  ],
  media: [
    { id: '6', title: 'Hero Image', type: 'image', status: 'Active', lastModified: '2024-03-15' },
    { id: '7', title: 'About Banner', type: 'image', status: 'Active', lastModified: '2024-03-14' },
  ],
  video: [
    { id: '8', title: 'Welcome Video', type: 'video', status: 'Published', lastModified: '2024-03-15' },
    { id: '9', title: 'Tutorial', type: 'video', status: 'Processing', lastModified: '2024-03-14' },
  ]
};
