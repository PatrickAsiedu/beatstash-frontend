import { useAppSelector } from "./useTypedSelectorHook";
import { RootState } from "../store/Store";

const useAudioPlayerisLaunched = () => {
  const isLaunched = useAppSelector(
    (state: RootState) => state.audioplayerReducer.isLaunched
  );
  return isLaunched;
};

export default useAudioPlayerisLaunched;
