export type Article = {
  id: string;
  createdAt: string;
  title: string;
  preview: string;
  image: string;
  description: string;
};

export type NavigationProps = {
  currentPage: number;
  paginationList: number[];
  totalPages: number;
};
