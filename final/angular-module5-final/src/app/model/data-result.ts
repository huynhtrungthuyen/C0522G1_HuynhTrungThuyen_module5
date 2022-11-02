export interface DataResult<T> {
  content: T[];
  // pageable: {
  //   pageNumber: number;
  //   pageSize: number;
  // };
  // page: number;
  // size: number;
  totalElements: number;
}
