import { useAppSelector } from "./useTypedSelectorHook";
import { RootState } from "../store/Store";

const usePageSlice = () => {
  const page = useAppSelector((state: RootState) => state.pageReducer.page);
  return page;
};
export default usePageSlice;
