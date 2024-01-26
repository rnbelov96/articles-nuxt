type UsePaginationOptions = {
  initCurrentPage?: number;
  itemsPerPage?: number;
  paginationStep?: number;
  onPageChange?: Function;
};

export const usePagination = (
  items: any[] | globalThis.Ref<any[] | null>,
  options?: UsePaginationOptions,
) => {
  const route = useRoute();
  const router = useRouter();

  const itemList = isRef(items) ? items.value : items;

  let isRouteChanged = false;

  const currentPage = ref(
    options?.initCurrentPage || Number(route.query.page) || 1,
  );

  const itemsPerPage = options?.itemsPerPage || 3;
  const paginationStep = options?.paginationStep || 1;

  const setCurrentPage = (newPage: number) => {
    isRouteChanged = true;

    currentPage.value = newPage;

    if (options?.onPageChange) {
      options.onPageChange(newPage);
    }

    router.push({ path: route.path, query: { page: newPage } });
  };

  const totalPages = computed(() => Math.ceil((itemList?.length ?? 0) / itemsPerPage));

  if (currentPage.value > totalPages.value) {
    currentPage.value = 1;
  }

  const paginationList = computed(() => {
    if (!totalPages.value) {
      return [];
    }
    const list: number[] = [];
    if (totalPages.value < paginationStep * 2 + 6) {
      for (let i = 1; i <= totalPages.value; i += 1) {
        list.push(i);
      }
    } else if (currentPage.value < paginationStep * 2 + 1) {
      for (let i = 1; i < paginationStep * 2 + 4; i += 1) {
        list.push(i);
      }
      list.push(0);
      list.push(totalPages.value);
    } else if (currentPage.value > totalPages.value - paginationStep * 2) {
      list.push(1);
      list.push(0);
      for (
        let i = totalPages.value - paginationStep * 2 - 2;
        i < totalPages.value + 1;
        i += 1
      ) {
        list.push(i);
      }
    } else {
      list.push(1);
      list.push(0);
      for (
        let i = currentPage.value - paginationStep;
        i < currentPage.value + paginationStep + 1;
        i += 1
      ) {
        list.push(i);
      }
      list.push(0);
      list.push(totalPages.value);
    }
    return list;
  });

  const currentItems = computed(() => {
    if (!itemList) {
      return [];
    }
    return itemList?.slice(
      (currentPage.value - 1) * itemsPerPage,
      currentPage.value * itemsPerPage,
    );
  });

  watch(
    () => route.query.page,
    () => {
      if (isRouteChanged) {
        isRouteChanged = false;
        return;
      }
      const newPage = Number(route.query.page) || 1;
      currentPage.value = Number(route.query.page) || 1;
      if (options?.onPageChange) {
        options.onPageChange(newPage);
      }
      router.replace({
        path: route.path,
        query: { page: Number(route.query.page) || 1 },
      });
      isRouteChanged = false;
    },
  );

  return {
    currentPage,
    setCurrentPage,
    currentItems,
    totalPages,
    paginationList,
  };
};
