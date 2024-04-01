import { useAppSelector } from "./useTypedSelectorHook";
import { RootState } from "../store/Store";

const useAudioPlayerisLaunched = () => {
  const isLaunched = useAppSelector(
    (state: RootState) => state.audioplayerReducer.isLaunched
  );
  const postId = useAppSelector(
    (state: RootState) => state.audioplayerReducer.postId
  );

  return { isLaunched, postId };
};

export default useAudioPlayerisLaunched;
