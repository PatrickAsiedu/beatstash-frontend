import { useAppSelector } from "./useTypedSelectorHook";
import { RootState } from "../store/Store";

const usePageSlice = () => {
  const postPage = useAppSelector(
    (state: RootState) => state.pageReducer.postPage
  );
  const searchPage = useAppSelector(
    (state: RootState) => state.pageReducer.searchPage
  );

  const location = useAppSelector(
    (state: RootState) => state.pageReducer.location
  );
  return { postPage, searchPage, location };
};
export default usePageSlice;
