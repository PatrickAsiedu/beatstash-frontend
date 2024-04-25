import { useAppSelector } from "./useTypedSelectorHook";
import { RootState } from "../store/Store";

const usePageSlice = () => {
  const postPage = useAppSelector(
    (state: RootState) => state.pageReducer.postPage
  );
  const searchPage = useAppSelector(
    (state: RootState) => state.pageReducer.searchPage
  );
  return { postPage, searchPage };
};
export default usePageSlice;
