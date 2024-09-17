import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import CampersList from "../../components/CampersList/CampersList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectCurrentPage,
  selectIsPageLoad,
  selectTotal,
  setCurrentPage,
  selectLoading,
  resetItems,
} from "../../redux/campersSlice";
import { fetchCampers } from "../../redux/campersOps";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";
import {
  selectCurrentFilters,
  setCurrentFilters,
} from "../../redux/filtersSlice";
import { resolveFilterParams } from "../../helpers/filtersHelper";
import style from "./CatalogPage.module.css";
import Container from "../../components/Container/Container";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const currentFilters = useSelector(selectCurrentFilters);
  const currentPage = useSelector(selectCurrentPage);
  const total = useSelector(selectTotal);
  const loading = useSelector(selectLoading);
  const isPageLoad = useSelector(selectIsPageLoad);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const initialPage = Number(searchParams.get("page")) || 1;

    const filters = {
      location: searchParams.get("location") || "",
      form: searchParams.get("form") || null,
      equipment: searchParams.getAll("equipment") || [],
    };

    dispatch(setCurrentFilters(filters));
    dispatch(setCurrentPage(initialPage));

    dispatch(
      fetchCampers({
        ...resolveFilterParams(filters),
        page: 1,
        limit: 4 * initialPage,
      })
    );
  }, []);

  useEffect(() => {
    if (isPageLoad) {
      return;
    }

    dispatch(resetItems());
    dispatch(setCurrentPage(1));

    dispatch(
      fetchCampers({
        ...resolveFilterParams(currentFilters),
        page: currentPage,
        limit: 4,
      })
    );

    updateSearchParams(currentFilters);
  }, [currentFilters]);

  useEffect(() => {
    if (isPageLoad) {
      return;
    }

    dispatch(
      fetchCampers({
        ...resolveFilterParams(currentFilters),
        page: currentPage,
        limit: 4,
      })
    );

    updateSearchParams(currentFilters);
  }, [currentPage]);

  const updateSearchParams = (currentFilters) => {
    const newSearchParams = {
      ...Object.fromEntries([...searchParams]),
    };

    if (currentPage > 1) {
      newSearchParams.page = currentPage;
    } else {
      delete newSearchParams.page;
    }

    if (currentFilters.location) {
      newSearchParams.location = currentFilters.location;
    } else {
      delete newSearchParams.location;
    }

    if (currentFilters.form) {
      newSearchParams.form = currentFilters.form;
    } else {
      delete newSearchParams.form;
    }

    if (currentFilters.equipment.length > 0) {
      newSearchParams.equipment = currentFilters.equipment;
    } else {
      delete newSearchParams.equipment;
    }

    setSearchParams(newSearchParams);
  };

  const loadMore = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  return (
    <Container>
      <div className={style.catalogPage}>
        <aside>
          <CatalogFilter />
        </aside>
        <main>
          {campers.length > 0 && (
            <CampersList campers={campers} state={location} />
          )}
          {loading && <div className={style.loadMoreBtn}>Loading...</div>}
          {!loading && total > campers.length && (
            <div className={style.loadMoreBtn}>
              <LoadMoreBtn onPress={loadMore} />
            </div>
          )}
        </main>
      </div>
    </Container>
  );
};

export default CatalogPage;
